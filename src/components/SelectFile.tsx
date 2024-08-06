const FileViewer = () => {
  const handleFileChange = (event:any) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const content = reader.result;
        console.log(content)
      };
      reader.readAsDataURL(selectedFile); // You can also use readAsDataURL for images or readAsArrayBuffer for binary files
    }
  };
  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
        accept=".pdf, .jpg, .png, .docx" // Specify accepted file types if needed
      />
     
    </div>
  );
};

export default FileViewer;
