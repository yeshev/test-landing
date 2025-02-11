import { ButtonHTMLAttributes } from "react";
import { Classes } from "@/shared/types/classes.types";

export type ButtonProps = {
  classes?: Classes<"root">;
  variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;
