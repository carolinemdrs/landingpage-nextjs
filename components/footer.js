import React from 'react';
import styled from 'styled-components';

const MainContainer  = styled.footer`
    background-color:#1C2452;
    height: 12vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const IconeSM = styled.img `
    background-color: #fff;
    border-radius: 50%;
    height: 6vh;
    padding:8px;
    margin:5px;
`
 const Footer = () => {
	return (
		<MainContainer>
            <a href="#"> <IconeSM src='./fb.png' alt="icone rede social face"/> </a >
            <a href="#"><IconeSM src='./insta.svg' alt="icone rede social insta"  /> </a >
            <a href="#"><IconeSM src='./youtube.svg' alt="icone rede social youtube"  /> </a >
            <a href="#"><IconeSM src='./medium.svg' alt="icone rede social medium" /> </a >
            <a href="#"><IconeSM src='./whats.svg' alt="icone rede social whats"  /> </a >
        </MainContainer>
	)
}

export default Footer