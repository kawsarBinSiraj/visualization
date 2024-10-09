"use client";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "next-themes";
import LOGO from "../images/v-logo-3.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import DarkModeToggle from "react-dark-mode-toggle";

export const PageHeader = () => {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();

    return (
        <div className="page-header py-4 relative border-b bg-white dark:bg-black">
            <div className="container">
                <div className="row flex items-center justify-between">
                    <Link href="/" className="inline-flex items-end text-neutral-950 dark:text-blue-200 -mt-3">
                        <Image src={LOGO} alt="logo" className="-mr-1 -mt-8 pb-1" width={100} height={100} />
                        <span className="inline-block text-4xl font-black -ml-9">lsual</span>
                    </Link> 
                    <nav className="nav flex gap-7 text-[15px] text-slate-500">
                        <Link href={"/canvas-visual"} className={`hover:text-emerald-600 dark:text-slate-400 flex items-center gap-1 ${pathname === "/canvas-visual" && "text-emerald-600"}`}>
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            Html5 Canvas
                        </Link>
                        <Link href={"/css-visual"} className={`hover:text-purple-600 dark:text-slate-400 flex items-center gap-1 ${pathname === "/css-visual" && "text-purple-600"}`}>
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                            </span>
                            Cascading Style
                        </Link>
                        <Link href={"/svg-visual"} className={`hover:text-rose-600 dark:text-slate-400 flex items-center gap-1 ${pathname === "/svg-visual" && "text-blue-500"}`}>
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            Vector Graphics
                        </Link>
                    </nav>
                    <div className="social-connections flex items-center gap-3 text-slate-500">
                        <DarkModeToggle onChange={(bool) => setTheme(bool ? "dark" : "light")} checked={theme === "dark"} size={60} />
                        <Link href={"https://github.com/kawsarBinSiraj/css-is-js"} target="_blank" className="inline-flex items-center gap-2  dark:text-slate-400">
                            <FaGithub size={"1.5rem"} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
