import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
	background-color: #fff;
	display: flex;
	align-items: center;
	padding:20px;
	justify-content:space-between;
	color:#388e3c;
	font-size:12px;
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
	align-items: center;
	display:flex;
	justify-content:center;
	font-size:30px;
`
 const Header = () => {
	return (
		<div>
			<Main>
				<Img src="./logo.png" alt="logo" />
				<h1>Técnico em enfermagem</h1>
			</Main>
			<BackGround>
				<h3>INICIE SUA JORNADA COMO TÉCNICO DA SAÚDE</h3>
			</BackGround>
		</div>
	)
}

export default Header
