


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
                    <TETabs ref={contentRef} className="navbar w-full text-xl flex flex-nowrap justify-around overflow-x-hidden" style={{ flexWrap: "nowrap", marginBottom: "0.7rem" }}>

                        <TETabsItem
                            onClick={() => handleJustifyClick("gaming")}
                            active={justifyActive === "gaming"}
                            style={{ width: "max-content" }}
                            color="dark"

                        >
                            Computing
                        </TETabsItem>
                        <TETabsItem
                            onClick={() => handleJustifyClick("Engineering")}
                            active={justifyActive === "Engineering"}
                            style={{ width: "max-content" }}
                            color="dark"
                        >
                            Engineering
                        </TETabsItem>

                        <TETabsItem
                            onClick={() => handleJustifyClick("Applied")}
                            active={justifyActive === "Applied"}
                            style={{ width: "max-content" }}
                            color="dark"

                        >
                            Business
                        </TETabsItem>
                        <TETabsItem
                            onClick={() => handleJustifyClick("Sports")}
                            active={justifyActive === "Sports"}
                            style={{ width: "max-content" }}
                            color="dark"

                        >
                            Sports
                        </TETabsItem>
                        <TETabsItem
                            onClick={() => handleJustifyClick("Stalls")}
                            active={justifyActive === "Stalls"}
                            style={{ width: "max-content" }}
                            color="dark"

                        >
                            Stalls
                        </TETabsItem>
                        <TETabsItem
                            onClick={() => handleJustifyClick("Computing")}
                            active={justifyActive === "Computing"}
                            style={{ width: "max-content" }}
                            color="dark"

                        >
                            Socials
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
                                <Index title={"Industrial FYP Design Exhibition Expo 2024"} />
                                <Index title={"Structure Stability Competition"} />
                                <Index title={"Workshop on Matlab"} />
                                <Index title={"Circuit Design (DLD)"} />
                                <Index title={"Popsicle Bridge Competition"} />
                                <Index title={"Robo-Wars"} />
                                <Index title={"Speed Wiring"} />


                            </div>
                        </div>
                    </TETabsPane>
                    <TETabsPane show={justifyActive === "gaming"}>
                        <div className="py-4 w-full">
                            <div className="flex flex-wrap justify-center gap-4 bg-zinc-100 w-full">
                                <Index title={"Speed Programming Competion"} />
                                <Index title={"Code Jail"} />
                                <Index title={"Design Duels (UI/UX Competition)"} />
                                <Index title={"Workshop on AI"} />
                                <Index title={"Byte Brain Teasers (Computing Quiz)"} />
                                <Index title={"SE Quiz (Software Engineering Quiz)"} />
                                <Index title={"Web Development Competition"} />
                                <Index title={"Application Development Competition"} />


                            </div>
                        </div>
                    </TETabsPane>
                    <TETabsPane show={justifyActive === "Computing"}>
                        <div className="py-4 w-full">
                            <div className="flex flex-wrap justify-center gap-4 bg-zinc-100 w-full">
                                <Index title={"FIFA 2023 Competition "} />
                                <Index title={"TEKKEN 7 Competition  "} />
                                <Index title={"PUBGM Competition "} />
                                <Index title={"Call Of Duty Competition"} />
                                <Index title={"Model United Nation"} />
                                <Index title={"Autoshow"} />
                                <Index title={"Qawwali Night"} />


                            </div>
                        </div>
                    </TETabsPane>
                    <TETabsPane show={justifyActive === "Applied"}>
                        <div className="py-4 w-full">
                            <div className="flex flex-wrap justify-center gap-4 bg-zinc-100 w-full">
                                <Index title={"Zindigi Prize MUST Campus Round"} />
                                <Index title={"MUSTCon'24 IdeaFest "} />
                            </div>
                        </div>
                    </TETabsPane>

                    <TETabsPane show={justifyActive === "Sports"}>
                        <div className="py-4 w-full">
                            <div className="flex flex-wrap justify-center gap-4 bg-zinc-100 w-full">
                                <Index title={"Badminton (M/F)"} />
                                <Index title={"Futsal"} />
                                <Index title={"Basketball"} />
                                <Index title={"Table Tennis (M/F)"} />
                                <Index title={"Volleyball"} />

                            </div>
                        </div>
                    </TETabsPane>

                    <TETabsPane show={justifyActive === "Stalls"}>
                        <div className="py-4 w-full">
                            <div className="flex flex-wrap justify-center gap-4 bg-zinc-100 w-full">
                                <Index title={"Food Stalls - Mustians"} />
                                <Index title={"Food Stalls - Bronze"} />
                                <Index title={"Food Stalls - Silver"} />
                                <Index title={"Exhibition Stalls - Bronze "} />
                                <Index title={"Exhibition Stalls - Silver"} />
                            </div>
                        </div>
                    </TETabsPane>

                </TETabsContent>
            </div>
        </>
    );

} 