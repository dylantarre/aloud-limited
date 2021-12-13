import tw from "twin.macro";
import styled from "styled-components";


const ListContainer = styled.ul`
    ${tw`
    float-left space-x-2 md:mx-0 font-normal md:mt-2 flex
    `}
`;

const NavItem = styled.li `
    ${tw`
        text-xl py-2 pr-6 block hover:text-purple-500 font-light hidden md:flex
    `}
`;
const CondensedNavItem = styled.li `
    --tw-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.15) !important;
    box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow) !important;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow) !important;
    
    ${tw`
        text-xl py-1 p-2 pl-3 pr-3 block mt-3.5 rounded-md bg-white border-gray-400 shadow hover:shadow-lg transform transition duration-100 hover:scale-x-110 active:bg-purple-800 hover:border-indigo-500 hover:bg-purple-500  border-purple-200 border hover:bg-purple-700 hover:font-medium flex md:hidden
    `}
`;

export function NavItems() {
    return (
        <ListContainer>
            <NavItem>
                <a href="">💧 &nbsp;Drops</a>
            </NavItem>
            <NavItem>
                <a href="">🦄 &nbsp;NFTs</a>
            </NavItem>
            <NavItem>
                <a href="">👕 &nbsp;Shirts</a>
            </NavItem>
            <CondensedNavItem>
                <a href="">💧</a>
            </CondensedNavItem>
            <CondensedNavItem>
                <a href="">🦄</a>
            </CondensedNavItem>
            <CondensedNavItem>
                <a href="">👕</a>
            </CondensedNavItem>
        </ListContainer>
    );


}