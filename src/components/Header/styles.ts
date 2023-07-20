import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background: var(--base-background); 
  nav{
    display: flex;
    padding: 2rem 10rem;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    .Actions {
        display: flex; 
        justify-content: flex-end;
        gap: 0.75rem;
    }
    .Location{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
        background: var(--purple-light);
        padding: 0.5rem;
        color: var(--purple);
        border-radius: 0.375rem;
    }
    .Cart{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
        background: var(--yellow-light);
        color: var(--yellow-dark);
        padding: 0.5rem; 
        border-radius: 0.375rem;
    }
  }
`