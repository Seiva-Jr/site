import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Page } from "../components/layout/page.component";
import { Container } from "../components/layout/container.component";
import { StaticImage } from "gatsby-plugin-image";

export const Head: HeadFC = () => <title>Seiva Jr.</title>;

export default function IndexPage(props: React.FC<PageProps>) {
    return (
        <Page>
            <Container className="py-20">
                <h1 className="text-primary-500 flex flex-col gap-4 text-6xl font-bold">
                    <span className="flex flex-row gap-4">
                        <span className="flex-1">Ideias sustentáveis</span>
                        <StaticImage
                            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1613&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="h-[80px] flex-1 rounded-full"
                        />
                    </span>
                    <span className="flex flex-row gap-4">
                        <StaticImage
                            src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="h-[80px] w-[44%] rounded-full"
                        />
                        <span className="flex-1">integrando o mundo</span>
                    </span>
                </h1>
            </Container>
        </Page>
    );
}
