const InvoiceTotalPrice = () => {
  const totalAmount = 100.5;
  const taxRateLow = totalAmount * 0.026;
  const taxRateHigh = totalAmount * 0.081;
  const grandTotal = (totalAmount + taxRateLow + taxRateHigh).toFixed(2);

  return (
    <div className="my-20 flex items-center justify-end gap-5 px-5 border border-gray-300 rounded-xl mx-auto py-5 sm:w-[90%] lg:w-[70%]">
      <ul>
        <li className="flex items-center justify-end gap-10 py-3 border-b border-gray-300">
          <p className="text-sm font-semibold">Total price:</p>
          <span className="font-bold">{`${taxRateLow.toFixed(2)} $`}</span>
        </li>
        <li className="flex items-center justify-end gap-10 py-3 border-b border-gray-300">
          <p className="text-sm font-semibold">Tax 8.1%:</p>
          <span className="font-bold">{`${taxRateHigh.toFixed(2)} $`}</span>
        </li>
        <li className="flex items-center justify-end gap-10 py-3 border-b border-gray-300">
          <p className="text-sm font-semibold">Tax 2.6%:</p>
          <span className="font-bold">{`${taxRateLow.toFixed(2)} $`}</span>
        </li>
        <li className="flex items-center justify-end gap-10 py-2 text-red-500">
          <p className="font-semibold">Grand TOTAL</p>
          <span className="font-bold text-lg">{`${grandTotal} $`}</span>
        </li>
      </ul>
    </div>
  );
};

export default InvoiceTotalPrice;
