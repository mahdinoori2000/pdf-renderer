// MyDocument.jsx
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Define styles using StyleSheet.create
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
    fontSize: 12,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subheading: {
    fontSize: 14,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
  },
  item: {
    marginBottom: 5,
  },
});

const MyDocument = ({ personalDetails, items, paymentInfo }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Personal Details</Text>
        <Text style={styles.text}>Name: {personalDetails.name}</Text>
        <Text style={styles.text}>Address: {personalDetails.address}</Text>
        <Text style={styles.text}>Email: {personalDetails.email}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Items Bought</Text>
        {items.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.text}>
              {item.name}: {item.quantity} x ${item.price}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Payment Information</Text>
        <Text style={styles.text}>
          Total Amount: ${paymentInfo.totalAmount}
        </Text>
        <Text style={styles.text}>Payment Method: {paymentInfo.method}</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
