import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import AloudLogoImg from "../../../assets/images/Aloud@4-stroke.png";
import ALogoImg from "../../../assets/images/A.png";

const LogoContainer = styled.div`
    ${tw`
        items-center
    `};
`;


const FullLogoImage = styled.div`
    ${tw`w-36 transition-all transform duration-100 hover:scale-125 cursor-pointer hidden xs:flex`};
`;
const ALogoImage = styled.div`
    ${tw`w-14 pt-1 transition-all transform duration-100 hover:scale-125 cursor-pointer flex xs:hidden`};
`;

export function Logo() {
    return (
        <LogoContainer>
            <a href="">
                <FullLogoImage>
                    <img src={AloudLogoImg} />
                </FullLogoImage>
                <ALogoImage>
                    <img src={ALogoImg} />
                </ALogoImage>
            </a>
        </LogoContainer>
    );
}