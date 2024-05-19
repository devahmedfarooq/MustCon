"use client"
import { Poppins } from "next/font/google";
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
});
export default function Index() {
    return <>
        <footer className={"min-h-[85vh] flex flex-row items-center px-6 lg:px-4 py-24 relative bg-pruple " + poppins.className}>

            <img src="/icons/shape-1.png" className=" absolute top-[10%] left-[10%]" />
            <img src="/icons/shape-2.png" className="absolute bottom-[10%] right-[10%]" />

            <section className="flex flex-col lg:flex-row text-white justify-between gap-4">
                <div className="flex-[3]">
                    <h4 className="text-3xl font-medium"> Find Us </h4>
                    <p className="text-md my-2" > MustCon' 24 is designed to be the largest Technical Olympiad of Kashmir. It will encourage the practical implementation of engineering and applied sciences through a range of technical events in the fields of mechatronics, mechanical, electrical, computer sciences & applied sciences.</p>
                    <div className="flex flex-row justify-start items-start gap-4">
                        <Link href={"/"} ><img src="/icons/fb.png" className="w-12 p-4 rounded cursor-pointer hover:bg-[#0e1d3d7e] " /></Link>
                        <Link href={"/"} ><img src="/icons/linkedin.png" className="w-12 p-4 rounded cursor-pointer hover:bg-[#0e1d3d7e] " /></Link>
                        <Link href={"/"} ><img src="/icons/instagram.png" className="w-12 p-4 rounded cursor-pointer hover:bg-[#0e1d3d7e] " /></Link>
                    </div>
                </div>

                <div className="flex-[2] flex flex-col my-4 gap-4" >
                    <h4 className="text-3xl font-medium"> Explore </h4>
                    <Link href={"/about"} className="flex flex-row items-center gap-4"> <FaAnglesRight size={24} /> <p className="text-lg" > About </p>  </Link>
                    <Link href={"/about"} className="flex flex-row items-center gap-4"> <FaAnglesRight size={24} /> <p className="text-lg" > Ambassadors </p>  </Link>
                    <Link href={"/about"} className="flex flex-row items-center gap-4"> <FaAnglesRight size={24} /> <p className="text-lg" > Events </p>  </Link>
                    <Link href={"/about"} className="flex flex-row items-center gap-4"> <FaAnglesRight size={24} /> <p className="text-lg" > Contact Us </p>  </Link>
                </div>

                <div className="flex-[2] flex flex-col my-4 gap-4" >
                    <h4 className="text-3xl font-medium"> Top Events </h4>
                    <Link href={"/about"} className="flex flex-row items-center gap-4"> <FaAnglesRight size={24} /> <p className="text-lg" > Speed Programming </p>  </Link>
                    <Link href={"/about"} className="flex flex-row items-center gap-4"> <FaAnglesRight size={24} /> <p className="text-lg" > Gam Jam </p>  </Link>
                    <Link href={"/about"} className="flex flex-row items-center gap-4"> <FaAnglesRight size={24} /> <p className="text-lg" > Hackathons </p>  </Link>
                    <Link href={"/about"} className="flex flex-row items-center gap-4"> <FaAnglesRight size={24} /> <p className="text-lg" > Cyber Pro </p>  </Link>
                </div>

                <div className="flex-[2] flex flex-col my-4 gap-4" >
                    <h4 className="text-3xl font-medium"> Top Events </h4>
                    <Link href={"/about"} className="flex flex-row items-center gap-4"> <IoLocationSharp size={24} /> <p className="text-lg" > Mirpur, AJK </p>  </Link>
                    <Link href={"/about"} className="flex flex-row items-center gap-4"> <MdEmail size={24} /> <p className="text-lg" > info@mustcon.com</p>  </Link>
                    <Link href={"/about"} className="flex flex-row items-center gap-4"> <FaPhoneAlt size={24} /> <p className="text-lg" > +92 316 9322863 </p>  </Link>
                    <Link href={"/about"} className="flex flex-row items-center gap-4"> <FaPhoneAlt size={24} /> <p className="text-lg" > 051 9153275 </p>  </Link>
                </div>
            </section>

        </footer>
    </>
}