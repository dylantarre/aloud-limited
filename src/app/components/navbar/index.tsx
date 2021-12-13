import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../../components/logo";
import { NavItems } from "./navItems";
import { ConnectWallet, WalletConnected } from "./connectWallet";

const NavbarContainer = styled.div`
    min-height: 64px;
    ${tw`
      w-full
      max-w-screen-2xl
      flex
      flex-row
      items-center
      lg:pl-12
      lg:pr-12
      pr-3
      pl-3
      justify-between
    `};
`;
const LogoContainer = styled.div`
    ${tw`
    `};
`;

export function Navbar() {
    return (
        <NavbarContainer>
            <NavItems />
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <ConnectWallet />
            {/* <WalletConnected /> */}
        </NavbarContainer>
    );
}