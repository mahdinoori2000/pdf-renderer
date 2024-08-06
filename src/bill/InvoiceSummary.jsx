import PropTypes from "prop-types";

const InvoiceSummary = () => {
  return (
    <div className="flex justify-around flex-wrap my-3 py-6 bg-[#F2F2F2]">
      <InvoiceCalculationDisplay
        name="Total Price:"
        value={6000}
        color="#BA9A34"
      />
      <InvoiceCalculationDisplay name="Paid:" value={4000} color="#1FB72F" />
      <InvoiceCalculationDisplay
        name="Remaining Debt:"
        value={2000}
        color="#F12525"
      />
    </div>
  );
};

const InvoiceCalculationDisplay = ({ name, value, color }) => {
  return (
    <div className="flex gap-2">
      <p className="font-semibold">{name}</p>
      <span style={{ color: color }}>{`${value}$`}</span>
    </div>
  );
};

InvoiceCalculationDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default InvoiceSummary;
