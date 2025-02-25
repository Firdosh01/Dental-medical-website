import PropTypes from "prop-types";
import { BsArrowLeft } from "react-icons/bs";

const CustomLeftArrow = ({ onClick, BgColor, IconColor }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: BgColor }}
      className={`absolute bottom-[5px] left-1/2 transform translate-x-[-45%] !px-5 cursor-pointer`}
    >
      <BsArrowLeft size={40} color={`${IconColor}`} />
    </button>
  );
};

// prop validation
CustomLeftArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
  BgColor: PropTypes.string.isRequired,
  IconColor: PropTypes.string.isRequired,
};

export default CustomLeftArrow;
