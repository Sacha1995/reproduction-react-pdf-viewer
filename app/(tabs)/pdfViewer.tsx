import { useEffect } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { GlobalWorkerOptions } from "pdfjs-dist";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PDFViewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    // Set the workerSrc property to point to the worker file
    GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <Viewer
        fileUrl="/Horizontal-content.pdf"
        plugins={[defaultLayoutPluginInstance]}
      />
    </div>
  );
};

export default PDFViewer;
