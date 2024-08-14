import ImageServiceEditor from "./index.service";
import ImageEditorComponent from ".";

function ImageEditor(props: any) {
  return (
    <ImageServiceEditor {...props}>
      {(props: any) => <ImageEditorComponent {...props} />}
    </ImageServiceEditor>
  );
}

export default ImageEditor;
