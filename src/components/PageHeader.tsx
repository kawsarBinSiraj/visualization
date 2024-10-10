"use client";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "next-themes";
import LOGO from "../images/v-logo-2.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import DarkModeToggle from "react-dark-mode-toggle";
import { BsFiletypeHtml, BsFiletypeSvg } from "react-icons/bs";
import { RiCss3Line } from "react-icons/ri";

export const PageHeader = () => {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();

    return (
        <div className="page-header py-5 relative border-b bg-white dark:bg-black">
            <div className="container">
                <div className="row flex items-center justify-center gap-10">
                    <Link href="/" className="inline-flex items-end text-neutral-950 dark:text-blue-200 -mt-3">
                        <Image src={LOGO} alt="logo" className="" width={40} height={40} />
                        <span className="inline-block text-4xl font-black">
                            isua
                            <span className="text-xl font-light">lization</span>
                        </span>
                    </Link>
                    <nav className="nav flex gap-3 text-[15px] text-slate-500 mx-32">
                        <Link href={"/canvas-visual"} className={` flex items-center gap-1 py-2 px-4 rounded-sm ${pathname === "/canvas-visual" && "bg-emerald-600 text-lime-50"}`}>
                            <BsFiletypeHtml />
                            Canvas
                        </Link>
                        <Link href={"/css-visual"} className={` flex items-center gap-1 py-2 px-4 rounded-sm ${pathname === "/css-visual" && "bg-purple-600 text-purple-50"}`}>
                            <RiCss3Line />
                            CSS
                        </Link>
                        {/* <Link
                            href={"/svg-visual"}
                            className={`hover:text-rose-600 dark:text-slate-400 flex items-center gap-1 py-2 px-4 rounded-sm ${pathname === "/svg-visual" && "bg-blue-500 text-blue-50"}`}
                        >
                            <BsFiletypeSvg />
                            SVG
                        </Link> */}
                    </nav>
                    <div className="social-connections flex items-center gap-3 text-slate-500">
                        <DarkModeToggle onChange={(bool) => setTheme(bool ? "dark" : "light")} checked={theme === "dark"} size={60} />
                        <Link href={"https://github.com/kawsarBinSiraj/visualization"} target="_blank" className="inline-flex items-center gap-2  dark:text-slate-400">
                            <FaGithub size={"1.5rem"} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
