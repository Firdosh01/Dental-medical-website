// eslint-disable-next-line react/prop-types
const Button = ({ children }) => {
  return (
    <div className="bg-[var(--mid-blue-color)] hover:bg-[#186ad5] duration-300 b2_semibold rounded-[10px]">
      <button className="text-white !py-[15px] !px-[30px] border-none outline-none !cursor-pointer">
        {children}
      </button>
    </div>
  );
};

export default Button;
