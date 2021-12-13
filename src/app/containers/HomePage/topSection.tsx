import styled from "styled-components";
import tw from "twin.macro";
import PocketTeeImg from "../../../assets/images/Tall-Unisex.png";
import BlobImg from "../../../assets/images/blob.svg";
import { SCREENS } from "../../responsive";
import { Button } from "../../components/button";


const TopSectionContainer= styled.div`
   min-height: 40em;
   
    ${tw`
        text-center
        sm:text-left
        mt-12
        sm:mt-24
        w-full
        max-w-screen-2xl
        sm:flex
        justify-between
        pl-3
        pr-3
        lg:pl-12
        lg:pr-12
        `}
    
`;


const LeftContainer = styled.div`
    ${tw`
        w-full
        sm:w-1/2
        sm:flex
        sm:flex-col
        `};
`;

const RightContainer = styled.div`
    ${tw`
        w-full
        sm:w-1/2
        sm:flex
        sm:flex-col
        sm:relative
        sm:mt-20
        `};
`;

const Slogan = styled.h1`
    ${tw`
        font-bold
        text-3xl
        xl:text-5xl
        lg:text-4xl
        sm:text-3xl
        xs:text-3xl
        text-black
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
        `};
`;

const Description = styled.p`
    ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        `};
`;

const BlobContainer = styled.div`
    position: absolute;
    z-index: -1;
    width: 30em;
    top: 18em;
    right: -6em;
    
    img{
        width: 100%;
        height: auto;
        max-height: max-content;
        
    }
    @media (min-width: ${SCREENS.xs}) {
        width: 44em;
        top: 13em;
        right: -6em;
    }
    @media (min-width: ${SCREENS.sm}) {
        width: 45em;
        right: -20em;
        top: -18em;
        max-height: 30em;
    }

    @media (min-width: ${SCREENS.lg}) {
        width: 50em;
        right: -15em;
        top: -20em;
        max-height: 30em;
    }

    @media (min-width: ${SCREENS.xl}) {
        width: 60em;
        right: -14em;
        top: -22em;
        max-height: 30em;  
    }
`;

const StandaloneTee = styled.div`
    width: auto;    
    position: absolute;
    top: 23em;

    img{
        width: auto;
        height: 100%
        max-width: fit-content;
        
        
    }
    @media (min-width: ${SCREENS.xs}) {
        right: 1em;
        top: 20em;
    }
    @media (min-width: ${SCREENS.sm}) {
        width: -20em;
        top: -10em;
        right: -8em;
    }

    @media (min-width: ${SCREENS.lg}) {
        top:-12em;
        right: -5em;
    }

    @media (min-width: ${SCREENS.xl}) {
        top:-12em;
        right:-3em;
    }

`;

const ButtonsContainer = styled.div`
    ${tw`
        flex
        justify-center
        sm:justify-start
    `};
`;

export function TopSection() {
    return <TopSectionContainer>
        <LeftContainer>
            <Slogan>Pocket Tee + NFT,<br /> a match made on $LUNA. </Slogan>
            <Description>Aloud NFTs on the Terra network grant $UST royalties on every shirt sold.</Description>
            <ButtonsContainer>
                <Button theme="filled" text="See Today's Drop 💧" />
                
            </ButtonsContainer>
        </LeftContainer>
        <RightContainer>
            <BlobContainer>
                <img src={BlobImg} />
            </BlobContainer>
            <StandaloneTee>
            <img src={PocketTeeImg} />
            </StandaloneTee>
        </RightContainer>
    </TopSectionContainer>
};