export function Input(
  inputProps: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
    <input
      className="bg-white w-full sm:w-auto placeholder:text-[#555555] placeholder:font-inter text-sm font-medium outline-none py-3 px-4 shadow"
      {...inputProps}
    />
  );
}
