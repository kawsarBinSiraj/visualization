import React from "react";
import { BsFiletypeHtml, BsFiletypeSvg } from "react-icons/bs";
import { RiCss3Line } from "react-icons/ri";

export const ModernFeatures = () => {
    return (
        <div id="modern-features" className="py-16">
            <div className="container">
                <div className="lg:max-w-[50%] mx-auto mb-12">
                    <BsFiletypeHtml className="text-6xl inline-block mb-3 text-indigo-500" />
                    <p className="text-lg mb-3">Html5 Canvas</p>
                    <h3 className="text-2xl font-semibold font-poppins text-balance mb-3">Move even faster with canvas interaction</h3>
                    <p className="mb-0 text-[14px] text-slate-500">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatibus, eos dolores atque maxime commodi quisquam architecto necessitatibus consequatur odit consequuntur
                        explicabo est aliquid illum
                    </p>
                </div>
                <div className="lg:max-w-[50%] mx-auto text-end mb-12">
                    <RiCss3Line className="text-6xl inline-block mb-3 text-lime-500" />
                    <p className="text-lg mb-3">Cascading Style Sheet</p>
                    <h3 className="text-2xl font-semibold font-poppins mb-3 text-balance">Cutting-edge user interface</h3>
                    <p className="mb-0 text-[14px] text-slate-500">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatibus, eos dolores atque maxime commodi quisquam architecto necessitatibus consequatur odit consequuntur
                        explicabo est aliquid illum
                    </p>
                </div>
                <div className="lg:max-w-[50%] mx-auto">
                    <BsFiletypeSvg className="text-6xl inline-block mb-3 text-rose-600" />
                    <p className="text-lg mb-3">Scalable Vector Graphics</p>
                    <h3 className="text-2xl font-semibold font-poppins text-balance mb-3">Shape the Future with Scalable Precision</h3>
                    <p className="mb-0 text-[14px] text-slate-500">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptatibus, eos dolores atque maxime commodi quisquam architecto necessitatibus consequatur odit consequuntur
                        explicabo est aliquid illum
                    </p>
                </div>˝
            </div>
        </div>
    );
};
