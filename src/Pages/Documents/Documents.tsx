import DocumentsServiceComponent from "./index.service";
import DocumentsComponent from ".";

function Documents(props: any) {
  return (
    <DocumentsServiceComponent {...props}>
      {(props: any) => <DocumentsComponent {...props} />}
    </DocumentsServiceComponent>
  );
}

export default Documents;
