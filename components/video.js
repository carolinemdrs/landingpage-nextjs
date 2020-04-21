import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const BackGround = styled.div`
    background-color: #f1f8e9;
    display:flex;
    justify-content:center;
    border-top-right-radius: 30%;
    border-top-left-radius: 20%;
`

const ReactPlayerStyled = styled(ReactPlayer)`
    filter: brightness(40%);
`
const TextVideo = styled.p`
  align-items:center;
  display:flex;
  align-content:center;
  font-size:20px;
  margin:5px;
`

const Video = () => {
	return (
		<div>
			<BackGround>
                <TextVideo>Que tal conferir um pouco do nosso dia-a-dia?</TextVideo>
                    <ReactPlayerStyled
                        className='react-player'
                        muted
                        playing='true'
                        url='https://www.youtube.com/watch?v=tPfLQAq6aSI'
                        width='50%'
                        heigh= '100vh'
                    />
                <TextVideo>Nos Acompanhe nas redes sociais e tire todas suas dúvidas ;)</TextVideo>
			</BackGround>
		</div>
	)
}

export default Video