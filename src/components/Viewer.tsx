import {
  PDFViewer,
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { useDafContext } from "../contexts";

const styles = StyleSheet.create({
  section: {
    textAlign: "justify",
    fontFamily: "Heebo",
    margin: 10,
    padding: 10,
    border: 2,
  },
});

Font.register({
  family: "Heebo",
  src: "./src/res/fonts/Heebo.ttf",
});

function Viewer() {
  const { mekorot } = useDafContext();
  return (
    <>
      <PDFViewer className="PDFViewer">
        <Document>
          <Page size="A4">
            {mekorot.map((makor) => {
              return (
                <View key={makor.title} style={styles.section}>
                  <Text>{makor.content}</Text>
                </View>
              );
            })}
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
}

export default Viewer;
