import React from "react";
import { Link as GatsbyLink, type GatsbyLinkProps } from "gatsby";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { useLocation } from "@reach/router";
import { PageDefinition } from "../../data/types";

const isExternalLink = (path: string) =>
    path?.startsWith(`http://`) || path?.startsWith(`https://`) || path?.startsWith(`//`);

type ButtonLinkProps<TState> = React.PropsWithoutRef<GatsbyLinkProps<TState>> & {};

function ButtonLink<TState>({ children, className, ...props }: ButtonLinkProps<TState>) {
    return (
        <GatsbyLink<TState>
            {...props}
            className={twMerge(
                clsx(
                    "bg-primary-500 hover:bg-primary-600 active:bg-primary-700 rounded-lg px-4 py-3 font-bold text-white",
                    "focus-outline-none focus:ring-primary-500 focus:ring focus:ring-offset-2 focus:ring-offset-white",
                ),
                className,
            )}
        >
            {children}
        </GatsbyLink>
    );
}

type NavbarLinkProps<TState> = React.PropsWithoutRef<GatsbyLinkProps<TState>> & {
    pageDefinition: PageDefinition;
};

function NavbarLink<TState>({ children, className, pageDefinition, ...props }: NavbarLinkProps<TState>) {
    const location = useLocation();
    const isActive = React.useMemo(() => {
        return location.pathname === pageDefinition.path || location.pathname === `${pageDefinition.path}/`;
    }, [location.pathname]);

    return (
        <GatsbyLink<TState>
            {...props}
            className={twMerge(
                clsx("relative text-neutral-700 transition-colors duration-300 ease-in", {
                    "text-primary-500 after:bg-primary-500 font-bold after:absolute after:-bottom-full after:left-0 after:h-1 after:w-full":
                        isActive,
                }),
                className,
            )}
        >
            {children}
        </GatsbyLink>
    );
}

export function Link<TState>({ children, ...props }: React.PropsWithoutRef<GatsbyLinkProps<TState>>) {
    if (props.target === "_blank") {
        return (
            <a {...props} href={props.to} rel="noopener noreferrer" target="_blank">
                {children}
            </a>
        );
    }

    if (isExternalLink(props.to)) {
        return (
            <a {...props} href={props.to}>
                {children}
            </a>
        );
    }

    return <GatsbyLink<TState> {...props}>{children}</GatsbyLink>;
}

Link.Button = ButtonLink;
Link.Navbar = NavbarLink;
