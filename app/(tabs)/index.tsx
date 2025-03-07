import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reproduction of react-pdf-viewer error</Text>
      <Text style={styles.description}>
        This app is to recreate the errors I have been getting with
        react-pdf-viewer.
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>1. React PDF Viewer</Text>
        <Text style={styles.cardText}>
          The first tab uses `react-pdf-viewer`, this is currenctly commented
          out. If you want to recreate the error, just uncomment the component.
        </Text>
        <Text style={styles.note}>
          The error "Unable to resolve module canvas" occurs because pdfjs-dist
          (the underlying library used by react-pdf-viewer) is trying to use the
          canvas package, which is a Node.js-specific module for working with
          the HTML5 '&lt;canvas&gt;' element. However, this module is not
          available in a React Native or Expo environment, especially when
          targeting the web. This issue arises because pdfjs-dist is attempting
          to use Node.js-specific code, which is not compatible with the browser
          or React Native.
        </Text>
        <Link href="/(tabs)/PDFViewer" style={styles.link}>
          <Text style={styles.linkText}>Go to React PDF Viewer Tab</Text>
        </Link>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>2. Iframe Viewer</Text>
        <Text style={styles.cardText}>
          The second tab uses a simple `&lt;iframe&gt;` to display a PDF. Just
          to show that the src is correct.
        </Text>
        <Link href="/(tabs)/PDFIframe" style={styles.link}>
          <Text style={styles.linkText}>Go to Iframe Tab</Text>
        </Link>
      </View>

      <Text style={styles.thankYou}>Thank you for checking this out!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: "center",
    color: "#555",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  cardText: {
    fontSize: 14,
    marginBottom: 10,
    color: "#555",
  },
  note: {
    fontSize: 12,
    fontStyle: "italic",
    marginBottom: 10,
    color: "#888",
  },
  link: {
    backgroundColor: "#007AFF",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  thankYou: {
    fontSize: 14,
    marginTop: 20,
    textAlign: "center",
    color: "#555",
  },
});
