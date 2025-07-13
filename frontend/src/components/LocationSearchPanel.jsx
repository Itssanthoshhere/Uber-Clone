import React from 'react'

const LocationSearchPanel = (props) => {
    // console.log(props);

    // Sample array for location 
    const location = [
        "24B, Near Kapoor's cafe, Coding School, TN",
        "22A, Near Vel's cafe, Coding School, TN",
        "19C, Near Sandy's cafe, Coding School, TN",
        "24E, Near Raj's cafe, Coding School, TN",
    ]

    return (
        <div>
            {/* This is just a sample data */}

            {
                location.map(function (elem, idx) {
                    return <div key={idx} onClick={() => {
                        props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                    }} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                        <h2 className='bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                })
            }
        </div>
    )
}

export default LocationSearchPanel
