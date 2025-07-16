
import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
    return (
        <div>
            <div
                className="flex flex-col justify-between w-full h-screen pt-8 bg-center bg-cover"
                a style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1527603815363-e79385e0747e?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww')`,
                }}
            >
                <img
                    className="w-16 ml-8"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                    alt="Uber logo"
                />
                <div className='px-4 py-4 pb-8 bg-white'>
                    <h2 className='text-[30px] font-semibold'>Get Started with Uber</h2>
                    <Link to='/login' className='flex items-center justify-center w-full py-3 mt-5 text-white bg-black rounded-lg'>Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Start