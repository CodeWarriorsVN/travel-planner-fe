import { useMemo } from "react";

type HeaderProps = {
  step: number;
  onNextStep: () => void;
};

export default function Header(props: HeaderProps) {
  const { step, onNextStep } = props;

  const headerText = useMemo(() => {
    switch (step) {
      case 1:
        return "Choose your favorite terrain";
      case 2:
        return "Choose your favorite climate";
      case 3:
        return "Choose your favorite population";
      case 4:
        return "Choose your favorite lifestyle";
    }
  }, [step]);

  return (
    <header className="flex justify-center items-center bg-gray-900 h-16 relative">
      <h1 className="text-white text-2xl">{headerText}</h1>
      <button
        className="absolute text-white text-2xl right-8"
        onClick={(e) => {
          e.preventDefault();
          onNextStep();
        }}
      >
        Next Step
      </button>
    </header>
  );
}
