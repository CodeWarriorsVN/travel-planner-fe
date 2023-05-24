import { useMemo } from "react";

type CardProps = {
  id: string;
  text: string;
  selected?: string;
  onSelect: (id: string) => void;
};

export default function Card(props: CardProps) {
  const { id, text, onSelect, selected } = props;

  const isActive = useMemo(() => {
    return id === selected;
  }, [id, selected]);

  return (
    <div
      className={`border rounded-md p-4 mx-3 mb-3 w-48 h-32 ${
        isActive ? "border-green-900 bg-green-200" : "border-gray-900"
      }`}
      onClick={(e) => {
        e.preventDefault();
        onSelect(id);
      }}
    >
      {text}
    </div>
  );
}
