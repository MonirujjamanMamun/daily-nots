import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const HomeDashboard = () => {
    return (
        <div className="drawer drawer-mobile bg-[#0ea4e927]">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet />
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#0f172aec] text-white">
                    <li><Link to='/' className='text-xl font-bold p-5 text-center font-mono uppercase'>All Notes</Link></li>
                    <li><Link to='addnotes' className='text-xl font-bold p-5 text-center font-mono uppercase'>Add Notes</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default HomeDashboard;