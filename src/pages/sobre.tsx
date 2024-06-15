import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Page } from "../components/layout/page.component";

export const Head: HeadFC = () => <title>Seiva Jr. | Sobre</title>;

export default function SobrePage(props: React.FC<PageProps>) {
    return (
        <Page>
            <h1>Sobre</h1>
        </Page>
    );
}
