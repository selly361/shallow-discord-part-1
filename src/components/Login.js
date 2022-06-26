import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import background from '../assets/images/background.png';
import { Link, useNavigate  } from 'react-router-dom';


const colors =  {
    backgroundColor: '#36393f',
    blue: '#5865f2',
    cyan: '#00AFF4',
    lightGrey: '#b9bbbe',
    darkGrey: '#72767d'
}

const Body = styled.div`
    height: 100vh;
    width: 100vw;
    background: url(${background});
    background-size: cover;
    display: grid;
    place-items: center;

`

const LoginContainer = styled.div`
    background-color: ${colors.backgroundColor};
    height: 350px;
    width: 600px;
    border-radius: .4rem;
    box-shadow: 0 1px ${colors.blue};
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 2rem;


    a, a:hover, a:focus, a:active {
        text-decoration: none;
        color: inherit;
        }

    .Login {
        height: 3.5rem;
        width: 50%;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        background-color: ${colors.blue};
        color: white;
        border-radius: .5rem;
        font-weight: bold;
        text-align: center;
        
        &:hover {
            opacity: 0.8;
            color: white;
        }
    
    }
        
`



const Username = styled.input`
    font-size: 2rem;
    width: 50%;
    padding: .5rem;
    height: 2rem;
    outline: none;
    border-radius: .4rem;
    border: none;
    text-align: center;
`
const Welcome = styled.h1`
    color: white;
    text-align: center;
`
const Submit = styled.button`
    height: 3.5rem;
    width: 50%;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    background-color: ${colors.blue};
    color: white;
    border-radius: .5rem;
    font-weight: bold;
    
    &:hover {
        opacity: 0.8;
    }
`


function Login() {

    const [ name, setName ] = useState(localStorage.getItem('name'))
    const navigate = useNavigate()




    const nameElement = useRef()
    const saveName = () => {
        if(nameElement.current.value.trim()){
            localStorage.setItem('name', nameElement.current.value);
            navigate('/home')

    }}


    return ( 
        <Body>
            <LoginContainer>
                <Welcome>{localStorage.getItem('name') ? 'Welcome Back ' + localStorage.getItem('name') + '!' : 'Hello, Enter a Username to get started!👇'}</Welcome>
                {localStorage.getItem('name') ? '' : <Username 
                    ref={nameElement}
                    type='text' placeholder='Your Username' maxLength={12} required/>}
                {
                localStorage.getItem('name') ? 
                <Link className='Login' to='/home'>Login</Link>
                : 
               <Submit  onClick={saveName} type='button'>Login</Submit>
                
                }

            </LoginContainer>
        </Body>
     );
}

export default Login;