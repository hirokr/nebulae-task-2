"use client";
import Image from "next/image";
import { IoMdHome } from "react-icons/io";
import styles from "./header.module.css";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className={`relative py-7 justify-center items-center flex bg-transparent gap-10 z-50 text-white`}>
      <nav
        className={`relative w-full ml-[3%] flex justify-around s_lg:px-[5%] gap-10 items-center `}
      >
        <div className='h-14 s_lg:h-16 w-56 s_lg:w-56 relative z-50 s_wide:ml-[4%]'>
          <a href='#'>
            <Image src={"/main logo/main_logo.png"} alt='main logo' fill />
          </a>
        </div>
        <div className=' flex w-4/5 mr-20 s_lg:mr-8 s_wide:mr-10 gap-10 justify-end s_wide:justify-center items-center text-md s_wide:text-lg '>
          <ul className=' hidden s_lg:flex s_lg:gap-8 s_wide:gap-14 justify-center items-center'>
            <li className={styles.li_hover}>
              <a href='#'>
                <IoMdHome />
              </a>
            </li>
            <li className={styles.li_hover}>
              <a href='#'>Work</a>
            </li>
            <li className={styles.li_hover}>
              <a href='#'>Services</a>
            </li>
            <li className={styles.li_hover}>
              <a href='#'>Product</a>
            </li>
            <li className={styles.li_hover}>
              <a href='#'>Awards</a>
            </li>
            <li className={styles.li_hover}>
              <a href='#'>Blog</a>
            </li>
            <li className={styles.li_hover}>
              <a href='#'>Contact</a>
            </li>
          </ul>
          <div
            className={styles.button}
          >
            <button className='relative '>Quick Enquiry</button>
          </div>
        </div>
      </nav>
      <div className='absolute right-8 s_wide:right-10'>
        <label className={styles.burger} htmlFor='burger'>
          <input
            type='checkbox'
            id='burger'
            onChange={() => setShowMenu(!showMenu)}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </header>
  );
};

export default Header;
