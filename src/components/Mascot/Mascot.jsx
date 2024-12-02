import Image from "next/image";
import styles from "./Mascot.module.css";

const Mascot = () => {
  return (
    <div className='px-10 w-full ssm:px-15 s_lg:px-40 flex flex-col s_lg:flex-row justify-between items-center gap-2'>
      <div className="w-full ssm:w-[80%]">
        <Image
          src='/gifs/cycle.gif'
          alt=''
          height={100}
          width={1000}
          className='w-full'
        />
      </div>
      <div className={`${styles.card} w-full ssm:w-1/2
      `}>
        <div className={styles.card_inner}>
          <div className={styles.card_front}>
            <h1 className='text-[4rem] inline-block '>ACODIE</h1>
            <h2 className='text-[2rem] inline-block tracking-widest'>
              OUR MASCOT
            </h2>
          </div>
          <div className={styles.card_back}>
            <p className='text-gray-400 text-base tracking-wide'>
              We love illustrations and Acodie, our mascot, is a cool showpiece
              of our creativity. The theme of this website is based on Acodie,
              wherein you could find Acodie in every page of this site - in
              various styles and emotions!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mascot;
