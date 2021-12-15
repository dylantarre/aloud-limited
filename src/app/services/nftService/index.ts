import { apolloClient } from "../../graphql";
import { GET_ALL_NFTS } from "./queries";
import { getNFTs_nfTs } from "./__generated__/getNFTs";

class nftService {
    public async getNFTs(): Promise<getNFTs_nfTs[]> {
        const response = await apolloClient
            .query({ query: GET_ALL_NFTS })
            .catch((err) => {
                throw err;
            });

        if(response && response.data) return response.data as getNFTs_nfTs[];
        
        return [];
    } 
        
}

export default new nftService();