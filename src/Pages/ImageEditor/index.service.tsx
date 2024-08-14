import { Document, Image, Page, pdf, StyleSheet } from "@react-pdf/renderer";
import { useRef, useState } from "react";
// @ts-ignore
import { saveAs } from "file-saver";
import axios from "axios";
import { ImageEitorTypes } from "./ImageEditorTypes";

function ImageServiceEditor({ navigation, children }: ImageEitorTypes) {
  const [progress, setProgress] = useState(0);
  // Image Background remove
  const [image, setImage] = useState<any>(null);
  const [processedImage, setProcessedImage] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const files = fileInputRef?.current?.files;
  const images: (string | ArrayBuffer | null | undefined)[] = [];
  const styles = StyleSheet.create({
    image: {
      padding: 15,
      marginTop: 20,
    },
  });
  const convertToPDF = () => {
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (event) => {
        images.push(event.target?.result);
        if (images.length === files.length) {
          pdfDownLoad(images);
          fileInputRef.current.value = "";
        }
      };
      reader.onerror = (error) => {
        console.log("Error reading file", error);
      };
      reader.readAsDataURL(file);
    }
  };
  const pdfDownLoad = (images: any) => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      if (currentProgress > 100) {
        clearInterval(interval);
        genratePDF(images);
      } else {
        setProgress(currentProgress);
      }
    }, 300);
  };
  const genratePDF = async (images: any) => {
    try {
      const doc = (
        <Document>
          {images.map((img: any, index: any) => (
            <Page key={index}>
              <Image src={img} style={styles.image} />
            </Page>
          ))}
        </Document>
      );
      const asPdf = pdf();

      asPdf.updateContainer(doc);
      const pdfBlob = await asPdf.toBlob();
      saveAs(pdfBlob, "convert pdf");
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleImageUpload = (event: any) => {
    setImage(event.target.files[0]);
  };

  const removeBackground = async () => {
    const formData = new FormData();
    formData.append("image_file", image);

    try {
      const response = await axios({
        method: "post",
        url: "https://api.remove.bg/v1.0/removebg",
        data: formData,
        responseType: "arraybuffer",
        headers: {
          "X-Api-Key": "WAS7gbuZ2FEKCWnx5HzXSK9p",
        },
      });

      const base64Image = btoa(
        new Uint8Array(response.data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ""
        )
      );
      setProcessedImage(`data:image/png;base64,${base64Image}`);
    } catch (error) {
      console.error("Error removing background:", error);
    }
  };
  return children({
    navigation,
    fileInputRef,
    convertToPDF,
    processedImage,
    handleImageUpload,
    removeBackground,
    progress,
  });
}

export default ImageServiceEditor;
