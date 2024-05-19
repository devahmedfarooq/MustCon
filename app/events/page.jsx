export default function Events() {

    return <div className=" flex flex-col items-center mx-[2%]">
        <div className="my-8">
            <h2 className="text-[18px] text-center text-[#2C3E50] font-bold">
                OUR EVENTS
            </h2>
            <h1 className="text-[24px] text-center font-bold">Choose an event</h1>
        </div>
        <div className="flex items-center p-4 w-full">
            <div className="l-btn1 py-2 cursor-pointer text-black hidden">
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
            <div
                id="outer-tab"
                className="product-slide1 flex overflow-x-scroll py-4 w-[98%] relative"
            >
                <div
                    className="navtab  whitespace-nowrap  mx-2 ml-0 px-4 py-2 cursor-pointer uppercase text-black transition-colors duration-300 hover:text-[#E74C3C] active"
                    data-target="engineering"
                >
                    engineering
                </div>
                <div
                    className="navtab whitespace-nowrap  mx-2 px-4 py-2 cursor-pointer uppercase text-black transition-colors duration-300 hover:text-[#E74C3C]"
                    data-target="egaming"
                >
                    E-gaming
                </div>
                <div
                    className="navtab  whitespace-nowrap  mx-2 px-4 py-2 uppercase cursor-pointer text-black transition-colors duration-300 hover:text-[#E74C3C]"
                    data-target="computingcompetition"
                >
                    Computing Competition
                </div>
                <div
                    className="navtab  whitespace-nowrap  mx-2 px-4 py-2 cursor-pointer uppercase text-black transition-colors duration-300 hover:text-[#E74C3C]"
                    data-target="appliedsciences"
                >
                    Applied Sciences
                </div>
                <div
                    className="navtab  whitespace-nowrap  mx-2 px-4 py-2 cursor-pointer uppercase text-black transition-colors duration-300 hover:text-[#E74C3C]"
                    data-target="managementsciences"
                >
                    Management Sciences
                </div>
                <div
                    className="navtab  whitespace-nowrap  mx-2 px-4 py-2 cursor-pointer uppercase text-black transition-colors duration-300 hover:text-[#E74C3C]"
                    data-target="socialsciences"
                >
                    social sciences
                </div>
                <div
                    className="navtab   whitespace-nowrap mx-2 mr-0 px-4 py-2 cursor-pointer uppercase text-black transition-colors duration-300 hover:text-[#E74C3C]"
                    data-target="sports"
                >
                    sports
                </div>
                <div
                    className="underline absolute bottom-0 h-1 bg-[#E74C3C]"
                    style={{ width: 80, left: 0 }}
                />
            </div>
            <div className="r-btn1 py-2 cursor-pointer text-black" data-target="home">
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
        <div id="engineering" className="content py-8 block w-full text-center">
            <div className="flex flex-wrap justify-center gap-4 bg-zinc-100 dark:bg-zinc-800 w-full">
                <div className="max-w-sm rounded overflow-hidden shadow-lg w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Mechatronics Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4 flex flex-col items-start">
                        <div className="font-bold text-[18px] mb-2 text-left">
                            engineering Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <ul className="list-disc ml-4 text-[16px] text-black dark:text-zinc-400 text-left">
                            <li>Robo Lines (School/College)</li>
                            <li>Robo Lines (University)</li>
                            <li>Sumo Bots (Sumo Wrestler Robot)</li>
                            <li>Off-Road RC</li>
                        </ul>
                        <div className="mt-4">
                            <button className="seeDetailsButton  bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] font-bold py-2 px-4 rounded">
                                SEE DETAILS
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Detail</th>
                                                <th className="px-4 py-2">Winner</th>
                                                <th className="px-4 py-2">RunnerUp</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg  w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Electrical Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4 flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left text-[18px] ">
                            engineering Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <ul className="list-disc ml-4  text-[16px] text-black dark:text-zinc-400 text-left">
                            <li>PCB Design</li>
                            <li>DLD Challenge</li>
                            <li>Arduino-X</li>
                            <li>Resistor Roulette</li>
                        </ul>
                        <div className="mt-4">
                            <button className="seeDetailsButton  bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] font-bold py-2 px-4 rounded">
                                SEE DETAILS
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100 text-[18px]">
                                                <th className="px-4 py-2">Details</th>
                                                <th className="px-4 py-2">Winne</th>
                                                <th className="px-4 py-2">RunnerUp</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg  w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Mechanical Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4  flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            engineering Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <ul className="list-disc ml-4  text-[16px] text-black dark:text-zinc-400 text-left">
                            <li>Air Glider</li>
                            <li>Air CAD</li>
                            <li>Air Bridge</li>
                            <li>Hydraulic Lifting Arm</li>
                        </ul>
                        <div className="mt-4">
                            <button className="seeDetailsButton  bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] font-bold py-2 px-4 rounded">
                                SEE DETAILS
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Details</th>
                                                <th className="px-4 py-2">Winner</th>
                                                <th className="px-4 py-2">RunnerU</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Biomedical Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4 flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            engineering Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <p className="ml-4 text-black dark:text-zinc-400 text-left">
                            Artificial Health Care Medical Devices
                        </p>
                        <div className="mt-4">
                            <button className="seeDetailsButton   bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50]  font-bold py-2 px-4 rounded">
                                SEE DETAIL
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Details</th>
                                                <th className="px-4 py-2">Winner</th>
                                                <th className="px-4 py-2">RunnerUp</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="egaming" className="content hidden py-8 w-full  text-center">
            <div className="flex flex-wrap justify-center gap-4 bg-zinc-100 dark:bg-zinc-800 w-full">
                <div className="max-w-sm rounded overflow-hidden shadow-lg w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Mechatronics Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4 flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            egaming Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <ul className="list-disc ml-4  text-[16px] text-black dark:text-zinc-400 text-left">
                            <li>Robo Lines (School/College)</li>
                            <li>Robo Lines (University)</li>
                            <li>Sumo Bots (Sumo Wrestler Robot)</li>
                            <li>Off-Road RC</li>
                        </ul>
                        <div className="mt-4">
                            <button className="seeDetailsButton  bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] font-bold py-2 px-4 rounded">
                                SEE DETAILS
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Detail</th>
                                                <th className="px-4 py-2">Winner</th>
                                                <th className="px-4 py-2">RunnerUp</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg  w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Electrical Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4  flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            egaming Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <ul className="list-disc ml-4  text-[16px] text-black dark:text-zinc-400 text-left">
                            <li>PCB Design</li>
                            <li>DLD Challenge</li>
                            <li>Arduino-X</li>
                            <li>Resistor Roulette</li>
                        </ul>
                        <div className="mt-4">
                            <button className="seeDetailsButton  bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] font-bold py-2 px-4 rounded">
                                SEE DETAILS
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Details</th>
                                                <th className="px-4 py-2">Winne</th>
                                                <th className="px-4 py-2">RunnerUp</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Biomedical Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4 flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            egaming Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <p className="ml-4 text-black dark:text-zinc-400 text-left">
                            Artificial Health Care Medical Devices
                        </p>
                        <div className="mt-4">
                            <button className="seeDetailsButton   bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50]  font-bold py-2 px-4 rounded">
                                SEE DETAIL
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Details</th>
                                                <th className="px-4 py-2">Winner</th>
                                                <th className="px-4 py-2">RunnerUp</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            id="computingcompetition"
            className="content hidden py-8 w-full text-center"
        >
            <div className="flex flex-wrap justify-center gap-4 bg-zinc-100 dark:bg-zinc-800 w-full">
                <div className="max-w-sm rounded overflow-hidden shadow-lg w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Mechatronics Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4 flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            computing Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <ul className="list-disc ml-4  text-[16px] text-black dark:text-zinc-400 text-left">
                            <li>Robo Lines (School/College)</li>
                            <li>Robo Lines (University)</li>
                            <li>Sumo Bots (Sumo Wrestler Robot)</li>
                            <li>Off-Road RC</li>
                        </ul>
                        <div className="mt-4">
                            <button className="seeDetailsButton  bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] font-bold py-2 px-4 rounded">
                                SEE DETAILS
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Detail</th>
                                                <th className="px-4 py-2">Winner</th>
                                                <th className="px-4 py-2">RunnerUp</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg  w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Electrical Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4  flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            computing Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <ul className="list-disc ml-4  text-[16px] text-black dark:text-zinc-400 text-left">
                            <li>PCB Design</li>
                            <li>DLD Challenge</li>
                            <li>Arduino-X</li>
                            <li>Resistor Roulette</li>
                        </ul>
                        <div className="mt-4">
                            <button className="seeDetailsButton  bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] font-bold py-2 px-4 rounded">
                                SEE DETAILS
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Details</th>
                                                <th className="px-4 py-2">Winne</th>
                                                <th className="px-4 py-2">RunnerUp</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg  w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Mechanical Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4  flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            computing Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <ul className="list-disc ml-4  text-[16px] text-black dark:text-zinc-400 text-left">
                            <li>Air Glider</li>
                            <li>Air CAD</li>
                            <li>Air Bridge</li>
                            <li>Hydraulic Lifting Arm</li>
                        </ul>
                        <div className="mt-4">
                            <button className="seeDetailsButton  bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] font-bold py-2 px-4 rounded">
                                SEE DETAILS
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Details</th>
                                                <th className="px-4 py-2">Winner</th>
                                                <th className="px-4 py-2">RunnerU</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Biomedical Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4 flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            computing Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <p className="ml-4 text-black dark:text-zinc-400 text-left">
                            Artificial Health Care Medical Devices
                        </p>
                        <div className="mt-4">
                            <button className="seeDetailsButton   bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50]  font-bold py-2 px-4 rounded">
                                SEE DETAIL
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Details</th>
                                                <th className="px-4 py-2">Winner</th>
                                                <th className="px-4 py-2">RunnerUp</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg  w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Mechanical Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4  flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            computing Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <ul className="list-disc ml-4  text-[16px] text-black dark:text-zinc-400 text-left">
                            <li>Air Glider</li>
                            <li>Air CAD</li>
                            <li>Air Bridge</li>
                            <li>Hydraulic Lifting Arm</li>
                        </ul>
                        <div className="mt-4">
                            <button className="seeDetailsButton  bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] font-bold py-2 px-4 rounded">
                                SEE DETAILS
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Details</th>
                                                <th className="px-4 py-2">Winner</th>
                                                <th className="px-4 py-2">RunnerU</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Biomedical Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4 flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            computing Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <p className="ml-4 text-black dark:text-zinc-400 text-left">
                            Artificial Health Care Medical Devices
                        </p>
                        <div className="mt-4">
                            <button className="seeDetailsButton   bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50]  font-bold py-2 px-4 rounded">
                                SEE DETAIL
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Details</th>
                                                <th className="px-4 py-2">Winner</th>
                                                <th className="px-4 py-2">RunnerUp</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="appliedsciences" className="content hidden py-8 w-full text-center">
            <div className="flex flex-wrap justify-center gap-4 bg-zinc-100 dark:bg-zinc-800 w-full">
                <div className="max-w-sm rounded overflow-hidden shadow-lg w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Mechatronics Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4 flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            applied Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <ul className="list-disc ml-4  text-[16px] text-black dark:text-zinc-400 text-left">
                            <li>Robo Lines (School/College)</li>
                            <li>Robo Lines (University)</li>
                            <li>Sumo Bots (Sumo Wrestler Robot)</li>
                            <li>Off-Road RC</li>
                        </ul>
                        <div className="mt-4">
                            <button className="seeDetailsButton  bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] font-bold py-2 px-4 rounded">
                                SEE DETAILS
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Detail</th>
                                                <th className="px-4 py-2">Winner</th>
                                                <th className="px-4 py-2">RunnerUp</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg  w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Electrical Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4  flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            applied Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <ul className="list-disc ml-4  text-[16px] text-black dark:text-zinc-400 text-left">
                            <li>PCB Design</li>
                            <li>DLD Challenge</li>
                            <li>Arduino-X</li>
                            <li>Resistor Roulette</li>
                        </ul>
                        <div className="mt-4">
                            <button className="seeDetailsButton  bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] font-bold py-2 px-4 rounded">
                                SEE DETAILS
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Details</th>
                                                <th className="px-4 py-2">Winne</th>
                                                <th className="px-4 py-2">RunnerUp</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg  w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Mechanical Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4  flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            applied Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <ul className="list-disc ml-4  text-[16px] text-black dark:text-zinc-400 text-left">
                            <li>Air Glider</li>
                            <li>Air CAD</li>
                            <li>Air Bridge</li>
                            <li>Hydraulic Lifting Arm</li>
                        </ul>
                        <div className="mt-4">
                            <button className="seeDetailsButton  bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] font-bold py-2 px-4 rounded">
                                SEE DETAILS
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Details</th>
                                                <th className="px-4 py-2">Winner</th>
                                                <th className="px-4 py-2">RunnerU</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Biomedical Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4 flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            applied Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <p className="ml-4 text-black dark:text-zinc-400 text-left">
                            Artificial Health Care Medical Devices
                        </p>
                        <div className="mt-4">
                            <button className="seeDetailsButton   bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50]  font-bold py-2 px-4 rounded">
                                SEE DETAIL
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Details</th>
                                                <th className="px-4 py-2">Winner</th>
                                                <th className="px-4 py-2">RunnerUp</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            id="managementsciences"
            className="content hidden py-8 w-full text-center"
        >
            <div className="flex flex-wrap justify-center gap-4 bg-zinc-100 dark:bg-zinc-800 w-full">
                <div className="max-w-sm rounded overflow-hidden shadow-lg w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Mechatronics Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4 flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            management Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <ul className="list-disc ml-4  text-[16px] text-black dark:text-zinc-400 text-left">
                            <li>Robo Lines (School/College)</li>
                            <li>Robo Lines (University)</li>
                            <li>Sumo Bots (Sumo Wrestler Robot)</li>
                            <li>Off-Road RC</li>
                        </ul>
                        <div className="mt-4">
                            <button className="seeDetailsButton  bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] font-bold py-2 px-4 rounded">
                                SEE DETAILS
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Detail</th>
                                                <th className="px-4 py-2">Winner</th>
                                                <th className="px-4 py-2">RunnerUp</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg  w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Electrical Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4  flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            management Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <ul className="list-disc ml-4  text-[16px] text-black dark:text-zinc-400 text-left">
                            <li>PCB Design</li>
                            <li>DLD Challenge</li>
                            <li>Arduino-X</li>
                            <li>Resistor Roulette</li>
                        </ul>
                        <div className="mt-4">
                            <button className="seeDetailsButton  bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] font-bold py-2 px-4 rounded">
                                SEE DETAILS
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Details</th>
                                                <th className="px-4 py-2">Winne</th>
                                                <th className="px-4 py-2">RunnerUp</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg  w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Mechanical Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4  flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            management Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <ul className="list-disc ml-4  text-[16px] text-black dark:text-zinc-400 text-left">
                            <li>Air Glider</li>
                            <li>Air CAD</li>
                            <li>Air Bridge</li>
                            <li>Hydraulic Lifting Arm</li>
                        </ul>
                        <div className="mt-4">
                            <button className="seeDetailsButton  bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] font-bold py-2 px-4 rounded">
                                SEE DETAILS
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Details</th>
                                                <th className="px-4 py-2">Winner</th>
                                                <th className="px-4 py-2">RunnerU</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Biomedical Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4 flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            management Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <p className="ml-4 text-black dark:text-zinc-400 text-left">
                            Artificial Health Care Medical Devices
                        </p>
                        <div className="mt-4">
                            <button className="seeDetailsButton   bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50]  font-bold py-2 px-4 rounded">
                                SEE DETAIL
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Details</th>
                                                <th className="px-4 py-2">Winner</th>
                                                <th className="px-4 py-2">RunnerUp</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="socialsciences" className="content hidden py-8 w-full text-center">
            <div className="flex flex-wrap justify-center gap-4 bg-zinc-100 dark:bg-zinc-800 w-full">
                <div className="max-w-sm rounded overflow-hidden shadow-lg w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Mechatronics Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4 flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            socials Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <ul className="list-disc ml-4  text-[16px] text-black dark:text-zinc-400 text-left">
                            <li>Robo Lines (School/College)</li>
                            <li>Robo Lines (University)</li>
                            <li>Sumo Bots (Sumo Wrestler Robot)</li>
                            <li>Off-Road RC</li>
                        </ul>
                        <div className="mt-4">
                            <button className="seeDetailsButton  bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] font-bold py-2 px-4 rounded">
                                SEE DETAILS
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Detail</th>
                                                <th className="px-4 py-2">Winner</th>
                                                <th className="px-4 py-2">RunnerUp</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg  w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Electrical Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4  flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            Social Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <ul className="list-disc ml-4  text-[16px] text-black dark:text-zinc-400 text-left">
                            <li>PCB Design</li>
                            <li>DLD Challenge</li>
                            <li>Arduino-X</li>
                            <li>Resistor Roulette</li>
                        </ul>
                        <div className="mt-4">
                            <button className="seeDetailsButton  bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] font-bold py-2 px-4 rounded">
                                SEE DETAILS
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Details</th>
                                                <th className="px-4 py-2">Winne</th>
                                                <th className="px-4 py-2">RunnerUp</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg  w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Mechanical Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4  flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            Social Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <ul className="list-disc ml-4  text-[16px] text-black dark:text-zinc-400 text-left">
                            <li>Air Glider</li>
                            <li>Air CAD</li>
                            <li>Air Bridge</li>
                            <li>Hydraulic Lifting Arm</li>
                        </ul>
                        <div className="mt-4">
                            <button className="seeDetailsButton  bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] font-bold py-2 px-4 rounded">
                                SEE DETAILS
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Details</th>
                                                <th className="px-4 py-2">Winner</th>
                                                <th className="px-4 py-2">RunnerU</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Biomedical Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4 flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            Social Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <p className="ml-4 text-black dark:text-zinc-400 text-left">
                            Artificial Health Care Medical Devices
                        </p>
                        <div className="mt-4">
                            <button className="seeDetailsButton   bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50]  font-bold py-2 px-4 rounded">
                                SEE DETAIL
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Details</th>
                                                <th className="px-4 py-2">Winner</th>
                                                <th className="px-4 py-2">RunnerUp</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="sports" className="content hidden py-8 w-full text-center">
            <div className="flex flex-wrap justify-center gap-4 bg-zinc-100 dark:bg-zinc-800 w-full">
                <div className="max-w-sm rounded overflow-hidden shadow-lg w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Mechatronics Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4 flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            Sports Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <ul className="list-disc ml-4  text-[16px] text-black dark:text-zinc-400 text-left">
                            <li>Robo Lines (School/College)</li>
                            <li>Robo Lines (University)</li>
                            <li>Sumo Bots (Sumo Wrestler Robot)</li>
                            <li>Off-Road RC</li>
                        </ul>
                        <div className="mt-4">
                            <button className="seeDetailsButton  bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] font-bold py-2 px-4 rounded">
                                SEE DETAILS
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Detail</th>
                                                <th className="px-4 py-2">Winner</th>
                                                <th className="px-4 py-2">RunnerUp</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg  w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Electrical Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4  flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            Sports Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <ul className="list-disc ml-4  text-[16px] text-black dark:text-zinc-400 text-left">
                            <li>PCB Design</li>
                            <li>DLD Challenge</li>
                            <li>Arduino-X</li>
                            <li>Resistor Roulette</li>
                        </ul>
                        <div className="mt-4">
                            <button className="seeDetailsButton  bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] font-bold py-2 px-4 rounded">
                                SEE DETAILS
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Details</th>
                                                <th className="px-4 py-2">Winne</th>
                                                <th className="px-4 py-2">RunnerUp</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg  w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Mechanical Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4  flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            Sports Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <ul className="list-disc ml-4  text-[16px] text-black dark:text-zinc-400 text-left">
                            <li>Air Glider</li>
                            <li>Air CAD</li>
                            <li>Air Bridge</li>
                            <li>Hydraulic Lifting Arm</li>
                        </ul>
                        <div className="mt-4">
                            <button className="seeDetailsButton  bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] font-bold py-2 px-4 rounded">
                                SEE DETAILS
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Details</th>
                                                <th className="px-4 py-2">Winner</th>
                                                <th className="px-4 py-2">RunnerU</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg w-[23%] max-[900px]:w-1/4  max-[750px]:w-[48%]  max-[550px]:w-[90%]">
                    <img
                        className="w-full"
                        src="https://placehold.co/400x300"
                        alt="Biomedical Engineering"
                    />
                    <div className="parentToFetchTable px-6 py-4 flex flex-col items-start">
                        <div className="font-bold text-xl mb-2 text-left  text-[18px] ">
                            Sports Engineering
                        </div>
                        <p className="text-black dark:text-zinc-300 text-base">Events:</p>
                        <p className="ml-4 text-black dark:text-zinc-400 text-left">
                            Artificial Health Care Medical Devices
                        </p>
                        <div className="mt-4">
                            <button className="seeDetailsButton bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#2C3E50] font-bold py-2 px-4 rounded">
                                SEE DETAIL
                            </button>
                        </div>
                        <div className="tb-cont hidden">
                            <div className="container mx-auto px-4 ">
                                <div className="overflow-x-auto">
                                    <table className="table-auto w-full text-left">
                                        <thead>
                                            <tr className="bg-zinc-100  text-[18px]">
                                                <th className="px-4 py-2">Details</th>
                                                <th className="px-4 py-2">Winner</th>
                                                <th className="px-4 py-2">RunnerUp</th>
                                                <th className="px-4 py-2">Registration</th>
                                                <th className="px-4 py-2">Early Bird</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-4 py-2">Robo (School/College)</td>
                                                <td className="px-4 py-2">12,000/-</td>
                                                <td className="px-4 py-2">6,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,000/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Robo (University)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">2,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2">Sumo (Sumo Wrestler Robot)</td>
                                                <td className="px-4 py-2">20,000/-</td>
                                                <td className="px-4 py-2">10,000/-</td>
                                                <td className="px-4 py-2">3,000/-</td>
                                                <td className="px-4 py-2">2,500/-</td>
                                            </tr>
                                            <tr className="bg-zinc-50">
                                                <td className="px-4 py-2">Off-Road</td>
                                                <td className="px-4 py-2">15,000/-</td>
                                                <td className="px-4 py-2">8,000/-</td>
                                                <td className="px-4 py-2">1,500/-</td>
                                                <td className="px-4 py-2">1,200/-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 flex justify-center space-x-4">
                                    <button className="bg-[#2C3E50] text-[#FFFFFF] text-[16px] border-2 border-solid border-[#2C3E50] font-bold py-2 px-4 rounded">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            id="modal"
            className="fixed inset-0 bg-gray-800 bg-opacity-75 hidden flex items-center justify-center"
        >
            <div className="bg-white dark:bg-zinc-900 flex flex-col justify-between rounded-lg p-8 w-[96vw] h-[96vh]">
                <div id="modal-table"></div>
                <div className="mt-4 text-right">
                    <button
                        id="closeModal"
                        className="bg-[#E74C3C] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#E74C3C] py-2 px-4 rounded"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>

} 