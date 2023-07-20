 
import { Banner } from "../components/Banner/index.tsx";
import { Header } from "../components/Header/index.tsx";
import { Coffes } from "../components/Coffes/index.tsx";
export function Home(){
    return(
        <>
        <Header/>
        <Banner/> 
        <Coffes/>
        </>
    )
}