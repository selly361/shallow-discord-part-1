import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import styled from "styled-components";
import Header from "./Header";
import { useNavigate } from 'react-router-dom';


const Body = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: #36393f;
`


function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem('name')){
            navigate('/')
        }
    })

    return ( 
        <Body>
            <Header />
            <SideBar />
        </Body>
     );
}

export default Home;