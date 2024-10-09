import React from "react";
import { TransformOrigin } from "./css-visualization/transform-origin/TransformOrigin";
import Link from "next/link";

export const PageBanner = () => {
    return (
        <div className="page-banner text-center py-5">
            <div className="container">
                <div className="min-h-[75vh] flex items-center flex-col justify-center mb-10 mt-5">
                    <div className="banner-text mb-12">
                        <h1 className="text-8xl text-neutral-950 mb-5 font-black">Observe property behaves</h1>
                        <p className="text-2xl">Know a property by how it behaves, not just by its definition</p>
                    </div>
                    <TransformOrigin />
                </div>
            </div>
        </div>
    );
};
