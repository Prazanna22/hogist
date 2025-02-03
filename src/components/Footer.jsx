import React from 'react'
import logo from "../assets/logo.png"
export const Footer = () => {
    return (
        <>
            <div className=" px-10 md:px-20 bg-[#000]  text-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 text-sm font-normal text-left sm:text-left">
                    <div className="flex justify-start md:justify-center md:block "><img src={logo} alt="" className='w-24 md:w-40  my-8 md:my-8' /></div>
                    <div className="py-5 px-3 ">
                        <p className='my-5 cursor-pointer'>Contact Us</p>
                        <p className='my-5 cursor-pointer'>About Us</p>
                        <p className='my-5 cursor-pointer'>Careers</p>
                        <p className='my-5 cursor-pointer'>Our Stories</p>
                        <p className='my-5 cursor-pointer'>News & Blogs</p>
                        <p className='my-5 cursor-pointer'>Corporate Information</p>
                    </div>
                    <div className="py-5 px-3">                  
                        <p className='my-5 cursor-pointer'>Payment</p>
                        <p className='my-5 cursor-pointer'>Shipping</p>   
                        <p className='my-5 cursor-pointer'>Cancellation & Return</p>
                        <p className='my-5 cursor-pointer'>FAQ</p>
                        <p className='my-5 cursor-pointer'>Report Infrigement</p>
                        
                    </div>
                    <div className="py-5 px-3">
                        <p className='my-5 cursor-pointer'>Terms of Use</p>
                        <p className='my-5 cursor-pointer'>Security</p>
                        <p className='my-5 cursor-pointer'>Privacy Policy</p>
                        <p className='my-5 cursor-pointer'>Beverage Subscription</p>         
                        <p className='my-5 cursor-pointer'>Sitemap</p>
                        <p className='my-5 cursor-pointer'>GDPR Compliance</p>
                        <p className='my-5 cursor-pointer'>Season's Gifting</p>
                        <p className='my-5 cursor-pointer'>Delivery</p>
                        <p className='my-5 cursor-pointer'>FAQs</p>
                    </div>
                    <div className="py-5 px-3">
                        <p className='my-5 cursor-pointer'>Address :</p>
                        <p className='my-5 cursor-pointer'>327 Park Ave S, New York, NY 10010 United States</p>
                        <p className='my-5 cursor-pointer'>Hours :</p>
                        <p className='my-5 cursor-pointer'>Mon-Fri: 9 AM to 5 PM</p>         
                        <p className='my-5 cursor-pointer'>Phone :</p>
                        <p className='my-5 cursor-pointer'>+1 877 217 8371</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}
