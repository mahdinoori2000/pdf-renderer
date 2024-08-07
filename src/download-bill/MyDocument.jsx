// MyDocument.jsx
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import InvoiceItemsTable from "./InvoiceItemsTable";
import InvoicePersonalInfoRow from "./InvoicePersonalInfoRow";
import InvoiceSummary from "./InvoiceSummary";
import InvoiceTotalPrice from "./InvoiceTotalPrice";
import Logo from "../assets/logo.png";
import Flag from "../assets/switzerland-flag.jpg";

Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
      fontWeight: 600,
    },
  ],
});
// Define styles using StyleSheet.create
const styles = StyleSheet.create({
  page: {
    padding: 48,
    fontSize: "10px",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  section: {
    width: "100%",
    position: "relative",
    marginBottom: "32px",
    zIndex: 200,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  heading: {
    fontFamily: "Open Sans",
    fontSize: 32,
    fontWeight: 600,
    marginBottom: "20px",
  },

  logo: {
    width: "84px",
    height: "84px",
  },
  flag: {
    width: "320px",
    position: "absolute",
    bottom: 0,
    left: "50%",
    opacity: 0.4,
    transform: "translate(-100%, 0)",
  },
});

const MyDocument = ({ invoiceData }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <View style={styles.header}>
          <Text style={styles.heading}>INVOICE</Text>
          <Image style={styles.logo} src={Logo}></Image>
        </View>
        <InvoicePersonalInfoRow
          text="Invoice No:"
          value={invoiceData.invoiceNumber}
        />
        <InvoicePersonalInfoRow text="Invoice Date:" value={invoiceData.date} />
        <InvoicePersonalInfoRow text="Customer:" value={invoiceData.customer} />
        <InvoicePersonalInfoRow
          text="Customer Email:"
          value={invoiceData.email}
        />
        <InvoicePersonalInfoRow
          text="Customer Phone:"
          value={invoiceData.phone}
        />
      </View>

      <InvoiceItemsTable items={invoiceData.items} />
      <InvoiceTotalPrice totalAmount={invoiceData.totalAmount} />
      <InvoiceSummary paid={invoiceData.paid} debt={invoiceData.debt} />
      <Image style={styles.flag} src={Flag}></Image>
    </Page>
  </Document>
);

export default MyDocument;
