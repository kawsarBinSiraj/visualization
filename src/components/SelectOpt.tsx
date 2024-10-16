"use client";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

interface Option {
    label: string; // Property representing the display text
    value: string | number; // Type you expect for the value
}

interface OptionsProps {
    options: Option[];
    className?: string;
    callback: (option: Option | null) => void;
}

export const SelectOpt: React.FC<OptionsProps> = ({ options = [], className = "", callback = () => {} }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selected, setSelected] = useState<Option | null>({ value: "infinite-carousel", label: "Infinite Carousel" });
    const [loading, setLoading] = useState<boolean>(true);

    type OptionType = { label: string; value: string | number } | null;
    // Adjust the type of value to match the Option interface
    const handleOptionChange = (option: { label: string; value: string | number } | null) => {
        // Check if callback exists before calling it
        if (callback) callback(option); // Calls the callback with the selected option
    };

    useEffect(() => {
        setLoading(true);
        const slug = searchParams.get("slug");
        const op = options?.filter((op) => op.value == slug);
        if (op?.length) setSelected(op[0]);
        setTimeout(() => setLoading(false), 1000);
    }, [searchParams]);

    return (
        <>
            <Select value={selected} onChange={handleOptionChange} className={className} options={options} isClearable={false} isSearchable={true} isLoading={loading} />
        </>
    );
};
