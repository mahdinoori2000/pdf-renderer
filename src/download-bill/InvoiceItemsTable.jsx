// InvoiceItemsTable.jsx
import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  table: {
    width: "100%",
    marginBottom: 32,
  },
  tableRow: {
    flexDirection: "row",
    borderBottom: "1px solid #E1E1E1",
  },
  tableCell: {
    flex: 1,
    padding: 5,
  },
});

const InvoiceItemsTable = ({ items }) => (
  <View style={styles.table}>
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>Product Name</Text>
      <Text style={styles.tableCell}>Price</Text>
      <Text style={styles.tableCell}>Quantity</Text>
      <Text style={styles.tableCell}>Total</Text>
    </View>
    {items.map((item, index) => (
      <View
        style={[
          styles.tableRow,
          { backgroundColor: index % 2 ? "#F9F5E6" : "#FFF" },
        ]}
        key={index}
      >
        <Text style={styles.tableCell}>{item.productName}</Text>
        <Text style={styles.tableCell}>{`${item.price}$`}</Text>
        <Text style={styles.tableCell}>{item.quantity}</Text>
        <Text style={styles.tableCell}>{`${item.total}$`}</Text>
      </View>
    ))}
  </View>
);

export default InvoiceItemsTable;
