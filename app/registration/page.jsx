"use client"
import { Poppins } from "next/font/google";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

import { useState } from "react"
const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
});
export default function Page() {
    return <main className="min-h-screen">
        <section className="my-32 text-center">
            <h6 className={"text-[#0e1d3d7e] font-bold " + poppins.className}>Register By</h6>
            <h1 className={"text-5xl font-bold my-2 " + poppins.className}>Simpily Adding You Info.</h1>

            <div className="flex  flex-col lg:flex-row my-8 justify-center gap-4 px-4 relative">
                <div className="min-w-[250px]  lg:min-w-[350px] p-4 min-h-[275px] flex flex-col items-center justify-center gap-4 shadow-xl  shadow-[#00000010]">
                    <img className=" bg-sky-700 p-4 w-16 rounded-full" src="/icons/linkedin-dark.png" />
                    <p className={`${poppins.className} text-md text-slate-950 font-semibold`}>Linkedin Page</p>
                    <Link href={"https://linkedin.com/airtech2024"} className={`${poppins.className} text-md text-slate-950 font-normal`}>linkedin.com/airtech2024</Link>
                </div>

                <div className="min-w-[250px] lg:min-w-[350px] p-4 min-h-[275px] flex flex-col items-center justify-center gap-4 shadow-xl  shadow-[#00000010]">
                    <img className=" bg-sky-700 p-4 w-16 rounded-full" src="/icons/phone-white.png" />
                    <p className={`${poppins.className} text-md text-slate-950 font-semibold`}>Call Us</p>
                    <Link href={"tel:+923169322863"} className={`${poppins.className} text-md text-slate-950 font-normal`}>+92 316 9322863</Link>
                </div>

            
            </div>
    
        </section>
    </main>
}