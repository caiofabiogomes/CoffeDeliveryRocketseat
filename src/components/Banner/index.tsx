import { BackgroundDiv, BannerDiv, ItemsDiv,ItemBanner } from "./styles";
import IconCart from "../../assets/IconCart.svg"
import IconBox from "../../assets/IconBox.svg"
import IconClock from "../../assets/IconClock.svg"
import IconCoffe from "../../assets/IconCoffe.svg"
import Coffe from "../../assets/Coffe.svg"
import { FaShoppingCart  } from "react-icons/fa";
import{AiFillCodeSandboxCircle} from "react-icons/ai"
export function Banner(){
    return (
    <BannerDiv>
        <ItemsDiv>
            <div className="texts">
            <h2>Encontre o café perfeito 
            para qualquer hora do dia</h2>
            <p className="paragraph-subtitle">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </div>
            <div className="icons">
                <ItemBanner color="--yellow-dark">
                    <div>
                        <img src={IconCart} />  
                    </div>
                   <p>Compra simples e segura</p>
                </ItemBanner>
                <ItemBanner color="--base-text">
                    <div>
                        <img src={IconBox} />  
                    </div>
                    <p>Embalagem mantém o café intacto</p>
                </ItemBanner>
                <ItemBanner color="--yellow">
                    <div>
                        <img src={IconClock} />  
                    </div>
                      <p>Entrega rápida e rastreada</p>
                </ItemBanner>
                <ItemBanner color="--purple">
                    <div>
                        <img src={IconCoffe} />  
                    </div>
                     <p>O café chega fresquinho até você</p>
                </ItemBanner>
            </div>
            
        </ItemsDiv>
        <BackgroundDiv>
            <img src={Coffe} />
        </BackgroundDiv>
    </BannerDiv>
    )
}