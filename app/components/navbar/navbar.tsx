'use client'

import { ChangeEvent, useState } from "react";
import {BiSearch} from "react-icons/Bi"
import {IoIosNotificationsOutline} from "react-icons/Io"

interface NavbarProps {
  onSearch: (city: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onSearch
}) => {
  const [city, setCity] = useState<string>('');
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  }

  const handleSearch = () => {
    onSearch(city);
  }

  return ( 
    <div
      className="
        w-full
        top-0
        bg-white
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
            value={city}
            onChange={handleInputChange}
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
          <button onClick={handleSearch}>Search </button>
          <IoIosNotificationsOutline
            size={30}
            />

      </div>

    </div>

    
   );
}
 
export default Navbar;