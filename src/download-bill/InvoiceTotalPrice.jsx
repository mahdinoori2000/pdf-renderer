// InvoiceTotalPrice.jsx
import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  total: {
    marginTop: 20,
    paddingTop: 10,
    borderTop: "1px solid #000",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    color: "red",
    fontWeight: "bold",
  },
});

const InvoiceTotalPrice = ({ totalAmount }) => {
  const taxRateLow = totalAmount * 0.026;
  const taxRateHigh = totalAmount * 0.081;
  const grandTotal = (totalAmount + taxRateLow + taxRateHigh).toFixed(2);

  return (
    <View style={styles.total}>
      <Text style={styles.label}>Grand TOTAL:</Text>
      <Text style={styles.value}>{`${grandTotal} $`}</Text>
    </View>
  );
};

export default InvoiceTotalPrice;
