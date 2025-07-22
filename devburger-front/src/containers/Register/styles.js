import styled from 'styled-components'
import BackgroundLogin from '../../assets/background-login.svg'
import Background from '../../assets/background.svg'

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`
export const LeftContainer = styled.div`
    background: url('${BackgroundLogin}');
    background-size: cover;
    background-position: center;

    height: 100%;
    width: 100%;
    max-width: 50%;

    display: flex;
    justify-content:center;
    align-items:center;

    img {
        width: 80%;
    }
`
export const RightContainer = styled.div`
    background: url('${Background}');
    background-size: cover;
    background-position:center;
    background-color: #1e1e1e;

    height: 100%;
    width: 100%;
    max-width: 50%;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    p {
        color: #fff;
        font-weight: 700;
        font-size: 18px;
    }
    
    a {
        text-decoration: underline;
    }
`
export const Title = styled.h2`
    color: #9758A6;
    font-size: 40px;
    font-family: 'Road Rage', sans-serif;
    font-weight: 400;
`
export const Form = styled.form`
    width: 100%;
    max-width: 400px;

    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;

   
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

     label {
        color: #fff;
        font-weight: 600;
        font-size: 18px;
    }

    input {
        width: 100%;
        height:52px;
        border-radius: 5px;
        border: none;
        padding: 0 16px;
    }

    p {
    font-size: 14px;
    line-height: 80%;
    color: #cf3057;
    font-weight: 600;
    height: 10px;
   }
`
