import React from "react";
import Image from "next/image";
import LOGO from "../images/v-logo-2.png";
import Link from "next/link";

export const PageFooter = () => {
    return (
        <>
            <footer className="w-full py-10">
                <div className="container text-center">
                    <Link href="/" className="inline-flex items-end font-black text-neutral-950 dark:text-blue-200">
                    <Image src={LOGO} alt="logo" className="" width={48} height={48} />
                    <span className="inline-block text-4xl font-black">isualization</span>
                    </Link>
                    <ul className="text-lg flex items-center justify-center flex-col md:flex-row py-16 gap-6 md:gap-12 transition-all duration-500">
                        <li>
                            <Link href="/canvas-visual" className="text-gray-800 hover:text-indigo-600">
                                Canvas
                            </Link>
                        </li>
                        <li>
                            <Link href="/css-visual" className="text-gray-800 hover:text-indigo-600">
                                CSS
                            </Link>
                        </li>
                        <li>
                            <Link href="/svg-visual" className="text-gray-800 hover:text-indigo-600">
                                SVG
                            </Link>
                        </li>
                        <li>
                            <Link href={"https://github.com/kawsarBinSiraj/visualization"} target="_blank" className="text-gray-800 hover:text-indigo-600">
                                Resources
                            </Link>
                        </li>
                        <li>
                            <Link href={"https://kawsarbinsiraj.github.io/"} target="_blank" className="text-gray-800 hover:text-indigo-600">
                                Support
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="py-5 border-t border-gray-200">
                    <div className="container">
                        <div className="flex items-center flex-col-reverse justify-center md:flex-row">
                            <span className="text-sm text-gray-500 mt-7 md:mt-0">
                                <Link target="_blank" href={"https://kawsarbinsiraj.github.io/"} className="text-blue-500">
                                    ©kawsarbinsiraj.github.io
                                </Link>{" "}
                                {new Date().getFullYear()}, All rights reserved.
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};
