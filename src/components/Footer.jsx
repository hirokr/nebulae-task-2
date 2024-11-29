"use client";
import { navLinks } from "@/lib/navData";
import Link from "next/link";
import { AiFillSkype } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import Image from "next/image";

const Footer = () => {
  const links = navLinks;
  const services = navLinks[2].works;

  return (
    <div>
      <div
        className={`px-10 ssm:px-16 s_lg:px-40 grid grid-cols-1 ssm:grid-cols-2 s_lg:grid-cols-5 gap-4 w-full py-20 text-slate-600 font-mono text-[.9rem] leading-7 bg-[#f6f6f6] justify-center`}
      >
        <div className=''>
          <h1 className='text-[1.2rem] mb-3'> Navigation</h1>
          {links.map((links, index) => {
            return (
              <div key={index}>
                <Link
                  href={links.link}
                  className='before:w-0 before:left-0 hover:text-hoverColor transition-all duration-500 before:absolute before:inset-1 before:bg-hoverColor  hover:before:w-full before:duration-500 before:h-[.1px] before:rounded-3xl before:top-full relative'
                >
                  {links.title}
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          <h1 className='text-[1.2rem]  mb-3'>Services</h1>
          {services.map((links, index) => {
            return (
              <div key={index}>
                <Link
                  href={links.link}
                  className='before:w-0 before:left-0 hover:text-hoverColor transition-all duration-500 before:absolute before:inset-1 before:bg-hoverColor  hover:before:w-full before:duration-500 before:h-[.1px] before:rounded-3xl before:top-full relative'
                >
                  {links.title}
                </Link>
              </div>
            );
          })}
        </div>
        <div className='s_lg:ml-5 h-full flex flex-col justify-between gap-5'>
          <h1 className='text-[1.2rem] mb-3'>Contact US</h1>
          <div className='flex flex-col justify-between h-full'>
            <div className='flex text-[.9rem] s_lg:text-[1.2rem] text-gray-600 items-center group mb-2'>
              <span className='p-[6px]  border-[2px] border-hoverColor  rounded-full text-hoverColor group-hover:bg-hoverColor group-hover:text-white'>
                <MdOutlineEmail className='w-5 h-5' />
              </span>
              <h3 className='p-[6px] group-hover:text-hoverColor'>
                dontcontact@gmail.com
              </h3>
            </div>
            <div className='flex  text-[.9rem] s_lg:text-[1.2rem] text-gray-600 items-center group  mb-2'>
              <span className='p-[6px]  border-[2px] border-hoverColor  rounded-full text-hoverColor group-hover:bg-hoverColor group-hover:text-white'>
                <AiFillSkype className='w-5 h-5' />
              </span>
              <h3 className='p-[6px] group-hover:text-hoverColor'>acodez</h3>
            </div>
            <div className='flex  text-[.9rem] s_lg:text-[1.2rem] text-gray-600 items-center group  mb-2'>
              <span className='p-[6px]  border-[2px] border-hoverColor  rounded-full text-hoverColor group-hover:bg-hoverColor group-hover:text-white'>
                <IoCall className='w-5 h-5' />
              </span>
              <h3 className='p-[6px] group-hover:text-hoverColor'>
                000-00000-00
              </h3>
            </div>
          </div>
          <div className=''>
            <h1 className='pb-2'>Find us on</h1>
            <div className='flex gap-2 '>
              <div className='w-10 h-10 flex justify-center items-center rounded-full transition-all duration-500 bg-[#3b5998] text-white hover:bg-gray-500 hover:-translate-y-2'>
                <FaFacebookF className='w-5 h-5' />
              </div>
              <div className='w-10 h-10 flex justify-center items-center rounded-full transition-all duration-500 bg-[#00aced] text-white hover:bg-gray-500 hover:-translate-y-2 left-9'>
                <FaTwitter className='w-5 h-5' />
              </div>
              <div className='w-10 h-10 flex justify-center items-center rounded-full transition-all duration-500 bg-[#007bb6] text-white hover:bg-gray-500 hover:-translate-y-2 left-18'>
                <FaLinkedinIn className='w-5 h-5' />
              </div>
              <div className='w-10 h-10 flex justify-center items-center rounded-full transition-all duration-500 bg-[#dd4b39] text-white hover:bg-gray-500 hover:-translate-y-2 left-30'>
                <TfiGoogle className='w-5 h-5' />
              </div>
            </div>
          </div>
        </div>
        <div className='s_lg:col-span-2 s_lg:ml-20 s_lg:max-w-[80%]'>
          <h1 className='text-[1.2rem] mb-3'>Newsletter</h1>
          <form
            action='#'
            className='flex items-center text-[.6rem] ssm:text-[.9rem] w-full'
          >
            <input
              type='email'
              placeholder='Your Email Address'
              required
              className='w-full px-4 py-2 text-gray-700 border-[1px] border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-500'
            />
            <button
              className='min-w-32 px-4 py-2 text-white bg-hoverColor hover:scale-110 transition-all duration-500 hover:shadow-2xl
          '
              type='submit'
            >
              Subscribe
            </button>
          </form>
          <p className='text-[.5rem] ssm:text-[.7rem]'>
            Enter your email ID above to subscribe to our newsletter.
          </p>
          <div className='mt-5'>
            <Link href='#'>
              <div
                className='w-full min-h-16 max-h-20 flex items-center justify-center transition-all duration-[500ms] bg-white mb-2 s_lg:text-2xl hover:bg-hoverColor hover:text-white 
          '
              >
                <span></span>
                <h1>16 International Awards</h1>
              </div>
            </Link>
            <div className='w-full justify-between items-center box-border flex'>
              <Image
                src={"/partners/07_google-partner.png"}
                alt='partners'
                height={7}
                width={150}
                className='w-[49%]'
              />
              <Image
                src={"/partners/08_bing-ads.png"}
                alt='partners'
                height={7}
                width={150}
                className='w-[49%]'
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center h-20 px-20 gap-2 s_lg:gap-5 flex-wrap py-5">
        <p>©2024 All rights reserved to Acodez</p>
        <Link href={"#"} className="hover:text-hoverColor"> Terms & Conditions</Link>
        <Link href={"#"} className="hover:text-hoverColor"> Privacy Policy</Link>
      </div>
    </div>
  );
};

export default Footer;
