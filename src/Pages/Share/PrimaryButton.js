import React from 'react';


const PrimaryButton = ({ children }) => {
    return (
        <div className='text-center'>
            <button className='uppercase px-5 py-3 bg-[#0ea5e9] rounded my-10 font-serif text-white hover:bg-slate-500'>{children}</button>
        </div>
    );
};

export default PrimaryButton;