import { HeaderContainer } from "./styles";
import  logo  from "../../assets/logo.svg";
import { HiLocationMarker  } from "react-icons/hi";
import { FaShoppingCart  } from "react-icons/fa";
export function Header(){
    return(
        <HeaderContainer>
            <nav>
                <img src={logo}  />
                <div className="Actions">
                <div className="Location">
                   <HiLocationMarker /> <p>Belo Horizonte, MG</p>
                </div>
                <div className="Cart">
                    <FaShoppingCart/> Cariinho
                </div>
            </div>
            </nav>
            
        </HeaderContainer>
    )
}