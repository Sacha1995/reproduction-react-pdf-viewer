import { useEffect } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { GlobalWorkerOptions } from "pdfjs-dist";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Platform } from "react-native";

const PDFViewer = () => {
  // const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // useEffect(() => {
  //   // Set the workerSrc property to point to the worker file
  //   GlobalWorkerOptions.workerSrc =
  //     "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
  // }, []);

  if (Platform.OS !== "web") {
    return <div></div>;
  }

  return (
    <div style={{ height: "100vh" }}>
      {/* <Viewer
        fileUrl="/Horizontal-content.pdf"
        plugins={[defaultLayoutPluginInstance]}
      /> */}
    </div>
  );
};

export default PDFViewer;
