import Image from "next/image"

const Award = () =>{
  return(
    <div className= {`bg-[#f6f8fa] relative h-[50vh] `}>
      <div className="relative">
        <Image src={"/gifs/awards-gif.gif"} alt="award" height={10} width={10} className="w-[30vw] absolute left-0"/>
        <Image src={"/gifs/awardCircle.svg"} alt="award " height={10} width={10} className="w-[30vw] right-0 absolute"/>
      </div>
    </div>
  )
}


export default Award