import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className=' bg-[#F1F8FF] ' >
            {/* main div */}
            <div className=' flex items-center justify-between  ' >
                {/* logo  */}
                <div>
                    <Link href={"/"} >
                        <Image
                            src={"https://res.cloudinary.com/dj2edy2rg/image/upload/v1739890227/Frame_2147224871_ekpza2.png"}
                            alt='nav logo'
                            width={45}
                            height={35}
                        />
                    </Link>
                </div>
                {/* button */}
                <div className=' flex gap-6 border ' >
                    <Link className=' text-[#2F3A4D] text-[17px] font-medium ' href={"/job-board"}>
                        Job Board
                    </Link>
                    <Link className=' text-[#2F3A4D] text-[17px] font-medium ' href={"/job-board"}>
                        Sign in
                    </Link>
                    <button className=' ' >
                        <Link className='text-red-400 bg-[#64A8E8]  px-5 py-3 text-4xl ' href={""}>
                            Become A Tutor
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;