import PropTypes from "prop-types";
import { BsArrowRight } from "react-icons/bs";

const CustomRightArrow = ({ onClick, BgColor, IconColor }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: BgColor }}
      className={`absolute bottom-[5px] right-1/2 transform translate-x-[-55%] !px-5 cursor-pointer`}
    >
      <BsArrowRight size={40} color={`${IconColor}`} />
    </button>
  );
};

// prop validation
CustomRightArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
  BgColor: PropTypes.string.isRequired,
  IconColor: PropTypes.string.isRequired,
};

export default CustomRightArrow;
