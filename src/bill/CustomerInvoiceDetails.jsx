import InvoiceItemsTable from "./InvoiceItemsTable";
import InvoicePersonalInfoRow from "./InvoicePersonalInfoRow";
import InvoiceSummary from "./InvoiceSummary";
import InvoiceTotalPrice from "./InvoiceTotalPrice";

const CustomerInvoiceDetails = () => {
  const generateInvoiceNumber = () => {
    const now = new Date();
    const dateTimePart = [
      now.getFullYear(),
      ("0" + (now.getMonth() + 1)).slice(-2),
      ("0" + now.getDate()).slice(-2),
      ("0" + now.getHours()).slice(-2),
      ("0" + now.getMinutes()).slice(-2),
      ("0" + now.getSeconds()).slice(-2),
    ].join("");

    const randomPart = Math.floor(1000 + Math.random() * 9000);

    const invoiceNumber = `TX-${dateTimePart}-${randomPart}`;

    return invoiceNumber;
  };

  return (
    <>
      <section className="bg-white border px-10 py-10" ref={pdfRef}>
        <h3 className="pl-4 font-semibold mb-4">INVOICE</h3>
        <table className="block px-4 mb-4">
          <tbody>
            <InvoicePersonalInfoRow
              text="Invoice No:"
              value={generateInvoiceNumber()}
            />
            <InvoicePersonalInfoRow text="Invoice Date:" value="2024/Jun/05" />
            <InvoicePersonalInfoRow text="Customer:" value="Mahdi Noori" />
            <InvoicePersonalInfoRow
              text="Customer Email:"
              value="mahdinoori@gmail.com"
            />
            <InvoicePersonalInfoRow
              text="Customer Phone:"
              value="+93289454589"
            />
          </tbody>
        </table>
        <InvoiceItemsTable />
        <InvoiceTotalPrice />
        <InvoiceSummary />
      </section>
    </>
  );
};

export default CustomerInvoiceDetails;
