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
        img: "https://auair.tech/images/auon.jpg",
        name: "M.Umer Malik",
        postion: "MUST"
    },
    {
        img: "https://auair.tech/images/auon.jpg",
        name: "Syed Aoun Shah",
        postion: "President"
    },
    {
        img: "https://auair.tech/images/auon.jpg",
        name: "Syed Aoun Shah",
        postion: "President"
    }
        , {
        img: "https://auair.tech/images/auon.jpg",
        name: "Syed Aoun Shah",
        postion: "President"
    }
    ])

    return <main className={"px-6 lg:px-16 font-poppins my-16" + + poppins.className}>
        <section className=" max-w-screen  flex flex-col lg:flex-row justify-between">
            <div className="flex-1 flex flex-col gap-2">
                <h6 className={"text-[#0e1d3d7e]  font-semibold text-lg " + poppins.className}>About Us</h6>
                <h1 className={"text-3xl font-bold mb-4 " + poppins.className}>Welcome to MustCon – Where Innovation Takes Center Stage!</h1>

                <p className={`${poppins.className} my-4 text-xl border-l-2 pl-4 border-l-slate-900`}>
                    Experience innovation at Air Tech '24, the largest Technical Olympiad in Pakistan, hosted by Air University, in Islamabad. Elevate technical skills in diverse fields, embrace practical problem-solving, and enjoy collaborative social events. Join us in shaping the future of technology at this dynamic engineering showcase.
                </p>
                <div className="mt-8 ">
                    <Link href={"/"} className='text-2xl font-medium px-8 py-4 rounded-md transition-all duration-75 bg-slate-200  hover:bg-slate-900  hover:text-white' > Register Now </Link>
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
                        data.map(i => <div className="col-span-1">
                            <div className={` ${poppins.className} my-4  cursor-pointer  flex group flex-col items-center gap-2 justify-center`}>
                                <img src={i.img} className="w-64 rounded-full h-64 object-cover border-[8px] p-2 border-sky-700 transition-all duration-150 group-hover:border-white" />
                                <p className=" text-xl font-bold">{i.name}</p>
                                <p className="text-lg font-semibold text-sky-700">President</p>
                            </div>
                        </div>)
                    }
                </div>

            </div>
        </section>
    </main>
}