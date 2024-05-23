interface WelcomeMessageProps {
  title: string;
  subtitle: string;
}

export function WelcomeMessage({ title, subtitle }: WelcomeMessageProps) {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-3xl sm:text-7xl text-white font-inter text-center">
        {title}
      </h1>
      <h1 className="font-ptsans text-xl italic text-white">{subtitle}</h1>
    </div>
  );
}
