import styled from "styled-components";
import Icons from "./Icons";

const SideBarContainer = styled.aside
    `
    width: 80px;
    background-color: #202225;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 1.2rem;
    padding-top: .45rem;
    z-index: 1;
   
`


function SideBar() {
    return ( 
        <SideBarContainer>
            <Icons id={0} />
            <Icons id={1} />
            <Icons id={2} />
            <Icons id={3} />
            <Icons id={4} />

        </SideBarContainer>

     );
}

export default SideBar;