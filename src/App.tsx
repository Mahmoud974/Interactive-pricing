import { useState } from "react";


const App = () => {
  const [value, setValue] = useState<number>(10)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const changeMethod = (e:React.ChangeEvent<HTMLInputElement>):void => e.currentTarget.checked ? setIsChecked(true) :  setIsChecked(false)



  return (
   <div className="flex items-center flex-col justify-center h-screen bg-[url('/img/bg-pattern.svg')] bg-no-repeat bg-auto bg-left-top ">
     <div className="flex flex-col text-center my-4 text-[EAEEFB] bg-[url('/img/pattern-circles.svg')] bg-no-repeat bg-contain md:h-28 bg-center ">
        <h1 className="font-bold text-xl md:text-2xl pt-6">Simple, traffic-based pricing</h1>
      <div className="md:flex items-center justify-center md:mt-2 ">
          <h2 className="text-xs md:mt-0 mt-3">Sign-up for our 30-day trial.</h2>
        <h2 className="text-xs mt-2 md:mt-0 md:ml-1 ml-0">No credit card required</h2>
      </div>
      </div>
    <div className=" text-gray-600 mx-auto flex flex-col  justify-center items-center ">
      {/* White Box */}
    <div className=" space-y-4 text-center justify-center  md:w-[34rem] w-auto h-[22rem] flex rounded-xl my-5 flex-col bg-white shadow-2xl px-12 md:px-0 ">
     <div className="md:flex flex-col ">
        
          <div className="md:flex hidden justify-between px-12 ">
           <h2 className=" text-xs md:text-[0.85rem] my-6 text-[hsl(14, 92%, 95%)] uppercase font-bold md:font-semibold text-gray-600">100K pageviews</h2>
        <p className=" text-3xl font-bold flex justify-center items-center mt-4 md:mt-0">${isChecked ?   value * 12 - 70  : value},00<span className="font-light text-xs ml-1 text-gray-700"> {isChecked ? '/ year' : '/ month'}</span>
        </p>
        </div>
          <h2 className="md:hidden  text-xs  text-[hsl(14, 92%, 95%)] uppercase font-bold  text-gray-600">100K pageviews</h2>
        <input className=" slider w-full my-6  h-3 rounded-lg appearance-none  range-lg  bg-gray-200 cursor-pointer md:w-10/12 md:mx-auto"  id="large-range" defaultValue={value} type="range" min={10} max={40} onChange={(e)=> setValue(Number(e.currentTarget.value))} />
        <p className="md:hidden text-3xl font-bold mb-4 ">${isChecked ?   value * 12 - 70  : value},00<span className="font-light text-xs ml-1 text-gray-700"> {isChecked ? '/ year' : '/ month'}</span>
        </p>
     </div>
        {/* Change time */}
        <div className="flex text-[0.65rem] space-x-3 items-center justify-center">
          <p>Monthly Biling</p>
      <label className="relative  items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer " onChange={(e) => changeMethod(e)}/>
        <div className="w-12 h-6 bg-[#CDD7EE] rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#40cbbd]"></div>
      </label>
        <p>Yearly Biling<span className="ml-1 font-bold text-red-400 bg-orange-200 rounded-full px-1 ">-25% <span className="md:inline-block hidden">discount</span></span></p>
        </div>
        {/* Divider */}
        <div className="bg-gray-300  h-[0.08rem] w-full  relative "> </div>
        <div>
            {/* The type price */}
       <div className="flex md:space-x-20 items-center justify-around flex-col md:flex-row  ">
        <ul className='text-[0.65rem] space-y-2 md:text-left text-center  '>
            <li><p className="font-[500] text-gray-700 "> <span className="text-[#40cbbd]">✓  </span>Unlimited websites</p></li>
            <li><p className="font-[500] text-gray-700"><span className="text-[#40cbbd]">✓  </span> 100% data ownership</p></li>
            <li><p className="font-[500] text-gray-700"><span className="text-[#40cbbd]">✓  </span> Email reports</p></li>
          </ul>
    
        <p className=" px-8 py-2 rounded-full bg-[#293356] text-[#7b89aa] md:text-white text-xs mt-4 md:mt-0 ">Start my trial</p>
    
        </div>
       </div>
      </div>

    </div>
   </div>
  )
}

export default App