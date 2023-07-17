'use client'
import {BiSearch} from "react-icons/Bi"
import {IoIosNotificationsOutline} from "react-icons/Io"


const Navbar = () => {
  return ( 
    <div
      className="
        fixed
        w-full
        top-0
        z-10
        bg-white
        max-md:hidden
      "
    >
      <div 
        className="
          flex
          items-center
          p-10
          gap-2
          focus-within:text-gray-600
        ">
          <BiSearch
            size={28}
            className="absolute mx-3 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search something here..."
            className="
              pl-12
              rounded-full
              bg-gray-100
              w-full
              p-3
              outline-none
              color: #313131
              text-[20px]
              transition
            "
          >
          </input>
          <IoIosNotificationsOutline
            size={30}
            />

      </div>
    </div>
   );
}
 
export default Navbar;