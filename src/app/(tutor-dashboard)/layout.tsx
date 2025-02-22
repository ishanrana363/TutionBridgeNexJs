import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import TutorNavbar from '@/components/tutor/TutorNavbar';

const Layout = ({ children }) => {
    return (
        <div>
            <AntdRegistry>
                <TutorNavbar />
                <div className="flex">
                    <div className=" min-w-[20%]  border">
                        <h1>Sidebar</h1>
                    </div>
                    <div className="max-w-[70%]">
                        {children}
                    </div>
                </div>
            </AntdRegistry>
        </div>
    );
};

export default Layout;
