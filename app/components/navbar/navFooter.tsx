import Container from "../Container";
import {BiSearch} from "react-icons/Bi"

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
        className="
        
        "
      >
        <BiSearch/> 
      </div>
    </Container>  
  );
}
 
export default NavFooter;