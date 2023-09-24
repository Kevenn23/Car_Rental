"use client"

import Image from "next/image";
import { CustomButton } from ".";

const Herosec = () => {
    const handleScroll = () =>{

    }


  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
            Discover the future of car rentals!
            </h1>

            <p className="hero__subtitle">
            Streamline your rental process with our quick and easy booking service
            </p>

            <CustomButton 
                title="Explore Cars"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
            />
        </div>
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
            <Image src="/hero.png" alt="Hero-img" 
            fill className="object-contain"/>
        </div>

            <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden">
            </div>

        </div>

    </div>
  )
}

export default Herosec