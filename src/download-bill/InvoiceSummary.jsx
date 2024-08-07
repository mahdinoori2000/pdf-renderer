// InvoiceSummary.jsx
import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  summary: {
    width: "100%",
    flexDirection: "column",
    alignItems: "space-between",
    marginTop: 10,
    paddingTop: 10,
    borderTop: "1px solid #666",
  },
  row: {
    width: "40%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "32px",
    marginBottom: 5,
  },
  label: {
    fontSize: "11px",

    fontFamily: "Open Sans",
    fontWeight: "600",
  },
  value: (color) => ({
    fontSize: "11px",
    color: color,
  }),
});

const InvoiceSummary = ({ paid, debt }) => (
  <View style={styles.summary}>
    <View style={styles.row}>
      <Text style={styles.label}>Paid :</Text>
      <Text style={styles.value("#1FB72F")}>{`${paid} $`}</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.label}>Remaining Debt :</Text>
      <Text style={styles.value("#F12525")}>{`${debt}.00 $`}</Text>
    </View>
  </View>
);

export default InvoiceSummary;
