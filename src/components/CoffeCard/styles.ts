import styled from "styled-components"

export const CoffeCardStyleDiv = styled.div`
width: 16rem;
height: 19.375rem;
flex-shrink: 0;
border-radius: 0.375rem 2.25rem;
background: var(--base-card);
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
.CoffeImage{
    margin-top: -1rem;
}
.title{
    color: var(--base-subtitle, #403937);
    text-align: center; 
    font-family: "Baloo 2";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
}
.subtitle{
    width: 13.5rem;
    color: var(--base-label);
    text-align: center;
    font-family: "Roboto";
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
}
`;
export const BuyDiv = styled.div`
display: flex;
width: 13rem;
justify-content: space-between;
align-items: center;
margin-bottom: 1.25rem;
div:first-child{
    display: flex;
    align-items: center;
    gap: 0.25rem;
    p:first-child{
color: var(--base-text);
text-align: right;
/* Text/Regular S */
font-family: "Roboto";
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: 130%
}
p:last-child{
color: var(--base-text);
/* Title/Title M */
font-family: "Baloo 2";
font-size: 1.5rem;
font-style: normal;
font-weight: 800;
line-height: 130%;
}

}
div:last-child{
    display: flex;
    div{
        display: flex;
        height: 2.375rem;
        padding: 0.5rem;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
        button{
            border: none;
            background: transparent;
            height: 100%;
            display: flex;
            align-items: center;
        }
    }
    button{
        display: flex;
        padding: 0.5rem;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        border-radius: 0.375rem;
        background: var(--purple-dark);
        border: none;
        color: var(--white);
    }
}
`;

export const CoffeTags = styled.div`
display: inline-flex;
justify-content: center;
align-items: center;
gap: 0.25rem;
div{
    display: flex;
    padding: 0.25rem 0.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 6.25rem;
    background: var(--yellow-light);
    color: var(--yellow-dark); 
    font-family: "Roboto";
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;  
    text-transform: uppercase;
}
`;