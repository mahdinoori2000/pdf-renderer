// MyDocument.jsx
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import InvoiceItemsTable from './InvoiceItemsTable';
import InvoicePersonalInfoRow from './InvoicePersonalInfoRow';
import InvoiceSummary from './InvoiceSummary';
import InvoiceTotalPrice from './InvoiceTotalPrice';

// Define styles using StyleSheet.create
const styles = StyleSheet.create({
  page: {
    padding: 10,
    fontSize: 12,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  table: {
    width: '100%',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCell: {
    flex: 1,
    padding: 5,
  },
  total: {
    marginTop: 20,
    paddingTop: 10,
    borderTop: '1px solid #000',
  },
});

const MyDocument = ({ invoiceData }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>INVOICE</Text>
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
    </Page>
  </Document>
);

export default MyDocument;
