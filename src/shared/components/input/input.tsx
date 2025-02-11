import { FC } from "react";
import { InputProps } from "@/shared/components/input/input.interfaces";
import { cn } from "@/shared/libs/cn";

export const Input: FC<InputProps> = ({ type = "text", classes, ...props }) => {
  return (
    <input
      type={type}
      {...props}
      className={cn(
        "rounded-lg border border-gray-300 px-4 py-2",
        classes?.root,
      )}
    />
  );
};
