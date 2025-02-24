import PropTypes from "prop-types";
import { BsArrowLeft } from "react-icons/bs";

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-[5px] left-1/2 transform translate-x-[-45%] !bg-[var(--secondary-white-color)] !px-5 cursor-pointer"
    >
      <BsArrowLeft size={40} />
    </button>
  );
};

// prop validation
CustomLeftArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CustomLeftArrow;
