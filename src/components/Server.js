import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import { AiFillGithub } from "react-icons/ai";
import { TiPlusOutline, TiHomeOutline, TiCog } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

const Icon = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    transition: 200ms border-radius, background, opacity;
    background: #36393f;
    margin-top: 2rem;
    margin: auto;
    place-items: center;
    display: grid;


    a, a:hover, a:focus, a:active {
        text-decoration: none;
        color: inherit;
    } 


    &:hover {
        
        border-radius: 25%;
        cursor: pointer;
        opacity: 0.8;
        background: #37ff77;
    }

    .icon {
        height: 70%;
        width: 70%;
        color: #37ff77;
        transition: 200ms background, color;
        background-color: transparent;
    }

    &:hover .icon {
        opacity: 0.8;
        color: black;

    }
    

`

const Container = styled.div`
    display: grid;
    width: 100%;
    position: relative;



    &::before {
        content: '';
        position: absolute;
        inset: 0;
        margin: auto 0;
        height: 20px;
        width: 4px;
        border-radius: 40%;
        background-color: white;
        transition: 300ms height;
    }


    &:hover::before {
        height: 40px;
    }
`
const Box = styled.div`
    height: 300px;
    width: 330px;
    margin: auto;
    background-color: #202225;
    inset: 0;
    position: absolute;
    box-shadow: 0 0 5px black;
    display: grid;
    padding: 1rem;
    border-radius: 1rem;
`

const Warn = styled.h1`
    color: white;
    font-weight: bold;
    text-align: center;
    font-size: 1.2rem;
    span {
        color: red;
        font-weight: 900;
        background-color: white;
        padding: .3rem;
        display: block;
        width: max-content;
        margin: 1rem auto;
        border-radius: .3rem;
    }
`

const Accept = styled.button`
    border: none;
    outline: none;
    font-size: 1.1rem;
    width: 150px;
    height: 3rem;
    background-color: white;
    color: red;
    border: 3px solid red;
    font-weight: bold;
    cursor: pointer;
    margin-left: .5rem;
    transition: 500ms color, background-color;
    border-radius: .5rem;
    
    &:hover {
        opacity: 0.8;
        background-color: red;
        color: white;
    }
    
`

const Decline = styled.button`
    border: 3px solid green;
    outline: none;
    font-size: 1.1rem;
    width: 150px;
    height: 3rem;
    background-color: white;
    color: green;
    font-weight: bold;
    cursor: pointer;
    margin-left: .5rem;
    transition: 500ms color, background-color;
    border-radius: .5rem;


    &:hover {
        opacity: 0.8;
        background-color: green;
        color: white;
    }
`

function Server( { id } ) {
    const [ remove , setDelete] = useState(false)
    const navigate = useNavigate();

    const list = [
        <TiCog 
            onClick={() => { localStorage.getItem('name') ? setDelete(e => !e) : navigate('/home')  } }
            className='icon' />,

        <TiPlusOutline className={'icon'} />, 

        <TiHomeOutline className='icon'
        onClick={() => navigate('/')} />,

        <AiFillGithub className='icon' onClick={() => window.location = 'https://github.com/selly361'} />,
        
]

    return ( 
        <>
            <Container>
                <Icon>{list.reverse()[id]}</Icon>
            </Container>
            {remove ? <Delete setDelete={setDelete} /> : undefined}
        </>
     );
}

const Delete = ( { setDelete } ) => {
    const navigate = useNavigate();
    const deleteAccount = () => {
        if(localStorage.getItem('name')){
        localStorage.clear();
        navigate('/')}

 
    
    } 
    
    return (
        <Box>
            <Warn>Are you sure, you want to delete account <span>{localStorage.getItem('name')}</span></Warn>
            <div>
            <Accept onClick={deleteAccount}>Delete Account</Accept>
            <Decline onClick={() => setDelete(false) }>Cancel</Decline>
            </div>
        </Box>
    )

}
export default Server;