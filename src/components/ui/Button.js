const Button = ({ bold, ...props }) => {
  return (
    <button
      {...props}
      className={`${props.disabled && "opacity-50"} ${
        bold && "font-bold"
      } w-full text-white bg-orange py-2 rounded-[5px] px-4 transition duration-200 hover:bg-orange2 text-sm flex justify-center items-center`}
    />
  );
};

export default Button;
