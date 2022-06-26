import styled from "styled-components";
import { useNavigate } from "react-router-dom";


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

    .home {
        border-bottom: 2px solid black;
    }
`

const Warn = styled.h1`
    color: white;
    font-weight: bold;
    text-align: center;
    font-size: 1.3rem;
    color: #dc3545;
    font-weight: 900;
    
    span {
        display: block;
        font-size: 1.5rem;
        color: white;
        text-decoration: underline;
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
    border: 2px solid #dc3545;
    cursor: pointer;
    margin-left: .5rem;
    transition: 500ms color, background-color;
    border-radius: .5rem;
    fomt-weight: 500;
    
    &:hover {
        opacity: 0.8;
        background-color: #dc3545;
        ;
        color: white;
    }
    
    &:focus {
        box-shadow: 0 0 0 0.2rem rgb(220 53 69 / 50%);
    }
`

const Decline = styled.button`
    border: 2px solid #28a745;
    outline: none;
    font-size: 1.1rem;
    width: 150px;
    height: 3rem;
    background-color: white;
    color: green;
    fomt-weight: 500;
    cursor: pointer;
    margin-left: .5rem;
    transition: 500ms color, background-color;
    border-radius: .5rem;


    &:hover {
        opacity: 0.8;
        background-color: #28a745;
        color: white;
    }
`

const DeleteAcc = ( { setDelete } ) => {
    const navigate = useNavigate();
    const deleteAccount = () => {

        localStorage.clear();
        navigate('/')

 
    
    } 
    
    return (
        <Box>
            <Warn>We're sorry to see you go😥 <span>Account :  {localStorage.getItem('name')}</span></Warn>
            <div>
            <Accept onClick={deleteAccount}>Delete Account</Accept>
            <Decline onClick={() => setDelete(false) }>Cancel</Decline>
            </div>
        </Box>
    )

}
export default DeleteAcc;