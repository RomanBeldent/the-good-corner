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

export const REGISTER = gql`
  mutation Register($data: UserInput!) {
    register(data: $data)
  }
`;

export const LOGIN = gql`
mutation Login($data: UserInput!) {
    login(data: $data)
}
`;

export const LOGOUT = gql`
mutation Logout {
  logout
}
`;

export const CONFIRM_EMAIL = gql`
mutation ConfirmEmail($codeByUser: String!) {
  confirmEmail(codeByUser: $codeByUser)
}
`;

export const FORGOTTEN_PASSWORD = gql`
mutation ForgottenPassword($email: String!) {
  forgottenPassword(email: $email)
}
`;

export const RESET_PASSWORD = gql`
mutation ResetPassword($password: String!, $code: String!) {
  resetPassword(password: $password, code: $code)
}
`;
