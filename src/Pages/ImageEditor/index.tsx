import AdminSidebar from "../../components/AdminSidebar";
import { children } from "./ImageEditorTypes";
const ImageEditorComponent = ({
  fileInputRef,
  convertToPDF,
  processedImage,
  handleImageUpload,
  removeBackground,
}: children) => {
  return (
    <div className="flex flex-row">
      {/* SideBar */}
      <AdminSidebar />
      {/* Main */}
      <main className="w-3/4 flex justify-around items-center">
        <div className="editor-buttons ">
          <input
            type="file"
            ref={fileInputRef}
            className="w-full h-full"
            id="upload-file"
            placeholder="Upload a Picture"
          />
          <button
            className="buttonStyle"
            onClick={convertToPDF}
            id="download-btn"
          >
            Convert to PDF
          </button>
          <br />
        </div>

        <div className="editor-buttons">
          <input
            type="file"
            className="w-full h-full"
            onChange={handleImageUpload}
          />
          <button onClick={removeBackground} className="buttonStyle">
            Remove Background
          </button>
          {processedImage && <img src={processedImage} alt="Processed" />}
        </div>
      </main>
    </div>
  );
};

export default ImageEditorComponent;
