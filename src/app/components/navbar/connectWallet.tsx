import tw from "twin.macro";
import styled from "styled-components";

const ListContainer = styled.ul`
    ${tw`
    float-left space-x-2 lg:space-x-10 md:mx-0 font-normal md:mt-2  md:flex
    `}
`;

const NavItem = styled.li `
    ${tw`
    text-xl py-2 block hover:text-purple-500 font-light hidden md:flex
    `}
`;

const CondensedNavItem = styled.li `
    --tw-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.15) !important;
    box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow) !important;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow) !important;
    ${tw`
    text-xl py-1 block p-2 pl-3 pr-3  mt-3.5 rounded-md bg-white border-gray-400 shadow hover:shadow-lg transform transition duration-100 hover:scale-x-110 active:bg-purple-800 hover:border-indigo-500 hover:bg-purple-500  border-purple-200 border hover:bg-purple-700 hover:text-white font-light hidden sm:flex md:hidden
    `}
`;

const SmashedNavItem = styled.li `
    --tw-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.15) !important;
    box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow) !important;
    box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow) !important;
    ${tw`
    text-xl py-1 block p-2 pl-3 pr-3  mt-3.5 rounded-md bg-white border-gray-400 shadow hover:shadow-lg transform transition duration-100 hover:scale-x-110 active:bg-purple-800 hover:border-indigo-500 hover:bg-purple-500  border-purple-200 border hover:bg-purple-700 hover:text-white font-light flex sm:hidden
    `}
`;

export function ConnectWallet() {
    return (
            <ListContainer>
                <NavItem>
                        <a href="">👛 &nbsp;Connect Wallet</a> 
                </NavItem>
                <CondensedNavItem>
                        <a href="">👛 &nbsp;Connect Wallet</a> 
                </CondensedNavItem>
                <SmashedNavItem>
                        <a href="">👛</a> 
                </SmashedNavItem>
            </ListContainer>
    );
}

export function WalletConnected() {
    return (
            <ListContainer>
                <NavItem>
                        <a href="">👛&nbsp; terra...2ktnp3 | <b>55.596 UST</b></a> 
                </NavItem>
                <CondensedNavItem>
                        <a href="">👛&nbsp; <b>$55.59 UST</b></a> 
                </CondensedNavItem>
                <SmashedNavItem>
                        <a href="">👛 <b>$55 UST</b></a> 
                </SmashedNavItem>
            </ListContainer>
    );
}