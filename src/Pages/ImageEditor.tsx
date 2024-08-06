import { useRef, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Document, Image, Page, pdf, StyleSheet } from "@react-pdf/renderer";
import {saveAs} from 'file-saver';
import axios from 'axios';
const ImageEditor = () => {
  const [progress, setProgress] = useState(0);
  const fileInputRef=useRef<any>(null);
  const styles=StyleSheet.create({
    image:{
     padding:15,
     marginTop:20
    }
  })
  const convertToPDF=()=>{
    const files=fileInputRef.current.files;
    const images: (string | ArrayBuffer | null | undefined)[]=[];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload=(event)=>{
        images.push(event.target?.result);
         if(images.length===files.length){
          pdfDownLoad(images);
          fileInputRef.current.value="";
      }
      }
      reader.onerror=(error)=>{
        console.log("Error reading file",error)
      } 
      reader.readAsDataURL(file);
     
      
    }
  }

  const pdfDownLoad=(images:any)=>{
    let currentProgress=0;
    const interval= setInterval(()=>{
      currentProgress +=10;
      if (currentProgress>100) {
        clearInterval(interval);
        genratePDF(images)
      }else{
        setProgress(currentProgress);
      }
    },300)
  }

  const genratePDF= async(images:any)=>{
      try {
        const doc=(
          <Document>
            {images.map((img:any,index:any)=>(
              <Page key={index}>
                  <Image src={img} style={styles.image}/>
              </Page>
            ))}
          </Document>
        )
        const asPdf=pdf();

        asPdf.updateContainer(doc);
        const pdfBlob=await asPdf.toBlob();
        saveAs(pdfBlob, 'convert pdf')
      } catch (error) {
        console.log("error",error)
      }
  }

  // Image Background remove
  const [image, setImage] = useState<any>(null);
  const [processedImage, setProcessedImage] = useState<any>(null);

  const handleImageUpload = (event:any) => {
    setImage(event.target.files[0]);
  };

  const removeBackground = async () => {
    const formData = new FormData();
    formData.append('image_file', image);

    try {
      const response = await axios({
        method: 'post',
        url: 'https://api.remove.bg/v1.0/removebg',
        data: formData,
        responseType: 'arraybuffer',
        headers: {
          'X-Api-Key': 'WAS7gbuZ2FEKCWnx5HzXSK9p',
        },
      });

      const base64Image = btoa(
        new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
      setProcessedImage(`data:image/png;base64,${base64Image}`);
    } catch (error) {
      console.error('Error removing background:', error);
    }
  };
  return (
    <div className="flex flex-row">
    {/* SideBar */}
    <AdminSidebar />
    {/* Main */}
    <main className="w-3/4 flex justify-around items-center">
  
      <div className="editor-buttons ">
        <input type="file" ref={fileInputRef} className="w-full h-full" id="upload-file" placeholder="Upload a Picture" />
        <button className="buttonStyle" onClick={convertToPDF} id="download-btn">Convert to PDF</button>
        <br />
      </div>

      <div className="editor-buttons">
      <input type="file" className="w-full h-full" onChange={handleImageUpload} />
      <button onClick={removeBackground} className="buttonStyle">Remove Background</button>
      {processedImage && <img src={processedImage} alt="Processed" />}
    </div>
 
    </main>
  </div>
  
  );
};

export default ImageEditor;
