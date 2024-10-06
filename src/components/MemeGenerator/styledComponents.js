// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;
  @media screen and (min-width: 768px){
    width: 80%;
    max-width: 1110px;
  }
`
export const Heading = styled.h1`
  font-family: Open Sans;
  font-weight: 600;
  text-align: center;
  font-size: 24px;
  color: #35469c;
  @media screen and (min-width: 768px){
    text-align: left;
    font-size: 48px;
  }
`

export const FormAndMemeContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  padding: 20px;
  @media screen and (min-width: 768px){
    flex-direction: row;
  }
`

export const FormMemeContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px){
    width: 40%;
  }
`
export const Label = styled.label`
  font-family: Open Sans;
  font-weight: 500;
  font-size: 14px;
  color: #7e858e;
  line-height: 1.2;
`

export const Input = styled.input`
  font-family: Open Sans;
  font-size: 14px;
  color: #5a7184;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  outline: none;
`

export const Select = styled.select`
  font-family: Open Sans;
  font-size: 14px;
  color: #1e293b;
  background-color: #ffffff;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  outline: none;
`

export const Option = styled.option`
  font-size: 16px;
  padding: 10px;
`

export const Button = styled.button`
  font-family: Open Sans;
  font-size: 14px;
  font-weight: 600;
  background-color: #0b69ff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 15px;
  margin-top: 5px;
  margin-bottom: 10px;
  outline: none;
  max-width: 200px;
  min-width: 50px;
  cursor: pointer;
`

export const MemeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  padding: 10px;
  margin-bottom: 25px;
  @media screen and (min-width: 768px){
    width: 45%
  }
`

export const Text = styled.p`
  font-family: Open Sans;
  font-weight: 600;
  font-size: ${props => props.activeFontSizeOptionId}px;
  color: #ffffff;
`
