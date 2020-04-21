import React from 'react';
//import ReactPlayer from 'react-player'
import styled from 'styled-components';


const Main = styled.div`
	background-color: #fff;
	display: flex;
	align-items: center;
	padding:20px;
	justify-content:space-between;
`

const Img = styled.img`
	heigh:2vh;
	width: 10%;
`

const BackGround = styled.div`
	background-image: url("./dna.jpg");
	width: 100%;
	height: 100vh;
	filter: brightness(40%);
	color: #fff;
`
 const Header = () => {
	return (
		<div>
			<Main>
				<Img src="./logo.png" alt="logo" />
				<h4>Técnico em enfermagem</h4>
			</Main>
			<BackGround>
				<h3>INICIE SUA JORNADA COMO TÉCNICO DA SAÚDE</h3>
			</BackGround>
		</div>
	)
}

export default Header