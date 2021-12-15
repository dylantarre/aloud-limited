import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import tw from "twin.macro";
import { INFT } from "../../../typings/nft";
import { NFT } from "../../components/nft";
import { SCREENS } from "../../responsive";
import nftService from "../../services/nftService";

const LatestNFTsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-col
        items-center
        justify-center
        pr-4
        pl-4 
        md:pr-0
        md:pl-0  

    `};
`

const Title = styled.h2`
    ${tw`
       text-3xl 
       lg:text-5xl 
       text-black
       font-extrabold
    `};
`;

const NFTsContainer = styled.div`
    ${tw`
        w-full
        flex
        flex-wrap
        justify-center
        mt-7
        md:mt-10 
    `};
`;

export function LatestNFTS () {

    const [current, setCurrent] = useState(0);
    const isMobile=useMediaQuery({ maxWidth: SCREENS.sm});

    const fetchNFTs = async () =>  {
        const nfts = await nftService.getNFTs().catch((err) => {

            console.log("Error: ", err);
        });
        console.log("NFTs: ", nfts)

    }

    const testNFT3: INFT = {    
        NFTSrc: "https://aloud.limited/assets/Simple-Black-Pair-1000.png",
        shirtSrc: "../../../assets/images/Tall-Unisex.png",
        swatchSrc: "../../../assets/images/swatch-black.png",
        patternTitle: "Simple",
        color: "Black",
        status: "Minted",
        proverb: "Most things are actually a lot more simple than your realize. 🤔  What seems like chaos can be reduced to a simple pattern if you look deeply. Once you see it all of the chaos makes sense.",
        forsale: "Yes",
        owner: "Dylan Tarre",
        price: "$50",
        dropDate: "02/22/22"
    }

    const testNFT2: INFT = {    
        NFTSrc: "https://aloud.limited/assets/Simple-Charcoal-Pair-1000.png",
        shirtSrc: "../../../assets/images/Tall-Unisex.png",
        swatchSrc: "../../../assets/images/swatch-charcoal.png",
        patternTitle: "Simple",
        color: "Charcoal",
        status: "Printed",
        proverb: "Most things are actually a lot more simple than your realize. 🤔  What seems like chaos can be reduced to a simple pattern if you look deeply. Once you see it all of the chaos makes sense.",
        forsale: "No",
        owner: "Dylan Tarre",
        price: "N/A",
        dropDate: "02/22/22"
    }

    const testNFT: INFT = {    
        NFTSrc: "https://aloud.limited/assets/Simple-Charcoal-Pair-1000.png",
        shirtSrc: "../../../assets/images/Tall-Unisex.png",
        swatchSrc: "../../../assets/images/swatch-charcoal.png",
        patternTitle: "Simple",
        color: "Charcoal",
        status: "Printed",
        proverb: "Most things are actually a lot more simple than your realize. 🤔  What seems like chaos can be reduced to a simple pattern if you look deeply. Once you see it all of the chaos makes sense.",
        forsale: "No",
        owner: "Dylan Tarre",
        price: "N/A",
        dropDate: "02/22/22"
    };

    useEffect(() => {
        fetchNFTs();
    }, []); 


    return <LatestNFTsContainer>
        <Title>Latest NFTs</Title>
        <NFTsContainer>
            
            <NFT {...testNFT2} />
            <NFT {...testNFT2} />
            <NFT {...testNFT3} />
        </NFTsContainer>
    </LatestNFTsContainer>
}