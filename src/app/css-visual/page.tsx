"use client";
import CodeWithSuspense from "@/components/CodeWithSuspense";
import React, { Suspense } from "react";

const page = () => {
    return (
        <div className="visualizer-page py-10">
            <div className="container">
                <header className="mb-14 text-center py-10">
                    <h2 className="text-5xl font-black mb-5">
                        CSS, crafting seamless <br /> web experiences!
                    </h2>
                    <p className="text-xl">All are example only coded by pure css , not even a single line of js</p>
                </header>
                <Suspense fallback={<h1 className="text-6xl text-center py-5">Loading ...</h1>}>
                    <CodeWithSuspense />
                </Suspense>
            </div>
        </div>
    );
};

export default page;
