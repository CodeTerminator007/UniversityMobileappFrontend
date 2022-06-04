import * as React from "react";
import { View, Dimensions } from "react-native";
import PDFReader from "rn-pdf-reader-js";

function FileReader({ route }) {
  const { uri } = route.params;

  return (
    <PDFReader
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }}
      source={{
        uri: uri,
      }}
    />
  );
}
export default FileReader;
