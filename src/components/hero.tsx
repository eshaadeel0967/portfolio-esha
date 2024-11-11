import React from "react";
import Image from "next/image";
export default function Hero() {
    return (
        <div>
            <div className="flex">
                <Image src="/images/PP.jpg" width="300" height="300" alt="profile picture" className="rounded-full " />
                <h2 className="text-7xl text-left font-bold text-pink-500 ml-40 " >Hello! <br /> I am <br /> Esha </h2>
            </div>
            <div className="ml-14 flex gap-14 mt-14">
                <button className="bg-gray-100 border-0 py-1 px-3 text-gray-500 focus:outline-none hover:bg-pink-300 rounded text-base mt-4 md:mt-0">About me </button>
                <button className="bg-gray-100 border-0 py-1 px-3 text-gray-500 focus:outline-none hover:bg-pink-300 rounded text-base mt-4 md:mt-0">Contact me</button>
            </div>
        </div>
    )
}