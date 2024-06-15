import React from "react";
import { Menu } from "lucide-react";

import pagesConfig from "../../data/pages.json";
import { PagesConfig } from "../../data/types";
import clsx from "clsx";
import { Link } from "../ui/link.component";

const PagesConfigData = pagesConfig as PagesConfig;

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <>
            <header className="flex flex-row justify-between p-6 md:px-20 lg:px-28">
                <div>
                    <span className="text-primary-500 text-2xl font-bold md:mr-12">Seiva</span>
                </div>

                <button type="button" className="md:hidden" onClick={handleMenuClick}>
                    <Menu size={32} className="text-primary-500" />
                </button>

                <div className="hidden w-full flex-row items-center md:flex">
                    <nav className="mr-auto">
                        <ul className="flex flex-row gap-6">
                            {PagesConfigData.pages.map(page => (
                                <li key={page.path}>
                                    <Link.Navbar to={page.path} pageDefinition={page}>
                                        {page.name}
                                    </Link.Navbar>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <Link.Button to="/contato">Entre em contato</Link.Button>
                    </div>
                </div>
            </header>
            <div
                className={clsx("absolute h-full w-full bg-white transition-transform duration-300 ease-in md:hidden", {
                    "translate-x-full": !isMenuOpen,
                    "translate-x-0": isMenuOpen,
                })}
            >
                <nav className="px-6">
                    <ul className="flex flex-col items-center justify-evenly gap-16">
                        {PagesConfigData.pages.map(page => (
                            <li key={page.path}>
                                <Link to={page.path}>{page.name}</Link>
                            </li>
                        ))}

                        <li>
                            <Link.Button to="/contato">Entre em contato</Link.Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
