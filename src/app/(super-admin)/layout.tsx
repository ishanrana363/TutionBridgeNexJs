"use client"
import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import TutorNavbar from '@/components/tutor/TutorNavbar';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Layout = ({ children }) => {
    const pathname = usePathname();

    return (
        <div className="min-h-screen flex flex-col">
            <AntdRegistry>
                <TutorNavbar />
                <div className="flex ">
                    {/* Sidebar */}
                    <div className=" hidden lg:block w-1/5 h-[90vh] bg-[#F1F8FF] p-6 overflow-y-auto shadow-md">
                        <nav>
                            <ul className="space-y-2">
                                {/* Dashboard Link */}
                                <li>
                                    <Link href="/admin">
                                        <div className={`flex items-center space-x-3 p-3 rounded-lg  transition-all duration-300 ${pathname === "/admin" ? "bg-white text-[#64A8E8] font-semibold transition-all duration-500   shadow" : "text-[#3A3A3A] font-medium "}`}>
                                            <Image
                                                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739602048/tutor-bridge/hiqksqdoynppnq0omfcx.png"
                                                alt="Dashboard Icon"
                                                width={20}
                                                height={20}
                                            />
                                            <span>Dashboard</span>
                                        </div>
                                    </Link>
                                </li>

                                {/* Profile Link */}
                                <li>
                                    <Link href="/admin/job-request">
                                        <div className={`flex items-center space-x-3 p-3 rounded-lg  transition-all duration-300 ${pathname === "/admin/job-request" ? "bg-white text-[#64A8E8] font-semibold  shadow transition-all duration-500 " : "text-[#3A3A3A] font-medium "}`}>
                                            <Image
                                                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739603224/tutor-bridge/jqous4irxwpncr90ux30.png"
                                                alt="Profile Icon"
                                                width={20}
                                                height={20}
                                            />
                                            <span>Jobs request</span>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/admin/profile">
                                        <div className={`flex items-center space-x-3 p-3 rounded-lg  transition-all duration-300 ${pathname === "/admin/profile" ? "bg-white text-[#64A8E8] font-semibold  shadow transition-all duration-500 " : " text-[#3A3A3A] font-medium "}`}>
                                            <Image
                                                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739603619/tutor-bridge/ztvcg8wvblsryuietkqe.png"
                                                alt="Profile Icon"
                                                width={20}
                                                height={20}
                                            />
                                            <span>Profile</span>
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/admin/total-teacher">
                                        <div className={`flex items-center space-x-3 p-3 rounded-lg  transition-all duration-300 ${pathname === "/admin/total-teacher" ? "bg-white text-[#64A8E8] font-semibold  shadow transition-all duration-500 " : " text-[#3A3A3A] font-medium "}`}>
                                            <Image
                                                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739603897/tutor-bridge/mhy6vcoqqiuwey029qrz.png"
                                                alt="Profile Icon"
                                                width={20}
                                                height={20}
                                            />
                                            <span>Total Teacher</span>
                                        </div>
                                    </Link>
                                </li>

                                
                                <li>
                                    <span className=' cursor-pointer ' >
                                        <div className={`flex items-center space-x-3 p-3 rounded-lg  transition-all duration-300 text-[#CA4A4A] `}>
                                            <Image
                                                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1739604575/tutor-bridge/u5pdwayrqm739qxwavjm.png"
                                                alt="Profile Icon"
                                                width={20}
                                                height={20}
                                            />
                                            <span>Logout</span>
                                        </div>
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-6">{children}</div>
                </div>
            </AntdRegistry>
        </div>
    );
};

export default Layout;
