import React from 'react';
import styled from 'styled-components';

const MainContainer  = styled.div`
    background-color:#1C2452;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const IconeSM = styled.img `
    background-color: #fff;
    border-radius: 50%;
    height: 10vh;
    padding:8px;
    margin:5px;
`
 const Footer = () => {
	return (
		<MainContainer>
            <a href="#"> <IconeSM src='./fb.png'/> </a >
            <a href="#"><IconeSM src='./insta.svg'  /> </a >
            <a href="#"><IconeSM src='./youtube.svg'  /> </a >
            <a href="#"><IconeSM src='./medium.svg' /> </a >
            <a href="#"><IconeSM src='./whats.svg'  /> </a >
        </MainContainer>
	)
}

export default Footer