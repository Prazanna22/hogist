import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';  
import 'aos/dist/aos.css';  
import delivery from "../assets/delivery.png";
import apple1 from "../assets/apple1.png";
import ProductCategories from './ProductCategories';
import { Footer } from './Footer';
import bg from "../assets/bg.png";
import bg1 from "../assets/bg1.png";

export const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const form = useRef();

    useEffect(() => {
        AOS.init({ duration: 2000, once: true }); 
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_dcieig6', 'template_wra9j8m', form.current, 'oB-m0khulFwQ6EjMx')
            .then(() => console.log('SUCCESS!'))
            .catch(error => console.log('FAILED...', error.text));
    };
    const cards = [
        { id: 1, image: apple1, title: "Organic", desc: "Organic and Fresh Red Apple", price: "$12.00", oldPrice: "$15.00" },
        { id: 2, image: apple1, title: "Organic", desc: "Organic and Fresh Red Apple", price: "$12.00", oldPrice: "$15.00" },
        { id: 3, image: apple1, title: "Organic", desc: "Organic and Fresh Red Apple", price: "$12.00", oldPrice: "$15.00" },
        { id: 4, image: apple1, title: "Organic", desc: "Organic and Fresh Red Apple", price: "$12.00", oldPrice: "$15.00" },
    ];

    return (
        <>
            <div className="bg-black ">
                <div className='grid grid-coln-1 md:grid-cols-2 md:py-14 bg-white' >
                    <div className='py-10 bg-white md:pl-10 lg:pl-20 flex items-center text-center md:items-start flex-col md:text-left'>
                        <h1 className='my-5 font-semibold text-xl' data-aos="fade-up">Organic food</h1>
                        <p className="font-bold text-6xl my-5" data-aos="fade-up">Tasty & Healthy Organic Food</p>
                        <p className='font-normal my-5 text-md' data-aos="fade-up">
                            Deliciously nutritious, our organic food brings you the perfect balance of taste and health.
                        </p>
                        <button className='py-4 px-4 flex my-5 bg-red-500 text-white font-bold rounded-lg' data-aos="fade-left">
                            Explore products
                        </button>
                    </div>
                    <div className='bg-white flex justify-center' data-aos="fade-left">
                        <img src={bg} alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2  bg-black text-white py-20 px-10">
                    <div className="md:flex hidden " data-aos="fade-right">
                        <div className="flex w-full   gap-4">
                            {cards.map((card, index) => (
                                <div
                                    key={card.id}
                                    className={`relative  rounded-xl transition-all duration-500 ease-in-out flex flex-col 
                                overflow-hidden cursor-pointer shadow-lg border border-red-700 items-center
                                    ${activeIndex === index ? "w-[60%]" : "w-[10%]"}`}
                                    onClick={() => setActiveIndex(index)}
                                >

                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="absolute top-0  h-64 my-4 object-cover rounded-t-xl transition-transform duration-500"
                                    />


                                    {activeIndex !== index && (
                                        <div className="absolute inset-0 flex items-center mt-68 bg-opacity-50  text-white text-lg font-bold -rotate-90">
                                            {card.title}
                                        </div>
                                    )}


                                    {activeIndex === index && (
                                        <div className="absolute bottom-0 w-full h-1/3 p-4 flex flex-col justify-center bg-black bg-opacity-40 text-white transition-opacity duration-500">
                                            <h2 className="text-left  text-xl font-normal text-green-500 ">{card.title}</h2>
                                            <p className="text-left my-2 font-semibold text-lg">{card.desc}</p>
                                            <p className="text-left font-semibold text-lg ">
                                                {card.price} <span className="line-through ml-5 opacity-60">{card.oldPrice}</span>
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-yellow-500 to-white p-5 rounded-2xl " data-aos="fade-up">
                        <div className="text-black order-2 md:order-1">
                            <h1 className='font-semibold text-2xl'>Fresh Orange Juice</h1>
                            <h1 className='font-bold text-4xl uppercase my-4'>upto 40% off</h1>
                            <p className='text-lg font-light my-4'>Refresh with our orange juice—now up to 40% off for a limited time.</p>
                            <p className='text-lg font-semibold my-4'>$6.51 <span className=' mx-3 text-sm font-light'>$7.99</span></p>
                            <button className='py-3 px-6 flex my-5 bg-yellow-400 text-white font-bold rounded-lg' data-aos="zoom-in">Shop Now</button>
                        </div>
                        <div className="order-1 md:order-2">
                            <img src={bg1} alt="" className='w-full' />
                        </div>
                    </div>
                </div>

                <ProductCategories />
                <div className="px-20 bg-black py-20 pb-30" data-aos="fade-up">
                    <h1 className='text-center font-bold text-2xl md:text-6xl mb-12 my-10 md:mx-72 text-white'>
                        Wholesome Dairy Delights Delivered Fresh to You
                    </h1>
                    <div className="grid md:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-10">
                        {[1, 2, 3, 4].map((_, index) => (
                            <div key={index} className="flex flex-col justify-center items-center py-10 px-5 bg-black text-white rounded-2xl border border-white" data-aos="fade-up" data-aos-delay={`${index * 200}`}>
                                <img src={delivery} alt="" className="w-14 h-14 bg-green-400 p-2 rounded-full mb-4" />
                                <p className='font-semibold text-center text-xl'>Quick, No-Cost Delivery & Setup Included</p>
                            </div>
                        ))}
                    </div>
                </div>

                



                <div className="flex flex-col items-center bg-black" >
                    <div className="md:px-72" data-aos="fade-up">
                        <h1 className='font-bold text-2xl  md:text-4xl text-center text-white'><span className='text-green-500'>Stay Updated:</span> Subscribe for Organic Food News and Exclusive Offers</h1>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col my-10 md:my-20 " data-aos="fade-up">

                        <input type="text" name="from_name" placeholder='Name' className="bg-[#4b4b4b] text-white outline-none py-2 pr-20 md:pr-36 xl:pr-72 pl-3 my-5 " />
                        <input type="email" name="from_email" placeholder='Product' className="bg-[#4b4b4b] text-white outline-none py-2 pr-20 md:pr-36 xl:pr-72 pl-3  my-5" />
                        <input name="message" placeholder="message" className="bg-[#4b4b4b] text-white outline-none py-2 pr-20 md:pr-36 xl:pr-72 pl-3  my-5" />
                        <button type="submit" value="Send" className="bg-white font-semibold text-center py-2" data-aos="zoom-in">Subscribe</button>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    );
};
