import "./App.css";
// import Bill from "./Bill";
// import TextEditor from "./TextEditor";
import DownloadButton from "./download-bill/DownloadButton";
import { invoiceItems } from "./data/invoiceItems";

function App() {
  const invoiceData = {
    invoiceNumber: "TX-20240725-1234",
    date: "2024/Jul/25",
    customer: "Mahdi Noori",
    email: "mahdinoori@gmail.com",
    phone: "+93289454589",
    items: invoiceItems,
    totalAmount: 6000,
    paid: 4000,
    debt: 2000,
  };

  return (
    <div>
      <h1>Invoice</h1>
      <DownloadButton invoiceData={invoiceData} />
    </div>
  );
}

export default App;
