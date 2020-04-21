import React from "react";
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const InputsStyled = styled.div`
  display:flex;
  flex-direction:column;
`;

const RadioButtonStyle = styled.div`
  display: flex;
  flex-direction:row;
`;

const FormStyled = styled.div`
  display: flex;
  flex-direction:row;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  padding:10;
  align-items:center;
  align-content:center;
`;
const Img = styled.img`
  height:50vh;
  margin-right:20px;
`;
const TextEbook = styled.div`
  display:flex;
  align-items:center;
  padding:50px
`;
const Form = styled.form`
  padding:50px
`;

class Ebook extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
         name: '',
         email:'',
         age:'',
         sex:'',
         region:'',
      };
    }

    onChangeInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }
    
    onChangeRadioButton = (e) =>{
        this.setState({
            sex: e.target.value
        });
      }

    render() {
        const {name, email, age, region} = this.state
        
      return (
        <Main>
          <TextEbook>
            <Img src="./ebook.png" alt="ebook" />
              <p>Aproveite a oportunidade para baixar o ebook com excelentes dicas de como começar seus
                estudos em um curso técnico em enfermagem! quais as principais bibliografias? práticas?
                Entrevistas com profissionais da área etc etc
              </p>
            </TextEbook>
        
        <Form> 
          <InputsStyled>
            <TextField 
                type ='text'
                variant ="outlined"
                required
                name ='name'
                label ='Nome'
                value = {name}
                onChange = {this.onChangeInput}
             />
            <TextField 
                type ='email'
                variant ="outlined"
                required
                name ='email'
                label ='Email'
                value = {email}
                onChange = {this.onChangeInput}
              />
            <TextField 
                type ='number'
                variant ="outlined"
                required
                name ='age'
                label ='Idade'
                value = {age}
                onChange = {this.onChangeInput}
              />
            <TextField 
                type ='text'
                variant ="outlined"
                required
                name ='region'
                label ='Cidade'
                value = {region}
                onChange = {this.onChangeInput}
              />
            </InputsStyled>

            <FormStyled >
              <h3> Sexo:  </h3>
              <RadioButtonStyle>
                  <FormControlLabel
                  value = 'Fem'  
                  control = {<Radio />} 
                  label = 'Fem' 
                  type = 'radio'
                  checked = {this.state.sex === 'Fem'}
                  onChange = {this.onChangeRadioButton} />
              </RadioButtonStyle>

              <RadioButtonStyle>
                  <FormControlLabel 
                  value = 'Masc'  
                  control = {<Radio />}
                  label = 'Masc'
                  type = 'radio'
                  checked = {this.state.sex === 'Masc'}
                  onChange = {this.onChangeRadioButton} />
              </RadioButtonStyle>
            </FormStyled>
            <Button type='submit' color="secondary">Receber meu Ebook!</Button>
        </Form>   
       
        
    </Main>
      );
    } 
  }
  export default Ebook;