import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar";
import { LatestNFTS } from "./latestNFTs";
import { ThreeStep } from "./threeStep";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
    ${tw`
      flex
      flex-col
      w-full
      h-full
    `}
`;

export function HomePage() {
    return (
        <PageContainer>
           <Navbar />
           <TopSection />
           <LatestNFTS />
        </PageContainer>
    );
}