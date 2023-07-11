import {
  PDFViewer,
  Document,
  Page,
  View,
  Text,
  //   StyleSheet,
  Font,
} from "@react-pdf/renderer";

// Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "row",
//     backgroundColor: "#E4E4E4",
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
// });

Font.register({
  family: "Heebo",
  src: "./src/res/fonts/Heebo.ttf",
});

function Viewer() {
  return (
    <>
      <PDFViewer>
        <Document>
          <Page size="A4">
            <View style={{ textAlign: "justify", fontFamily: "Heebo" }}>
              <Text>כךדגל חכךגדל חכךדגל חכךלדח ךל חדגךלכח ךלכ ךלגדח כךלגד</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
}

export default Viewer;
