"use client"

import Image from "next/image";
import { CustomButton } from ".";
import '../app/globals.css';

const Herosec = () => {
    const handleScroll = () =>{

    }


  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
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