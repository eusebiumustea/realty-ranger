interface InfoMessageProps {
  title: string;
  message: string;
}
export function InfoMessage({ title, message }: InfoMessageProps) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-inter text-center sm:text-start font-light text-[#0C4653] uppercase">
        {title}
      </h1>
      <p className="text-[#3E3E3E] text-base text-center sm:text-start pr-4 md:pr-24 max-w-[800px]">
        {message}
      </p>
    </div>
  );
}
