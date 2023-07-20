import { BuyDiv, CoffeCardStyleDiv, CoffeTags } from "./styles";
import {IoMdRemove,IoMdAdd} from "react-icons/io"
import  {BsCartFill} from   "react-icons/bs"
import Image from "../../assets/Image.png"
export function CoffeCard()
{
    return(
        <CoffeCardStyleDiv>
        <img src={Image} className="CoffeImage"/>
        <CoffeTags>
            <div>
                TRADICIONAL
            </div>
            <div>
                forte
            </div>
        </CoffeTags>
        <p className="title">Café com leite</p>
        <p className="subtitle">Meio a meio de expresso tradicional com leite vaporizado</p>
        <BuyDiv>
            <div><p>R$</p><p>9,90</p></div>
            <div>
                <div>
                    <button><IoMdRemove color="#8047F8"/></button>
                         1 
                    <button><IoMdAdd color="#8047F8"/></button>
                </div>
                <button><BsCartFill size={20}/></button>
            </div>
        </BuyDiv>
        </CoffeCardStyleDiv>
    )    
}