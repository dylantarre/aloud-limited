/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getNFTs
// ====================================================

export interface getNFTs_nfTs {
  __typename: "nfTs";
  id: string | null;
  title: string | null;
  patternTitle: string | null;
  imgNft: (any | null)[] | null;
  imgFullShirt: (any | null)[] | null;
  shirtColor: (string | null)[] | null;
  status: string | null;
  proverb: string | null;
  forSale: string | null;
  ownerName: (string | null)[] | null;
  dropDate: string | null;
  price: string | null;
}

export interface getNFTs {
  nfTs: (getNFTs_nfTs | null)[] | null;
}
