import Link from 'next/link';
import React from 'react';

const TutorSidebar = () => {
    return (
        <div className='bg-emerald-600 w-1/5 min-h-screen p-6'>
            <nav>
                <ul className="space-y-4 bg-red-700 ">
                    <li>
                        <Link className='text-green-700 hover:text-green-900 font-semibold' href="/tutor">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link className='text-green-700 hover:text-green-900 font-semibold' href="/tutor/courses">
                            My Courses
                        </Link>
                    </li>
                    <li>
                        <Link className='text-green-700 hover:text-green-900 font-semibold' href="/tutor/students">
                            Students
                        </Link>
                    </li>
                    <li>
                        <Link className='text-green-700 hover:text-green-900 font-semibold' href="/tutor/settings">
                            Settings
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default TutorSidebar;
