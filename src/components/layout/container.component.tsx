import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = React.HTMLProps<HTMLDivElement>;

export function Container({ children, className, ...props }: ContainerProps) {
    return (
        <div {...props} className={twMerge(clsx("container mx-auto px-2 md:px-16 lg:px-24"), className)}>
            {children}
        </div>
    );
}
