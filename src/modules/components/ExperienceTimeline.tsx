import { ReactNode } from "react";

export const ExperienceTimeline = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex relative w-full flex-col items-center">
      <div className="absolute w-1 h-[70vh] bg-gradient-to-b from-blue-900 to-purple-900 rounded-full">
        <div className="space-y-8 w-full">{children}</div>
      </div>
    </div>
  );
};
