import { InputHTMLAttributes } from "react";
import { Classes } from "@/shared/types/classes.types";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  classes?: Classes<"root">;
};
