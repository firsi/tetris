import styled from 'styled-components';
import bg_img from '../../img/bg.png';

export const StyledTetrisWrapper = styled.div`
    
    width: 100vw;
    height: 100vh;
    background-image: url(${bg_img}) ;
    background-size: cover;
    overflow: hidden;

`;

export const StyledTetris = styled.div`

    display: flex;
    align-items: flex-start;
    max-width: 900px;
    padding: 40px;
    margin: 0 auto;


    aside {
        width: 100%;
        max-width: 200px;
        padding: 0 20px;
        display: block;
    }
`;