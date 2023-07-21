import { ElementType } from "react";

interface TecnologyProps {
  technology: string;
  icon: ElementType;
}

export function Technology({ technology, icon: Icon }: TecnologyProps) {
  return (
    <div className="flex items-center gap-3 bg-white shadow-md p-6 w-full rounded-lg">
      <Icon className="text-2xl" />
      <p>{technology}</p>
    </div>
  );
}
