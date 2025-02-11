import { FC } from "react";
import { ButtonProps } from "@/shared/components/button/button.interfaces";
import { cn } from "@/shared/libs/cn";

export const Button: FC<ButtonProps> = ({
  classes,
  children,
  variant = "primary",
  type = "button",
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      className={cn(
        "flex w-fit items-center justify-center rounded-lg bg-transparent px-4 py-2 transition-all",
        props.className,
        classes?.root,
        variant === "primary" && "bg-blue-500 text-white hover:bg-blue-200",
        variant === "secondary" &&
          "border border-gray-300 bg-white text-black hover:bg-gray-300",
      )}
    >
      {children}
    </button>
  );
};
