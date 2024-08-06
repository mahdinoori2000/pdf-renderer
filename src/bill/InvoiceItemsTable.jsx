import { invoiceItems } from "../data/invoiceItems";

const InvoiceItemsTable = () => {
  return (
    <table className="w-full mb-8">
      <thead className="text-left w-full">
        <tr className="border border-[#E1E1E1] px-2">
          <th className="p-2">Product Name</th>
          <th className="p-2">Price</th>
          <th className="p-2">Quantity</th>
          <th className="p-2">Total</th>
        </tr>
      </thead>
      <tbody>
        {invoiceItems.map((row, index) => (
          <tr
            className={index % 2 !== 0 ? "bg-[#F9F5E6]" : "bg-white"}
            key={index}
          >
            <td className="p-2">{row.productName}</td>
            <td className="p-2">{`${row.price}$`}</td>
            <td className="p-2">{row.quantity}</td>
            <td className="p-2">{`${row.total}$`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvoiceItemsTable;
