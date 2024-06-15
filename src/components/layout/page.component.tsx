import React from "react";
import { Header } from "./header.component";

export function Page({ children }: React.PropsWithChildren) {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
}
