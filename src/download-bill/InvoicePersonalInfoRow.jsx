// InvoicePersonalInfoRow.jsx
import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
    width: 100,
  },
  value: {
    marginLeft: 10,
  },
});

const InvoicePersonalInfoRow = ({ text, value }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{text}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default InvoicePersonalInfoRow;
