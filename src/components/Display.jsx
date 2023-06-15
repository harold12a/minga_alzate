import React from "react";
import { RiCloseFill } from "react-icons/ri";
import { Link as Anchor } from "react-router-dom";

const Display = ({ options, show, setShow }) => {
  //   let options = [
  //     { to: '/', title: 'Home'},
  //     { to: '/register', title: 'Register'},
  //     { to: '/signin', title: 'Sign In'}
  // ]

  return (
    <>
      <nav className="bg-blue-600 absolute z-20 top-0 left-0 h-full w-full  xl:w-[300px] flex flex-col  ">
        <div className="text-white flex justify-around mt-2 ">
        
          <img src="../../src/assets/images/Rectangle 10.svg" alt="" />
          <div className="pr-[10%] md:pr-[50%] xl:pr-[2%]">
            <h1>HAROLD ALZATE AYALA</h1>
            <h2>haroldalzate99@gmail.com</h2>
          </div>
          <RiCloseFill
          className="w-[5vh] h-[5vh]"
          onClick={() => setShow(!show)}
        />
        </div>
        
        {/* <ul className=" flex flex-col justify-center  py-[10%] px-6">
          <li className="mb-2" >
           {options?.map((each, index) => <p key={index} className="text-white text-2xl hover:bg-white  hover:text-blue-600 rounded-lg pr-[72%] pt-2 pb-2 pl-4 md:pr-[75%] xl:pr-[56%]">{each.title}</p>)} 
          </li>
        </ul> */}
        {options?.map((each, index) => <Anchor key={index} to={each.to} className="text-white text-2xl hover:bg-white  hover:text-blue-600 rounded-lg pr-[72%] pt-2 pb-2 pl-4 md:pr-[75%] xl:pr-[56%] mt-[3px]">{each.title}</Anchor>)}
      </nav>
    </>
  );
};
export default Display;
