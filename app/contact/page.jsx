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
            <h6 className={"text-[#0e1d3d7e] font-bold " + poppins.className}>NEED HELP?</h6>
            <h1 className={"text-5xl font-bold my-2 " + poppins.className}>Get In Touch With us</h1>

            <div className="flex  flex-col lg:flex-row my-8 justify-center gap-4 px-4 relative">
                <div className="min-w-[250px] lg:min-w-[350px] p-4 min-h-[275px] flex flex-col items-center justify-center gap-4 shadow-xl  shadow-[#00000010]">
                    <img className="    w-16 rounded-full" src="/icons/instagram.png" />
                    <p className={`${poppins.className} text-md text-slate-950 font-semibold`}>Instagram</p>
                    <Link href={"https://www.instagram.com/mustcon24/"} className={`${poppins.className} text-md text-slate-950 font-normal`}>instagram/mustcon</Link>
                </div>

                {/*   <div className="min-w-[250px] lg:min-w-[350px] p-4 min-h-[275px] flex flex-col items-center justify-center gap-4 shadow-xl  shadow-[#00000010]">
            <img className=" bg-sky-700 p-4 w-16 rounded-full" src="/icons/phone-white.png" />
            <p className={`${poppins.className} text-md text-slate-950 font-semibold`}>Call Us</p>
            <Link href={"tel:+923169322863"} className={`${poppins.className} text-md text-slate-950 font-normal`}>+92 316 9322863</Link>
          </div> */}

                <div className="min-w-[250px] lg:min-w-[350px] p-4 min-h-[275px] flex flex-col items-center justify-center gap-4 shadow-xl  shadow-[#00000010]">
                    <img className=" bg-sky-700 p-4 w-16 rounded-full" src="/icons/email.png" />
                    <p className={`${poppins.className} text-md text-slate-950 font-semibold`}>Email</p>
                    <Link href={"info@mustcon.com.pk"} className={`${poppins.className} text-md text-slate-950 font-normal`}>info@mustcon.com.pk</Link>
                </div>

                <div className="min-w-[250px] lg:min-w-[350px] p-4 min-h-[275px] flex flex-col items-center justify-center gap-4 shadow-xl  shadow-[#00000010]">
                    <img className=" bg-sky-700 p-4 w-16 rounded-full" src="/icons/location.png" />
                    <p className={`${poppins.className} text-md text-slate-950 font-semibold`}>Our Location
                    </p>
                    <Link href={"https://www.google.com/maps/dir/33.1511051,73.7382126/4PXW%2BQ2R+Mirpur+University+of+Science+and+Technology+(MUST),+College+Rd,+New+Mirpur+City,+Azad+Jammu+and+Kashmir+10250/@33.1504163,73.7362415,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x391fec085ec688ef:0xd988766d3ccdd31c!2m2!1d73.7450184!2d33.149477?entry=ttu"} className={`${poppins.className} text-md text-slate-950 font-normal`}>Mirpur, AJK</Link>
                </div>
            </div>
            <div className="my-16"></div>
            <h6 className={"text-[#0e1d3d7e] font-bold " + poppins.className}>ANY QUESTIONS?</h6>
            <h1 className={"text-5xl font-bold my-2 " + poppins.className}>Ask a Query</h1>
            <div className="flex flex-row my-8 justify-center items-center ">
                <button className='text-2xl font-medium px-8 py-4  rounded-md transition-all duration-300 bg-slate-200  hover:bg-slate-900  hover:text-white'>
                    Contact Us
                </button>
            </div>

        </section>
        <div id="mirpur" className="max-w-screen overflow-hidden h-screen map-container">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.4625523439804!2d73.74244347431491!3d33.14948146486069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391fec085ec688ef%3A0xd988766d3ccdd31c!2sMirpur%20University%20of%20Science%20and%20Technology%20(MUST)!5e0!3m2!1sen!2s!4v1716107474255!5m2!1sen!2s"

                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen=""
                loading="lazy"
            />
        </div>


    </main>
}