import PropTypes from "prop-types";
import { BsArrowRight } from "react-icons/bs";

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-[5px] right-1/2 transform translate-x-[-55%] !bg-[var(--secondary-white-color)] !px-5 cursor-pointer"
    >
      <BsArrowRight size={40} />
    </button>
  );
};

// prop validation
CustomRightArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CustomRightArrow;
