import { EmbedPDF } from "@simplepdf/react-embed-pdf";
import { FaUpload } from "react-icons/fa";
const HistoryCard = () => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg
            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          File Upload{" "}
        </h3>
      
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          <ul style={{listStyleType:'disc'}}>
            <li>Upload PDF files from your local system.</li>
            <li>Supports drag-and-drop functionality for easy file upload.</li>
          </ul>
        </p>
        <EmbedPDF>
          <button className="inline-flex items-center px-4 py-2 justify-between text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            <div className="mr-1">
              <FaUpload />
            </div>
            Uplad Pdf
          </button>
        </EmbedPDF>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg
            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        PDF Viewer
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        <ul style={{listStyleType:'disc'}}>
            <li>Display the selected PDF file within the dashboard.</li>
            <li>Pagination controls for navigating through PDF pages.</li>
            <li>Zoom in/out functionality for better viewing experience.</li>
          </ul>
        </p>
      </li>
      <li className="ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg
            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        Toolbar
        </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        <ul style={{listStyleType:'disc'}}>
            <li>Text Highlighting: Highlight important text within the PDF.</li>
            <li>Annotations: Add comments and annotations to the PDF.</li>
            <li>Drawing Tools: Freehand drawing, shapes (rectangle, circle, etc.).</li>
            <li>Text Addition: Insert custom text anywhere in the PDF.</li>
            <li>Eraser Tool: Remove unwanted annotations or drawings.</li>
            <li>Save and Download: Save the edited PDF and download it.</li>

          </ul>
        </p>
      </li>
    </ol>
  );
};

export default HistoryCard;
