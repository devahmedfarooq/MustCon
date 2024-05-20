import React from 'react'
// import { Index } from "@/components/Popuptable/Index";
import { Popup } from '../PopRegister/Popup';
import { useState } from "react";


export const Index = (title) => {

    const [details, setDetails] = useState("hidden")

    // const closeMoal = () => {
    //     setDetails(false)

    // }

    const handleClick = () => {
        setDetails("unhide")
    }

    const closeModal = () => {
        setDetails("hidden");
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
            <img
                className="w-full"
                src="https://placehold.co/400x300"
                alt="Mechatronics Engineering"
            />
            <div className="parentToFetchTable px-6 py-4 flex flex-col items-start">
                <div className="font-bold text-[18px] mb-2 text-left">
                    {title.title}
                </div>
                <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                <ul className="list-disc ml-4 text-[16px] text-black dark:text-zinc-400 text-left">
                    <li>Robo Lines (School/College)</li>
                    <li>Robo Lines (University)</li>
                    <li>Sumo Bots (Sumo Wrestler Robot)</li>
                    <li>Off-Road RC</li>
                </ul>
                <div className="mt-4">
                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] py-2 px-4 rounded" onClick={handleClick}>
                        SEE DETAILS
                    </button>
                </div>

                <Popup details={details} closeModal={closeModal} />

            </div>

        </div>
    )
}