// DownloadButton.jsx
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

const DownloadButton = ({ invoiceData }) => (
  <PDFDownloadLink
    document={<MyDocument invoiceData={invoiceData} />}
    fileName="invoice.pdf"
  >
    {({ loading }) => (loading ? 'Loading document...' : 'Download Invoice')}
  </PDFDownloadLink>
);

export default DownloadButton;
