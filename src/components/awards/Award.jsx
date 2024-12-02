import Image from "next/image";
import styles from "../../app/globals.css";
// bg-[#f6f8fa]
const Award = () => {
  return (
    <div
      className={`relative px-10 animate-fade s_sm:px-30 s_lg:px-40 s_wide:px-40 py-20 text-gray-500 tracking-wider font-mono w-full  s_sm:flex s_sm:gap-5 s_sm:justify-center s_sm:items-center bg-white overflow-hidden`}
    >
      <div className=' w-full s_sm:w-[45%] h-[80vh  pb-5 flex flex-col justify-start '>
        <h1 className='text-[25px] before:w-[10%] mb-5 before:h-[3px] before:absolute before:top-[80%] before:rounded-xl before:bg-hoverColor inline-block before:left-0 before:inset-1 relative '>
          We&apos;ve won...
        </h1>
        <p className=' text-base leading-[2rem] tracking-wider pb-10 '>
          Multiple international awards, every year, since 2012! Apart from the
          16 international awards that we&apos;ve won, we&apos;re also a Google
          Certified Partner and Bing Ads Accredited Professional Company.
          We&apos;ve also been featured and mentioned in many leading tech
          magazines and portals for our various contributions.
        </p>
        <div
          className={`px-3 py-2 border-2 border-hoverColor rounded-full justify-center items-center flex w-28 text-hoverColor transition-all duration-200 hover:text-white hover:bg-hoverColor`}
        >
          <button className='text-sm relative '>View more</button>
        </div>
        <div>
          <Image
            src={"/gifs/awards-gif.gif"}
            alt='award'
            height={10}
            width={10}
            className='w-full m-0 p-0'
            unoptimized={true}
          />
        </div>
      </div>
      <div className='s_sm::w-[50%] relative '>
        <div className=' bg-white h-[28rem] drop-shadow-lg  w-[25rem] p-5 flex flex-col gap-7'>
          <h2>
            <span className='font-bold'>16</span> Awards
          </h2>
          <div className='flex gap-5 justify-start items-center'>
            <Image
              src={"/gifs/awardLogo.svg"}
              alt='award'
              height={10}
              width={10}
              className='w-16 m-0 p-0'
            />
            <section>
              <p className='text-xl'>Global Trends</p>
              <p>Triumph Winner</p>
              <p>2018, USA</p>
            </section>
          </div>
          <div className='flex bg-white gap-5 justify-start items-center'>
            <Image
              src={"/gifs/awardLogo.svg"}
              alt='award'
              height={10}
              width={10}
              className='w-16 m-0 p-0'
            />
            <section>
              <p className='text-xl'>Global Trends</p>
              <p>Triumph Winner</p>
              <p>2018, USA</p>
            </section>
          </div>
          <div className='flex bg-white gap-5 justify-start items-center'>
            <Image
              src={"/gifs/awardLogo.svg"}
              alt='award'
              height={10}
              width={10}
              className='w-16 m-0 p-0'
            />
            <section>
              <p className='text-xl'>Global Trends</p>
              <p>Triumph Winner</p>
              <p>2018, USA</p>
            </section>
          </div>
          <div className='hidden small:relative small:block small:bottom-full small:-right-10 
          '>
          <Image
          src={"/awards/0.png"}
          alt='award'
          height={60}
          width={100}
          className='w-32 drop-shadow-md hover:scale-110 transition-all duration-500 absolute right-10 -top-16  '
        />
        <Image
          src={"/awards/1.png"}
          alt='award'
          height={60}
          width={100}
          className='w-28 drop-shadow-md hover:scale-110 transition-all duration-500 absolute -right-20 top-3  '
        />
        <Image
          src={"/awards/2.png"}
          alt='award'
          height={60}
          width={100}
          className='w-32 drop-shadow-md hover:scale-110 transition-all duration-500 absolute right-0 top-24 '
        />
        <Image
          src={"/awards/3.png"}
          alt='award'
          height={60}
          width={100}
          className='w-32 drop-shadow-md hover:scale-110 transition-all duration-500 absolute -right-28 top-48  '
        />
        <Image
          src={"/awards/4.png"}
          alt='award'
          height={60}
          width={100}
          className='w-36 drop-shadow-md hover:scale-110 transition-all duration-500 absolute right-2 top-64  '
        />
        <Image
          src={"/awards/5.png"}
          alt='award'
          height={60}
          width={100}
          className='w-32 drop-shadow-md hover:scale-110 transition-all duration-500 absolute -right-16 top-96  '
        />
      
          </div>
        </div>
      </div>
      <div className="pt-10 flex flex-wrap gap-5 small:hidden">
        <Image
          src={"/awards/0.png"}
          alt='award'
          height={60}
          width={100}
          className='w-28 drop-shadow-md '
        />
        <Image
          src={"/awards/1.png"}
          alt='award'
          height={60}
          width={100}
          className='w-28 drop-shadow-md '
        />
        <Image
          src={"/awards/2.png"}
          alt='award'
          height={60}
          width={100}
          className='w-28 drop-shadow-md '
        />
        <Image
          src={"/awards/3.png"}
          alt='award'
          height={60}
          width={100}
          className='w-28 drop-shadow-md '
        />
        <Image
          src={"/awards/4.png"}
          alt='award'
          height={60}
          width={100}
          className='w-28 drop-shadow-md '
        />
        <Image
          src={"/awards/5.png"}
          alt='award'
          height={60}
          width={100}
          className='w-28 drop-shadow-md '
        />
      
      </div>
    </div>
  );
};

export default Award;
