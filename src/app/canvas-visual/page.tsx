import CanvasBubbleFly from "@/components/canvas-visualization/bubble-fly";
import React from "react";

const page = () => {
    return (
        <div className="visualizer-page py-10">
            <div className="container">
                <header className="mb-14 text-center pt-10">
                    <h2 className="text-5xl font-black mb-5">
                        Your digital playground <br /> for dynamic visuals!
                    </h2>
                    <p className="text-xl">
                        Canvas, An HTML element that allows for dynamic, pixel-based drawing, perfect for creating <br /> interactive graphics, games, and real-time visual effects.
                    </p>
                </header>
            </div>
            <CanvasBubbleFly />
        </div>
    );
};

export default page;
