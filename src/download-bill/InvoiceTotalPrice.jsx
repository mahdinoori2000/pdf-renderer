// InvoiceTotalPrice.jsx
import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  box: {
    width: "100%",
    borderTop: "1px dotted #d0d0d0",
    marginTop: 24,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  total: {
    width: "40%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "32px",
  },
  label: {
    fontFamily: "Open Sans",
    fontSize: "12px",
    fontWeight: 600,
  },
  value: {
    fontFamily: "Open Sans",
    fontSize: "12px",
    color: "red",
  },
});

const InvoiceTotalPrice = ({ totalAmount }) => {
  const taxRateLow = totalAmount * 0.026;
  const taxRateHigh = totalAmount * 0.081;
  const grandTotal = (totalAmount + taxRateLow + taxRateHigh).toFixed(2);

  return (
    <View style={styles.box}>
      <View style={styles.total}>
        <Text style={styles.label}>Grand TOTAL :</Text>
        <Text style={styles.value}>{`${grandTotal} $`}</Text>
      </View>
    </View>
  );
};

export default InvoiceTotalPrice;
