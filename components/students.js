import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';

const Student = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const StudenteContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Main = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(4),
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

export default function Students() {
  const classes = useStyles();

  return (
    <Main>      
      Veja o que alunos e ex alunos estão falando
      <StudenteContainer className={classes.root}>
        <Student>
          <Avatar alt="aluna" src="/rose.jpeg" className={classes.large} />
          <p>"Curso Incrível!"</p>
        </Student>
        <Student>
          <Avatar alt="aluna" src="/rose.jpeg" className={classes.large} />
          <p>"Curso Incrível!"</p>
        </Student>
        <Student>
          <Avatar alt="aluna" src="/rose.jpeg" className={classes.large} />
          <p>"Curso Incrível!"</p>
        </Student>
        <Student>
          <Avatar alt="aluna" src="/rose.jpeg" className={classes.large} />
          <p>"Curso Incrível!"</p>
        </Student>
      </StudenteContainer>
    </Main>
  );
}