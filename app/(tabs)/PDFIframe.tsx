import { StyleSheet, View } from "react-native";

export default function PDFIframe() {
  return (
    <View style={styles.container}>
      <iframe
        src="/Horizontal-content.pdf"
        width="100%"
        height="100%"
        title="PDF Viewer"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
