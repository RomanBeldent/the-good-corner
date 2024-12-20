import { gql } from "@apollo/client";

export const CREATE_AD = gql`
    mutation createNewAd($data: AdInput!) {
        createNewAd(data: $data) {
            id
            title
            price
            pictures {
                url
            }
            owner
            location
            description
            createdAt
            category {
                name
                id
            }
            tags {
                name
                id
            }
    }
}
`;

export const DELETE_AD = gql`
    mutation deleteAd($deleteAdId: Float!) {
        deleteAd(id: $deleteAdId)
    }
`;

export const UPDATE_AD_BY_ID = gql`
  mutation UpdateAdById($data: UpdateAdInput!) {
    updateAd(data: $data)
  }
`;