"use client"

import Image from "next/image";
import { CustomButton } from ".";

const Herosec = () => {
    const handleScroll = () =>{

    }


  return (
    <div className=" flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto ">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
            Discover the future of car rentals!
            </h1>

            <p className="text-[27px] text-black-100 font-light mt-5">
            Streamline your rental process with our quick and easy booking service
            </p>

            <CustomButton 
                title="Explore Cars"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
        </div>
        <div className="hero__image-container">
        <div className="hero__image">
            <Image src="/hero.png" alt="Hero-img" 
            fill className="object-contain"/>
        </div>

            <div className="hero__image-overlay">
            </div>

        </div>

    </div>
  )
}

export default Herosec