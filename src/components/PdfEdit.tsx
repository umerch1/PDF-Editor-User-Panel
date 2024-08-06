import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Note,
  Canvas,
  TextProps,
} from "@react-pdf/renderer";
// Create styles
import React,{useRef} from "react";
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#d11fb6",
    color: "white",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: '100%', //the pdf viewer will take up all of the width and height
    height: '100%',
  },
  canvas: {
    backgroundColor: "black",
    height: 500,
    width: 500,
  },
  text:{
    fontSize:30
  }
});

// Create Document Component
function BasicDocument() {

  // console.log(ref)
  return (
    <PDFViewer  style={styles.viewer}>
      {/* Start of the document*/}
      <Document  >
        {/*render a single page*/}
        {/* <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Hello</Text>
          
          </View>
          <View style={styles.section}>
            <Text>World</Text>
          </View>
          <Canvas
  style={styles.canvas}
  paint={
    (painterObject) =>
      painterObject
        .save()
        .moveTo(100, 100) //move to position 100,100
        .lineTo(300, 100) //draw a line till 300, 100
        .lineTo(300, 300) //draw another line till 300,300
        .fill("red") //when the diagram is drawn, set the background color to pink
  }
/>
        </Page> */}
         <Page size="A4">
    <Text
      style={styles.text}
      render={({ pageNumber, totalPages }) =>
        `Page ${pageNumber} of ${totalPages}`
      }
     
    />
  </Page>
  <Page>
    <Text> Hello, second page!</Text>
  </Page>
      </Document>
    </PDFViewer>
  );
}
export default BasicDocument;