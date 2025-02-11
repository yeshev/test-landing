import { FC } from "react";

import { ContainerProps } from "@/shared/components/container/container.interfaces";
import { cn } from "@/shared/libs/cn";

export const Container: FC<ContainerProps> = ({ classes, children }) => {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-4 lg:px-8", classes?.root)}>
      {children}
    </div>
  );
};
