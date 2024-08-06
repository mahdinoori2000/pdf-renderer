// InvoiceSummary.jsx
import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  summary: {
    marginTop: 20,
    paddingTop: 10,
    borderTop: "1px solid #000",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
  },
  value: (color) => ({
    color: color,
  }),
});

const InvoiceSummary = ({ paid, debt }) => (
  <View style={styles.summary}>
    <View style={styles.row}>
      <Text style={styles.label}>Paid:</Text>
      <Text style={styles.value("#1FB72F")}>{`${paid}$`}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Remaining Debt:</Text>
      <Text style={styles.value("#F12525")}>{`${debt}$`}</Text>
    </View>
  </View>
);

export default InvoiceSummary;
