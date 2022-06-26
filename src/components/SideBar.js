import styled from "styled-components";
import Server from "./Server";

const SideBarContainer = styled.aside
    `height: 99%;
    width: 80px;
    background-color: #202225;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 1.2rem;
    padding-top: .45rem;
   
`


function SideBar() {
    return ( 
        <SideBarContainer>
            <Server id={0} />
            <Server id={1} />
            <Server id={2} />
            <Server id={3} />
  

        </SideBarContainer>

     );
}

export default SideBar;