import styled from "styled-components"
import Background from "../../assets/Background.svg"
import { FaShoppingCart } from "react-icons/fa"


export const BannerDiv = styled.div`
background-image: url(${Background}); 
height: 34rem;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-shrink: 0; 
`
export const ItemsDiv = styled.div`  
.icons{ 
        margin-top: 4rem;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        width: 36rem;
        height: 5.25rem;
        flex-shrink: 0;
        
    } 
height: 22.5rem;
display: flex;
flex-direction: column; 
align-items: center;
flex: 6;
color: var(--base-title);
.texts{
    width: 36.75rem;
    h2{
    font-size: 3rem;
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 800;
    line-height: 130%; /* 3.9rem */

    
}

p{ 
margin-top: 1rem;
font-family: "Roboto";
font-size: 1.25rem;
font-style: normal;
font-weight: 400;
line-height: 130%; 
}
}

`

export const ItemBanner = styled.div`
    display: flex;
    width: 18rem;
    align-items: center;
    gap: 0.75rem; 
    font-family: "Roboto" ;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    p{
        color: var(--base-text); 
    }
    div{
        display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 62.5rem;
    background: var(${(props) => props.color});
    }
`

export const BackgroundDiv = styled.div` 
height: 34rem;   
display: flex; 
flex-direction: column; 
flex: 6; 
justify-content: center;
align-items: flex-start;
img{
    height: 22rem;
}

`
 