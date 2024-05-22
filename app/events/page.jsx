


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
    const [justifyActive, setJustifyActive] = useState("computing");

    const [computing, setComputing] = useState([{
        img: "/images/events/WEB DEVELOPMENT.png",
        title: "MUSTCON - Web Development Competition",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "30th May 9:00am - 4:00pm",
        desc: "Dive into the digital world at MUSTCON's Web Development Competition!",
        ticket: "1500"

    },
    {
        img: "/images/events/APP DEVELOPMENT.png",
        title: "MUSTCON - App Development Competition",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "30th May 9:00am - 4:00pm",
        desc: "Get your coding gears ready for MUSTCON's App Development Competition!",
        ticket: "1500"

    },
    {
        img: "/images/events/SPEED PROGRAMMING.png",
        title: "MUSTCON - Speed Programming Competition",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "29th May 12:00pm - 3:00pm",
        desc: "Can you code at the speed of thought? Join MUSTCON's Speed Programming Competition!",
        ticket: "1500"

    },
    {
        img: "/images/events/SE QUIZ.png",
        title: "MUSTCON - SE Quiz Competition",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "29th May 2:30am - 4:30pm",
        desc: "Test your software engineering knowledge at MUSTCON's SE Quiz Competition!",
        ticket: "550"

    },
    {
        img: "/images/events/CS QUIZ.png",
        title: "MUSTCON - CS Quiz Competition",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "29th May 1:00pm - 3:30pm",
        desc: "Think you know your way around computer science? Prove it at MUSTCON's CS Quiz Competition!",
        ticket: "500"

    },
    {
        img: "/images/events/code jai.png",
        title: "MUSTCON - Code Jail Competition",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "29th May 12:00pm - 3:00pm",
        desc: "Can you break out of the Code Jail? Join MUSTCON's Code Jail Competition!",
        ticket: "500"

    },
    {
        img: "/images/events/Design Duels.png",
        title: "MUSTCON - Design Duels Competition",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "29th May 12:00pm - 4:00pm",
        desc: "Unleash your UI/UX design skills in a duel at MUSTCON's Design Duels Competition!",
        ticket: "1500"

    }, 
    {
        img: "/images/events/AI & ML.png",
        title: "MUSTCON - Workshop on AI",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "29th May 12:30am - 2:30pm",
        desc: "Explore the future at MUSTCON's Workshop on AI!",
        ticket: "150"

    },
    ])

    const [engineering, setEngineering] = useState([{
        img: "/images/events/industrial fyp.png",
        title: "MUSTCON - Industrial FYP Design Exhibition Expo 2024",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "29th May 9:00am - 5:00pm",
        desc: "Showcase your industrial design prowess at MUSTCON's Industrial FYP Design Competition!",
        ticket: "500"

    },
    {
        img: "/images/events/structure stability.png",
        title: "MUSTCON - Structure Stability Competition",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "29th May 12:00pm - 4:00pm",
        desc: "Build structures that stand the test of time at MUSTCON's Structure Stability Competition!",
        ticket: "500"

    },
    {
        img: "/images/events/matlab.png",
        title: "MUSTCON - Workshop on Matlab",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "29th May 12:00pm - 2:00pm",
        desc: "NA",
        ticket: "100"

    },
    {
        img: "/images/events/circuit design.png",
        title: "MUSTCON - Circuit Design (DLD)",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "29th May 12:00pm - 2:00pm",
        desc: "Let your circuits shine at MUSTCON's Circuit Design Competition!",
        ticket: "500"

    },
    {
        img: "/images/events/popsicle bridge.png",
        title: "MUSTCON - Popsicle Bridge Competition",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "29th May 2:00pm - 4:00pm",
        desc: "Build bridges, literally, at MUSTCON's Popsicle Bridge Competition!",
        ticket: "600"

    },
    {
        img: "/images/events/ROBO WARS.png",
        title: "MUSTCON - Robo-Wars",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "29th May 3:00pm - 9:00pm",
        desc: "Gear up for mechanical mayhem at MUSTCON's Robo Wars!",
        ticket: "3000"

    },
    {
        img: "/images/events/speed wiring.png",
        title: "MUSTCON - Speed Wiring",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "30th May 10:00am - 12:30pm",
        desc: "Fasten your wires and compete at the speed of light in MUSTCON's Speed Wiring Competition!",
        ticket: "500"

    }
    ])

    const [business, setBusiness] = useState([{
        img: "/images/events/zindagi prize.png",
        title: "MUSTCON - Zindigi Prize MUST Campus Round",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "30th May 10:00am - 2:00pm",
        desc: "Engage in diplomatic discourse at MUSTCON's Model United Nations!",
        ticket: "500"

    },
    {
        img: "/images/events/idea fest.png",
        title: "MUSTCON - MUSTCon'24 IdeaFest",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "30th May 9:00am - 4:00pm",
        desc: "Get your coding gears ready for MUSTCON's App Development Competition!",
        ticket: "1500"

    }
    ])

    const [sports, setSports] = useState([{
        img: "/images/events/badminton.png",
        title: "MUSTCON - Badminton (M/F)",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "30th",
        desc: "Serve up some competition at MUSTCON's Badminton (M/F) Competition!",
        ticket: "1000"

    },
    {
        img: "/images/events/futsal.png",
        title: "MUSTCON - Futsal",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "30th",
        desc: "Kick it on the field at MUSTCON's Futsal Competition!",
        ticket: "3000"

    },
    {
        img: "/images/events/basketball.png",
        title: "MUSTCON - Basketball",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "30th",
        desc: "Shoot some hoops at MUSTCON's Basketball Competition!",
        ticket: "3000"

    },
    {
        img: "/images/events/table tennis.png",
        title: "MUSTCON - Table Tennis (M/F)",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "30th May ",
        desc: "Smash your way to victory at MUSTCON's Table Tennis Competition!",
        ticket: "1000"

    },
    {
        img: "/images/events/APP DEVELOPMENT.png",
        title: "MUSTCON - Volleyball",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "30th May 9:00am - 4:00pm",
        desc: "NA",
        ticket: "1500"

    }

    ])

    const [stalls, setStalls] = useState([{
        img: "/images/events/exhibition stall silver.png",
        title: "MUSTCON - Food Stalls - Mustians",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "29th - 30th May 8:00am - 9:00pm",
        desc: "Taste the delights at MUSTCON's Food Stalls Mustians!",
        ticket: "3000"

    },
    {
        img: "/images/events/food stall bronze.png",
        title: "MUSTCON - Food Stalls - Bronze",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "29th - 30th May 8:00am - 9:00pm",
        desc: "Upgrade your culinary experience at MUSTCON's Food Stalls Bronze!",
        ticket: "10000"

    },
    {
        img: "/images/events/food stall silver.png",
        title: "MUSTCON - Food Stalls - Silver",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "29th - 30th May 8:00am - 9:00pm",
        desc: "Indulge in gourmet treats at MUSTCON's Food Stalls Silver!",
        ticket: "20000"

    },
    {
        img: "/images/events/exhibition stall bronze.png",
        title: "Exhibition Stalls - Bronze",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "29th - 30th May 9:00am - 4:00pm",
        desc: "Explore innovation at MUSTCON's Exhibition Stalls Bronze!",
        ticket: "25000"

    },
    {
        img: "/images/events/exhibition stall silver.png",
        title: "Exhibition Stalls - Silver",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "29th- - 30th May 9:00am - 4:00pm",
        desc: "Discover brilliance at MUSTCON's Exhibition Stalls Silver!",
        ticket: "50000"

    }

    ])

    const [socials, setSocials] = useState([{
        img: "/images/events/fifa 23.png",
        title: "MUSTCON - FIFA 2023 Competition",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "29th May 12:30pm - 4:00pm",
        desc: "Score goals and glory at MUSTCON's FIFA 23 Competition!",
        ticket: "1000"

    },
    {
        img: "/images/events/tekken 8.png",
        title: "MUSTCON - TEKKEN 7 Competition",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "29th May 12:30pm - 4:00pm",
        desc: "Battle it out in Tekken at MUSTCON's Tekken Competition!",
        ticket: "1000"

    },
    {
        img: "/images/events/pubgm competition.png",
        title: "MUSTCON - PUBGM Competition",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "29th May 12:30pm - 4:00pm",
        desc: "Survive and conquer in PUBGM at MUSTCON's PUBGM Competition!",
        ticket: "500"

    },
    {
        img: "/images/events/call of duty.png",
        title: "MUSTCON - Call Of Duty Competition",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "30th May 9:00am - 4:00pm",
        desc: "Answer the call of duty at MUSTCON's Call of Duty Competition!",
        ticket: "800"

    },
    {
        img: "/images/events/mun.png",
        title: "MUSTCON - Model United Nation",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "30th May 10:00am - 2:00pm",
        desc: "Engage in diplomatic discourse at MUSTCON's Model United Nations!",
        ticket: "500"

    },
    {
        img: "/images/events/APP DEVELOPMENT.png",
        title: "MUSTCON - Autoshow",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "30th May 9:00am - 4:00pm",
        desc: "Get your coding gears ready for MUSTCON's App Development Competition!",
        ticket: "1500"
    },
    {
        img: "/images/events/qawali.png",
        title: "MUSTCON - Qawwali Night",
        venue: "MUST University Mirpur Azad Kahmir",
        date: "30th May 6:00pm - 10:00pm",
        desc: "Experience the soulful melodies at MUSTCON's Qawwali Night!",
        ticket: "1000"
    }
    ])

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }
        setJustifyActive(value);
    };

    const leftBtnRef = useRef(null);
    const rightBtnRef = useRef(null);
    const contentRef = useRef(null);

    const renderEvents = (events) => (
        <div className="py-4 w-full">
            <div className="flex flex-wrap justify-center gap-4 bg-zinc-100 w-full">
                {events.map((event, index) => (
                    <Index key={index} event={event} />
                ))}
            </div>
        </div>
    );

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
                            onClick={() => handleJustifyClick("computing")}
                            active={justifyActive === "computing"}
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
                            onClick={() => handleJustifyClick("Business")}
                            active={justifyActive === "Business"}
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
                            onClick={() => handleJustifyClick("Socials")}
                            active={justifyActive === "Socials"}
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

                    <TETabsPane show={justifyActive === "computing"}>
                        {renderEvents(computing)}

                    </TETabsPane>
                    <TETabsPane show={justifyActive === "Engineering"}>
                        {renderEvents(engineering)}

                    </TETabsPane>

                    <TETabsPane show={justifyActive === "Business"}>
                        {renderEvents(business)}

                    </TETabsPane>

                    <TETabsPane show={justifyActive === "Sports"}>
                        {renderEvents(sports)}

                    </TETabsPane>

                    <TETabsPane show={justifyActive === "Stalls"}>
                        {renderEvents(stalls)}

                    </TETabsPane>
                    <TETabsPane show={justifyActive === "Socials"}>
                        {renderEvents(socials)}


                    </TETabsPane>

                </TETabsContent>
            </div>
        </>
    );

} 
