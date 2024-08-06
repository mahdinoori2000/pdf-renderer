// DownloadButton.jsx
import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "./MyDocument";

const DownloadButton = ({ personalDetails, items, paymentInfo }) => (
  <PDFDownloadLink
    document={
      <MyDocument
        personalDetails={personalDetails}
        items={items}
        paymentInfo={paymentInfo}
      />
    }
    fileName="bill.pdf"
  >
    {({ loading }) => (loading ? "Downloading ..." : "Download Bill")}
  </PDFDownloadLink>
);

export default DownloadButton;
