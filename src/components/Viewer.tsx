import {
  PDFViewer,
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "pink",
  },
  section: {
    textAlign: "justify",
    fontFamily: "Heebo",
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

Font.register({
  family: "Heebo",
  src: "./src/res/fonts/Heebo.ttf",
});

function Viewer() {
  return (
    <>
      <PDFViewer>
        <Document>
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>
                כךדגל חכךגדל חכךדגל חכךלדח ךל חדגךלכח ךלכ ךלגדח כךלג חדגךלכח ךלכ
                ךלגדח כךלג חדגךלכח ךלכ ךלגדח כךלג חדגךלכח ךלכ ךלגדח כךלג חדגךלכח
                ךלכ ךלגדח כךלג חדגךלכח ךלכ ךלגדח כךלג חדגךלכח ךלכ ךלגדח כךלג
                חדגךלכח ךלכ ךלגדח כךלג חדגךלכח ךלכ ךלגדח כךלג חדגךלכח ךלכ ךלגדח
                כךלג חדגךלכח ךלכ ךלגדח כךלג חדגךלכח ךלכ ךלגדח כךלג חדגךלכח ךלכ
                ךלגדח כךלג חדגךלכח ךלכ ךלגדח כךלג חדגךלכח ךלכ ךלגדח כךלג חדגךלכח
                ךלכ ךלגדח כךלג חדגךלכח ךלכ ךלגדח כךלג חדגךלכח ךלכ ךלגדח כךלג
                חדגךלכח ךלכ ךלגדח כךלג חדגךלכח ךלכ ךלגדח כךלג חדגךלכח ךלכ ךלגדח
                כךלג חדגךלכח ךלכ ךלגדח כךלג חדגךלכח ךלכ ךלגדח כךלג חדגךלכח ךלכ
                ךלגדח כךלג חדגךלכח ךלכ ךלגדח כךלג חדגךלכח ךלכ ךלגדח כךלג חדגךלכח
                ךלכ ךלגדח כךלגד
              </Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
}

export default Viewer;
