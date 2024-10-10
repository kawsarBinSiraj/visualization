"use client";
import CodeWithSuspense from "@/components/CodeWithSuspense";
import React, { Suspense } from "react";

const page = () => {
    return (
        <div className="visualizer-page py-10">
            <div className="container">
                <header className="mb-14 text-center py-10">
                    <h2 className="text-6xl font-light mb-5">
                        No need to use javascript <br/> even a single line!
                    </h2> 
                    <p className="text-xl">CSS, crafting seamless web experiences! </p>
                </header>
                <Suspense fallback={<h1 className="text-6xl text-center py-5">Loading ...</h1>}>
                    <CodeWithSuspense />
                </Suspense>
            </div>
        </div>
    );
};

export default page;
