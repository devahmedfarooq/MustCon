import React from 'react'
// import { Index } from "@/components/Popuptable/Index";
// import { Popup } from '../PopRegister/Popup';
import { useState} from "react";


export const Index = (title) => {

    const [details, setDetails] = useState(false)

    const closeMoal = () => {
        setDetails(false)
        
    }

    const handleClick = () => {
        setDetails(true)
    }

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

                {/* table  */}
                <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center ${details ? "" : "hidden"}`} style={{ zIndex: "9999" }}>
                    <div className="bg-white flex flex-col justify-between rounded-lg py-8 w-[96vw] h-[96vh]">
                        <div id="modal-table">
                            <div className="container mx-auto px-0">
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
                        <div className="mt-4  mr-4 text-right">
                            <button id='closemodal'
                                className="bg-[#E74C3C] text-[#FFFFFF] text-[16px] border-2 border-solid font-bold border-[#E74C3C] py-2 px-4 rounded"
                                onClick={closeMoal}  >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
