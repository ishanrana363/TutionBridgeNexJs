import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TutorNavbar = () => {
    return (
        <div className="sticky px-8 top-0 z-50 bg-white shadow-md">
            <div className="flex items-center justify-between ">
                <div className="flex items-center">
                    {/* Logo */}
                    <div className=" flex-shrink-0   ">
                        <Link href="https://ant.design">
                            <Image
                                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739890227/Frame_2147224871_ekpza2.png"
                                alt="Logo"
                                width={60}
                                height={50}
                            />
                        </Link>
                    </div>
                    {/* Name with margin-left of 20% */}
                    <div className="  relative ml-40 ">
                        <h1 className="text-xl font-semibold text-[#141414]">Ishan Rana</h1>
                    </div>
                </div>
                {/* Notification and Profile */}
                <div className="flex items-center space-x-4">
                    <div>
                        <Link href="">
                            <Image
                                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739600791/tutor-bridge/bwe3csdrr0pvoqtscezc.png"
                                alt="Notification"
                                width={20}
                                height={20}
                            />
                        </Link>
                    </div>
                    <div>
                        <Link href="">
                            <Image
                                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739600931/tutor-bridge/lyl7d3inmog8mar8ra8y.png"
                                alt="Profile"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorNavbar;
