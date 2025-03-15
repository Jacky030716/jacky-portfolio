import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-slate-500 bg-slate-900 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-14 w-full min-w-0 rounded-md px-3 py-2.5 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-base",
        "focus-visible:border-ring focus-visible:ring-slate-700 focus-visible:ring-[2px]",
        "aria-invalid:ring-[#804dee] dark:aria-invalid:[#804dee] aria-invalid:border-[#804dee]",
        className
      )}
      {...props}
    />
  );
}

export { Input };
