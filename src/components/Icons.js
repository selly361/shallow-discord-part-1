import styled from "styled-components";
import { useState, useRef } from "react";
import { AiFillGithub } from "react-icons/ai";
import { TiPlusOutline, TiHomeOutline, TiCog } from "react-icons/ti";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import DeleteAcc from "./DeleteAcc";
import CreateServer from "./CreateServer";



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


    .icon, &:hover {
        
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
        user-select: none;
    }

    .delete {
        color: red;
    }

    &:hover .icon {
        color: black;

    }
    
    &:hover .delete {
        color: red;
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


function Server( { id } ) {
    const [ remove , setDelete] = useState(false);

    const [create, setCreate] = useState(false)
    const navigate = useNavigate();

    const list = [
        <TiCog 
            onClick={() => { localStorage.getItem('name') ? setDelete(e => !e) : navigate('/home')  } }
            className='icon delete' />,

        <TiPlusOutline className={'icon'} onClick={() => setCreate(bool => !bool)} />, 

        <AiFillGithub className='icon home' onClick={() => window.location = 'https://github.com/selly361'} />,

        <FiLogOut className='icon'
        onClick={() => navigate('/')} />,

        <TiHomeOutline className='icon' />
        
        
]

    return ( 
        <>
            <Container> 
                <Icon>{list.reverse()[id]}</Icon>
            </Container>
            {remove ? <DeleteAcc setDelete={setDelete} /> : undefined}
            {create ? <CreateServer /> : undefined}
        </>
     );
}


export default Server;