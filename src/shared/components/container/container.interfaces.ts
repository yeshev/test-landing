import { Classes } from "@/shared/types/classes.types";
import { PropsWithChildren } from "react";

export type ContainerProps = PropsWithChildren<{
  classes?: Classes<"root">;
}>;
