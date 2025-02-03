import { useState } from "react";

export const FruitSlider = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex gap-4 items-center">
            <div 
                className={`w-60 bg-white p-4 rounded-lg shadow-md ${openIndex === 0 ? "block" : "hidden"}`} 
                onClick={() => handleClick(0)}
            >
                <img src="apple1.jpg" alt="Organic Apple" className="w-full h-40 object-cover rounded-md" />
                <h1 className="text-xl font-semibold mt-2">Organic and Fresh Apple</h1>
                <p className="text-lg text-green-600 mt-1">$12.00</p>
            </div>
            
            <div 
                className={`w-60 bg-white p-4 rounded-lg shadow-md ${openIndex === 1 ? "block" : "hidden"}`} 
                onClick={() => handleClick(1)}
            >
                <img src="apple2.jpg" alt="Organic Apple" className="w-full h-40 object-cover rounded-md" />
                <h1 className="text-xl font-semibold mt-2">Organic and Fresh Apple</h1>
                <p className="text-lg text-green-600 mt-1">$12.00</p>
            </div>

            <div 
                className={`w-60 bg-white p-4 rounded-lg shadow-md ${openIndex === 2 ? "block" : "hidden"}`} 
                onClick={() => handleClick(2)}
            >
                <img src="apple3.jpg" alt="Organic Apple" className="w-full h-40 object-cover rounded-md" />
                <h1 className="text-xl font-semibold mt-2">Organic and Fresh Apple</h1>
                <p className="text-lg text-green-600 mt-1">$12.00</p>
            </div>

            <div 
                className={`w-60 bg-white p-4 rounded-lg shadow-md ${openIndex === 3 ? "block" : "hidden"}`} 
                onClick={() => handleClick(3)}
            >
                <img src="apple4.jpg" alt="Organic Apple" className="w-full h-40 object-cover rounded-md" />
                <h1 className="text-xl font-semibold mt-2">Organic and Fresh Apple</h1>
                <p className="text-lg text-green-600 mt-1">$12.00</p>
            </div>
        </div>
    );
};


