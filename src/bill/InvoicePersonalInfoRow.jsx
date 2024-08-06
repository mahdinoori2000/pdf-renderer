import PropTypes from "prop-types";

const InvoicePersonalInfoRow = ({ text, value }) => {
  return (
    <tr className="text-sm sm:text-base mb-1">
      <td className="font-semibold pb-1">{text}</td>
      <td className="pl-8 pb-1">{value}</td>
    </tr>
  );
};

InvoicePersonalInfoRow.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InvoicePersonalInfoRow;
