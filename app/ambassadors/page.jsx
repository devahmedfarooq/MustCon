"use client"
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useState } from "react"
const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
});

export default function Page() {
    const [data, setData] = useState([{
        img: "https://auair.tech/images/auon.jpg",
        name: "Syed Aoun Shah",
        postion: "President"
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
        <section className=" max-w-screen flex flex-col lg:flex-row justify-between">
            <div className="flex-1 flex flex-col gap-1">
                <h6 className={"text-[#0e1d3d7e]  font-semibold text-lg " + poppins.className}>CAMPUS CONNECTORS</h6>
                <h1 className={"text-3xl font-bold mb-4 " + poppins.className}>Ambassadors</h1>
            </div>
            <div className="flex-1 my-8">

            </div>
        </section>

        <section>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    data.map(i => <div className="col-span-1">
                        <div className={` ${poppins.className} my-4 cursor-pointer flex group flex-col items-center gap-2 justify-center`}>
                            <img src={i.img} className="w-64 rounded-full h-64 object-cover border-[8px] p-2 border-sky-700 transition-all duration-150 group-hover:border-white" />
                            <p className=" text-xl font-bold">{i.name}</p>
                            <p className="text-lg font-semibold text-sky-700">President</p>
                        </div>
                    </div>)
                }
            </div>
        </section>
    </main>
}