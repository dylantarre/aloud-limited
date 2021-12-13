import styled from "styled-components";
import tw from "twin.macro";
import { INFT } from "../../../typings/nft";

interface INFTProps extends INFT {
}

const NFTLink = styled.a`

     ${tw`
        bg-white m-4 border-gray-400 shadow hover:shadow-lg rounded-xl transform transition hover:scale-105 duration-200
    `}
`;

const NFTContainer = styled.div`
max-width: 20em;
    ${tw`
        rounded-t-xl overflow-hidden
    `}
`;

const NFTInfo = styled.div`
    ${tw`
          container flex justify-between mx-auto rounded-xl
    `}
`;

const NFTArticle = styled.div`
    ${tw`
        w-full p-4
    `}
`;

const NFTThumbnail = styled.div`
     ${tw`
        transform transition duration-200 hover:scale-110
    `}
`;

const NFTName = styled.h3`
    ${tw`
         text-2xl font-extralight
    `}
`;

const PriceContainer = styled.div`
    ${tw`
        w-full
        flex
        justify-start
        mt-3 
    `}
`;

const ColorContainer = styled.p`
    background-image:url('https://aloud.limited/assets/swatch-charcoal.png');
    ${tw`
    float-right mt-0.5 ml-4 font-light tracking-widest text-white 
        px-3 py-px rounded-full shadow 
    `}
`;

const DateContainer = styled.div`
    ${tw`
        container flex mt-2 justify-between w-full
    `}
`;

const DateFont = styled.p`
    ${tw`
        flex text-sm text-right font-normal text-gray-600
    `}
`;


export function NFT(props: INFTProps) {
    const { NFTSrc, shirtSrc, swatchSrc, patternTitle, color, status, proverb, forsale, owner, price, dropDate } = props;
    return <NFTLink>
                <NFTContainer>
                    <NFTThumbnail>
                        <img src={ NFTSrc } />
                    </NFTThumbnail>
                    <NFTInfo>
                        <NFTArticle>
                            <ColorContainer>{ color }</ColorContainer>
                            <NFTName>{ patternTitle }</NFTName>
                            <DateContainer>
                                <DateFont>{ dropDate }</DateFont>
                            </DateContainer>
                        </NFTArticle>
                    </NFTInfo>
                </NFTContainer>
            </NFTLink>
            
};
