"use client";
import Image from "next/image";
import { IoMdHome } from "react-icons/io";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className='relative h-20 justify-center items-center flex gap-10'>
      <nav className='relative flex'>
        <div className='h-10 w-28 relative'>
          <Image src={"/main logo/main_logo.png"} alt='main logo' fill />
        </div>
        <div>
          <ul className="hidden s_lg:flex s_lg:gap-6">
            <li>
              <a href='#'>
                <IoMdHome />
              </a>
            </li>
            <li>
              <a href='#'>Work</a>
            </li>
            <li>
              <a href='#'>Services</a>
            </li>
            <li>
              <a href='#'>Product</a>
            </li>
            <li>
              <a href='#'>Awards</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className='absolute right-10'>
        <label className={styles.burger} htmlFor='burger'>
          <input type='checkbox' id='burger' />
          <span>None</span>
          <span></span>
          <span></span>
        </label>
      </div>
    </header>
  );
};

export default Header;
