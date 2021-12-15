import gql from "graphql-tag";

export const GET_ALL_NFTS = gql`
    query getNFTs {
        nfTs {
            id
            title
            patternTitle
            imgNft
            imgFullShirt
            shirtColor
            status
            proverb
            forSale
            ownerName
            dropDate
            price
        }
    }

`;