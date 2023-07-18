'use client'

import Container from "../Container";
import {GoHome, GoPerson} from "react-icons/Go"
import {AiOutlineHeart} from "react-icons/Ai"

const NavFooter = () => {
  return ( 
    <Container>
      <hr 
        className="
         w-full
         h-0.5
         mx-auto
         mt-8
         bg-neutral-200
         border-0
        "
        >
      </hr>
        <div
          className="flex justify-between items-center mt-8 mx-8 text-3xl text-gray-400"
        >
          <GoHome
            className="hover:fill-blue-500"
          />
          <AiOutlineHeart
           className="hover:fill-blue-500"
          />
          <GoPerson
           className="hover:fill-blue-500"
          />

        </div>


    </Container>  
  );
}
 
export default NavFooter;