function Chips({ label }) {
  return (
    <span className="px-2 py-1 ml-1 border border-gray-300 text-gray-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
      {label}
    </span>
  );
}
export default Chips;
