import { CoffeCard } from "../CoffeCard";
import { MainDiv } from "./styles";

export function Coffes(){
    return (
        <MainDiv>
        <h1>Nossos cafés</h1>
        <div className="items">
            <CoffeCard/>
            <CoffeCard/>
            <CoffeCard/>
            <CoffeCard/>
            <CoffeCard/>
            <CoffeCard/>
            <CoffeCard/>
            <CoffeCard/>
            <CoffeCard/>
            <CoffeCard/>
            <CoffeCard/>
            <CoffeCard/>
        </div>
        </MainDiv>
    )
    
}