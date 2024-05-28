"use client"
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useState } from "react"
const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
});

export default function About() {

    const [data, setData] = useState([{
        img: "/images/about/moeed.jpg",
        name: "Moeed R.",
        postion: "President"
    },
    {
        img: "/images/about/UMER.jpg",
        name: "Umer M.",
        postion: "VP Management"
    },
    {
        img: "/images/about/Sami.jpg",
        name: "Sami A.",
        postion: "VP Events"
    },
    {
        img: "/images/about/sarim.jpg",
        name: "Sarim S.",
        postion: "VP External Affair"
    },
    {
        img: "/images/about/Hamza1.jpg",
        name: "Hamza A.",
        postion: "VP Services"
    },
    {
        img: "/images/about/MAIRA.jpg",
        name: "Maira",
        postion: "VP Internal Affair"
    },
    {
        img: "/images/about/Subtain.jpg",
        name: "Subtain A.",
        postion: "Secretary Sponsorship"
    },
    {
        img: "/images/about/Usman.jpg",
        name: "Usman A.",
        postion: "Secretary Information"
    },
    {
        img: "/images/about/Ahtsham.jpg",
        name: "Ahtsham A.",
        postion: "Secretary Protocol"
    },
    {
        img: "/images/about/Arsam.jpg",
        name: "Arsam K.",
        postion: "Secretary Security"
    },
    {
        img: "/images/about/BAZAN.jpg",
        name: "Sarim S.",
        postion: "Secretary Operations"
    },
    {
        img: "/images/about/Hammad.jpg",
        name: "Hammad K.",
        postion: "Secretary Food & Accomudation"
    },

    {
        img: "/images/about/Mujahid.jpg",
        name: "Mujahid Z.",
        postion: "Secretary PR/Marketing"
    },
    {
        img: "/images/about/Saba.jpg",
        name: "Saba W.",
        postion: "Secretary Finance"
    }
    ])

    return <main className={"px-6 lg:px-16 font-poppins my-16" + + poppins.className}>
        <section className=" max-w-screen  flex flex-col lg:flex-row justify-between">
            <div className="flex-1 flex flex-col gap-2">
                <h6 className={"text-[#0e1d3d7e]  font-semibold text-lg " + poppins.className}>About Us</h6>
                <h1 className={"text-3xl font-bold mb-4 " + poppins.className}>Welcome to MustCon – Where Innovation Takes Center Stage!</h1>

                <p className={`${poppins.className} my-4 text-xl border-l-2 pl-4 border-l-slate-900`}>
                    MUSTCon’24 aims to be the flagship event for technology enthusiasts, innovators, and visionaries. MUSTCon’24 promises to provide a convergence of cutting-edge ideas, spirited competition, and unparalleled networking opportunities. Our mission is to inspire, educate, and empower participants across various domains, fostering a vibrant ecosystem of creativity & collaboration.                </p>
                <div className="mt-8 ">
                    <Link href={"https://registrations.mustcon.com.pk"}  className='text-2xl font-medium px-8 py-4 rounded-md transition-all duration-75 bg-slate-200  hover:bg-slate-900  hover:text-white' > Register Now </Link>
                </div>

            </div>
            <div className="flex-1 w-full flex flex-row justify-center items-center my-8">
                <img src="/images/about-us.svg" className="w-full max-w-[500px]" />
            </div>
        </section>

        <section className="max-w-screen my-8 lg:min-h-0 min-h-screen">
            <div className="flex-1 flex flex-col gap-2">
                <h6 className={"text-[#0e1d3d7e]  font-semibold text-lg " + poppins.className}>Our Team</h6>
                <h1 className={"text-3xl font-bold mb-4 " + poppins.className}>About Our Team</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {
                        data.map(i => <div key={i.postion} className="col-span-1">
                            <div className={` ${poppins.className} my-4  cursor-pointer  flex group flex-col items-center gap-2 justify-center`}>
                                <img src={i.img} className={`w-64 object-center rounded-md h-64 object-cover border-[8px] p-2 ${i.postion == "President" ? "border-sky-700" : i.postion.toLowerCase().includes("vp ") ? "border-purple-500" : "border-green-700"} transition-all duration-150 group-hover:border-white`} />
                                <p className=" text-xl font-bold">{i.name}</p>
                                <p className={`text-lg font-semibold ${i.postion == "President" ? "text-sky-700" : i.postion.toLowerCase().includes("vp ") ? "text-purple-700" : "text-green-700"}`}>{i.postion}</p>
                            </div>
                        </div>)
                    }
                </div>

            </div>
        </section>
    </main>
}