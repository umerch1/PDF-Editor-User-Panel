import AdminSidebar from "../components/AdminSidebar";
import { EmbedPDF } from "@simplepdf/react-embed-pdf";
const Documents = () => {
  return (
    <div className="flex flex-row">
      {/* SideBar */}
      <AdminSidebar />
      {/* Main */}
      <main className="w-3/4 flex justify-center items-center">
        <EmbedPDF>
          <button className="buttonStyle  text-4xl h-auto">
            Edit PDF Document
          </button>
        </EmbedPDF>
        
      </main>
    </div>
  );
};

export default Documents;
