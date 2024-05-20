


"use client"
import { Poppins } from "next/font/google";
// import "tw-elements-react/dist/css/tw-elements-react.min.css";
import React, { useState, useRef, useEffect } from "react";
import { Index } from "@/components/Card/Index";
import {
    TETabs,
    TETabsContent,
    TETabsItem,
    TETabsPane,
} from "tw-elements-react";
const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
});


export default function Events() {
    const [justifyActive, setJustifyActive] = useState("Engineering");

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }
        setJustifyActive(value);
    };

    const leftBtnRef = useRef(null);
    const rightBtnRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const leftBtn = leftBtnRef.current;
        const rightBtn = rightBtnRef.current;
        const content = contentRef.current;

        const handleRightClick = (event) => {
            content.scrollLeft += 300;
            event.preventDefault();
            leftBtn.classList.remove('hidden');
        };

        const handleLeftClick = (event) => {
            content.scrollLeft -= 300;
            event.preventDefault();
            rightBtn.classList.remove('hidden');
        };

        rightBtn.addEventListener('click', handleRightClick);
        leftBtn.addEventListener('click', handleLeftClick);

        // Cleanup event listeners on component unmount
        return () => {
            rightBtn.removeEventListener('click', handleRightClick);
            leftBtn.removeEventListener('click', handleLeftClick);
        };
    }, []);

    return (

        <>
            <div className=" flex flex-col items-center mx-[2%]">
                <div className="my-8">
                    <h2 className="text-[18px] text-center text-[#2C3E50] font-bold">
                        OUR EVENTS
                    </h2>
                    <h1 className="text-[24px] text-center font-bold">Choose an event</h1>
                </div>
                <div className="flex items-center p-4 w-full">
                    <div ref={leftBtnRef} className="l-btn1 py-2 cursor-pointer text-black hidden">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </div>
                    <TETabs ref={contentRef} className="navbar flex flex-nowrap overflow-x-scroll" style={{ flexWrap: "nowrap", marginBottom: "0.7rem" }}>
                        <TETabsItem
                            onClick={() => handleJustifyClick("Engineering")}
                            active={justifyActive === "Engineering"}
                            style={{ width: "max-content" }}

                        >
                            Engineering
                        </TETabsItem>
                        <TETabsItem
                            onClick={() => handleJustifyClick("gaming")}
                            active={justifyActive === "gaming"}
                            style={{ width: "max-content" }}

                        >
                            E-gaming
                        </TETabsItem>
                        <TETabsItem
                            onClick={() => handleJustifyClick("Computing")}
                            active={justifyActive === "Computing"}
                            style={{ width: "max-content" }}

                        >
                            Computing Competition
                        </TETabsItem>
                        <TETabsItem
                            onClick={() => handleJustifyClick("Applied")}
                            active={justifyActive === "Applied"}
                            style={{ width: "max-content" }}

                        >
                            Applied Sciences
                        </TETabsItem>
                        <TETabsItem
                            onClick={() => handleJustifyClick("Management")}
                            active={justifyActive === "Management"}
                            style={{ width: "max-content" }}

                        >
                            Management Sciences
                        </TETabsItem>
                        <TETabsItem
                            onClick={() => handleJustifyClick("Social")}
                            active={justifyActive === "Social"}
                            style={{ width: "max-content" }}

                        >
                            Social sciences
                        </TETabsItem>
                        <TETabsItem
                            onClick={() => handleJustifyClick("Sports")}
                            active={justifyActive === "Sports"}
                            style={{ width: "max-content" }}
                        >
                            Sports
                        </TETabsItem>

                    </TETabs>
                    <div ref={rightBtnRef} className="r-btn1 py-2 cursor-pointer text-black" data-target="home">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="mb-3">


                <TETabsContent>
                    <TETabsPane show={justifyActive === "Engineering"}>
                        <div className="py-4 w-full">
                            <div className="flex flex-wrap justify-center gap-4 bg-zinc-100 w-full">
                                <Index title={"Engineering"} />
                                <Index title={"Engineering"} />
                                <Index title={"Engineering"} />
                                <Index title={"Engineering"} />
                            </div>
                        </div>
                    </TETabsPane>
                    <TETabsPane show={justifyActive === "gaming"}>
                        <div className="py-4 w-full">
                            <div className="flex flex-wrap justify-center gap-4 bg-zinc-100 w-full">
                                <Index title={"gaming"} />
                                <Index title={"gaming"} />
                                <Index title={"gaming"} />
                            </div>
                        </div>
                    </TETabsPane>
                    <TETabsPane show={justifyActive === "Computing"}>
                        <div className="py-4 w-full">
                            <div className="flex flex-wrap justify-center gap-4 bg-zinc-100 w-full">
                                <Index title={"Computing"} />
                                <Index title={"Computing"} />
                                <Index title={"Computing"} />
                                <Index title={"Computing"} />
                            </div>
                        </div>
                    </TETabsPane>
                    <TETabsPane show={justifyActive === "Applied"}>
                        <div className="py-4 w-full">
                            <div className="flex flex-wrap justify-center gap-4 bg-zinc-100 w-full">
                                <Index title={"gaming"} />
                                <Index title={"Applied"} />
                                <Index title={"Applied"} />
                                <Index title={"Applied"} />
                            </div>
                        </div>
                    </TETabsPane>
                    <TETabsPane show={justifyActive === "Management"}>
                        <div className="py-4 w-full">
                            <div className="flex flex-wrap justify-center gap-4 bg-zinc-100 w-full">
                                <Index title={"Management"} />
                                <Index title={"Management"} />
                                <Index title={"Management"} />
                                <Index title={"Management"} />
                            </div>
                        </div>
                    </TETabsPane>
                    <TETabsPane show={justifyActive === "Social"}>
                        <div className="py-4 w-full">
                            <div className="flex flex-wrap justify-center gap-4 bg-zinc-100 w-full">
                                <Index title={"Social"} />
                                <Index title={"Social"} />
                                <Index title={"Social"} />
                                <Index title={"Social"} />
                            </div>
                        </div>
                    </TETabsPane>
                    <TETabsPane show={justifyActive === "Sports"}>
                        <div className="py-4 w-full">
                            <div className="flex flex-wrap justify-center gap-4 bg-zinc-100 w-full">
                                <Index title={"Sports"} />
                                <Index title={"Sports"} />
                                <Index title={"Sports"} />
                                <Index title={"Sports"} />
                            </div>
                        </div>
                    </TETabsPane>
                </TETabsContent>
            </div>
        </>
    );

} 