import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type Ad = {
  __typename?: 'Ad';
  category: Category;
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  location: Scalars['String']['output'];
  pictures: Array<Picture>;
  price: Scalars['Float']['output'];
  tags?: Maybe<Array<Tag>>;
  title: Scalars['String']['output'];
  user: User;
};

export type AdInput = {
  category: Scalars['ID']['input'];
  createdAt: Scalars['DateTimeISO']['input'];
  description: Scalars['String']['input'];
  location: Scalars['String']['input'];
  pictures?: InputMaybe<Array<PictureInput>>;
  price: Scalars['Float']['input'];
  tags?: InputMaybe<Array<TagInput>>;
  title: Scalars['String']['input'];
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type CategoryInput = {
  name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  confirmEmail: Scalars['String']['output'];
  createNewAd: Ad;
  createNewCategory: Category;
  deleteAd: Scalars['String']['output'];
  deleteCategory: Scalars['String']['output'];
  forgottenPassword: Scalars['String']['output'];
  login: Scalars['String']['output'];
  logout: Scalars['String']['output'];
  register: Scalars['String']['output'];
  resetPassword: Scalars['String']['output'];
  updateAd: Scalars['String']['output'];
  updateCategory: Scalars['String']['output'];
};


export type MutationConfirmEmailArgs = {
  codeByUser: Scalars['String']['input'];
};


export type MutationCreateNewAdArgs = {
  data: AdInput;
};


export type MutationCreateNewCategoryArgs = {
  data: CategoryInput;
};


export type MutationDeleteAdArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Float']['input'];
};


export type MutationForgottenPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  data: UserInput;
};


export type MutationRegisterArgs = {
  data: UserInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateAdArgs = {
  data: UpdateAdInput;
};


export type MutationUpdateCategoryArgs = {
  data: UpdateCategoryInput;
};

export type Picture = {
  __typename?: 'Picture';
  id: Scalars['Float']['output'];
  url: Scalars['String']['output'];
};

export type PictureInput = {
  url: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  AllAds: Array<Ad>;
  AllCategories: Array<Category>;
  AllTags: Array<Tag>;
  getAdById: Ad;
  getCategoryById: Category;
  getUserInfo: UserInfo;
};


export type QueryAllAdsArgs = {
  category?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetAdByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetCategoryByIdArgs = {
  id: Scalars['Float']['input'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
};

export type TagInput = {
  id: Scalars['Float']['input'];
};

export type UpdateAdInput = {
  category?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
  pictures?: InputMaybe<Array<PictureInput>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  tags?: InputMaybe<Array<TagInput>>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCategoryInput = {
  id: Scalars['Float']['input'];
  name: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  ads: Array<Ad>;
  email: Scalars['String']['output'];
};

export type UserInfo = {
  __typename?: 'UserInfo';
  email?: Maybe<Scalars['String']['output']>;
  isLoggedIn: Scalars['Boolean']['output'];
};

export type UserInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateNewAdMutationVariables = Exact<{
  data: AdInput;
}>;


export type CreateNewAdMutation = { __typename?: 'Mutation', createNewAd: { __typename?: 'Ad', id: number, title: string, price: number, location: string, description: string, createdAt: any, pictures: Array<{ __typename?: 'Picture', url: string }>, category: { __typename?: 'Category', name: string, id: number }, tags?: Array<{ __typename?: 'Tag', name: string, id: number }> | null } };

export type DeleteAdMutationVariables = Exact<{
  deleteAdId: Scalars['Float']['input'];
}>;


export type DeleteAdMutation = { __typename?: 'Mutation', deleteAd: string };

export type UpdateAdByIdMutationVariables = Exact<{
  data: UpdateAdInput;
}>;


export type UpdateAdByIdMutation = { __typename?: 'Mutation', updateAd: string };

export type RegisterMutationVariables = Exact<{
  data: UserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: string };

export type LoginMutationVariables = Exact<{
  data: UserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: string };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: string };

export type ConfirmEmailMutationVariables = Exact<{
  codeByUser: Scalars['String']['input'];
}>;


export type ConfirmEmailMutation = { __typename?: 'Mutation', confirmEmail: string };

export type ForgottenPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ForgottenPasswordMutation = { __typename?: 'Mutation', forgottenPassword: string };

export type ResetPasswordMutationVariables = Exact<{
  password: Scalars['String']['input'];
  code: Scalars['String']['input'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword: string };

export type AllAdsQueryVariables = Exact<{
  title?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['String']['input']>;
}>;


export type AllAdsQuery = { __typename?: 'Query', AllAds: Array<{ __typename?: 'Ad', id: number, title: string, description: string, price: number, location: string, createdAt: any, pictures: Array<{ __typename?: 'Picture', id: number, url: string }>, category: { __typename?: 'Category', id: number, name: string }, tags?: Array<{ __typename?: 'Tag', id: number, name: string }> | null }> };

export type GetAdByIdQueryVariables = Exact<{
  getAdByIdId: Scalars['Float']['input'];
}>;


export type GetAdByIdQuery = { __typename?: 'Query', getAdById: { __typename?: 'Ad', id: number, title: string, description: string, price: number, location: string, createdAt: any, user: { __typename?: 'User', email: string }, pictures: Array<{ __typename?: 'Picture', id: number, url: string }>, category: { __typename?: 'Category', id: number, name: string }, tags?: Array<{ __typename?: 'Tag', id: number, name: string }> | null } };

export type AllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllCategoriesQuery = { __typename?: 'Query', AllCategories: Array<{ __typename?: 'Category', id: number, name: string }> };

export type AllTagsAndCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTagsAndCategoriesQuery = { __typename?: 'Query', AllTags: Array<{ __typename?: 'Tag', id: number, name: string }>, AllCategories: Array<{ __typename?: 'Category', id: number, name: string }> };

export type GetUserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserInfoQuery = { __typename?: 'Query', getUserInfo: { __typename?: 'UserInfo', email?: string | null, isLoggedIn: boolean } };

export type GetAllCategoriesAndUserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesAndUserInfoQuery = { __typename?: 'Query', getUserInfo: { __typename?: 'UserInfo', email?: string | null, isLoggedIn: boolean }, AllCategories: Array<{ __typename?: 'Category', id: number, name: string }> };


export const CreateNewAdDocument = gql`
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
export type CreateNewAdMutationFn = Apollo.MutationFunction<CreateNewAdMutation, CreateNewAdMutationVariables>;

/**
 * __useCreateNewAdMutation__
 *
 * To run a mutation, you first call `useCreateNewAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewAdMutation, { data, loading, error }] = useCreateNewAdMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateNewAdMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewAdMutation, CreateNewAdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewAdMutation, CreateNewAdMutationVariables>(CreateNewAdDocument, options);
      }
export type CreateNewAdMutationHookResult = ReturnType<typeof useCreateNewAdMutation>;
export type CreateNewAdMutationResult = Apollo.MutationResult<CreateNewAdMutation>;
export type CreateNewAdMutationOptions = Apollo.BaseMutationOptions<CreateNewAdMutation, CreateNewAdMutationVariables>;
export const DeleteAdDocument = gql`
    mutation deleteAd($deleteAdId: Float!) {
  deleteAd(id: $deleteAdId)
}
    `;
export type DeleteAdMutationFn = Apollo.MutationFunction<DeleteAdMutation, DeleteAdMutationVariables>;

/**
 * __useDeleteAdMutation__
 *
 * To run a mutation, you first call `useDeleteAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAdMutation, { data, loading, error }] = useDeleteAdMutation({
 *   variables: {
 *      deleteAdId: // value for 'deleteAdId'
 *   },
 * });
 */
export function useDeleteAdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAdMutation, DeleteAdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAdMutation, DeleteAdMutationVariables>(DeleteAdDocument, options);
      }
export type DeleteAdMutationHookResult = ReturnType<typeof useDeleteAdMutation>;
export type DeleteAdMutationResult = Apollo.MutationResult<DeleteAdMutation>;
export type DeleteAdMutationOptions = Apollo.BaseMutationOptions<DeleteAdMutation, DeleteAdMutationVariables>;
export const UpdateAdByIdDocument = gql`
    mutation UpdateAdById($data: UpdateAdInput!) {
  updateAd(data: $data)
}
    `;
export type UpdateAdByIdMutationFn = Apollo.MutationFunction<UpdateAdByIdMutation, UpdateAdByIdMutationVariables>;

/**
 * __useUpdateAdByIdMutation__
 *
 * To run a mutation, you first call `useUpdateAdByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdByIdMutation, { data, loading, error }] = useUpdateAdByIdMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateAdByIdMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAdByIdMutation, UpdateAdByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAdByIdMutation, UpdateAdByIdMutationVariables>(UpdateAdByIdDocument, options);
      }
export type UpdateAdByIdMutationHookResult = ReturnType<typeof useUpdateAdByIdMutation>;
export type UpdateAdByIdMutationResult = Apollo.MutationResult<UpdateAdByIdMutation>;
export type UpdateAdByIdMutationOptions = Apollo.BaseMutationOptions<UpdateAdByIdMutation, UpdateAdByIdMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($data: UserInput!) {
  register(data: $data)
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const LoginDocument = gql`
    mutation Login($data: UserInput!) {
  login(data: $data)
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const ConfirmEmailDocument = gql`
    mutation ConfirmEmail($codeByUser: String!) {
  confirmEmail(codeByUser: $codeByUser)
}
    `;
export type ConfirmEmailMutationFn = Apollo.MutationFunction<ConfirmEmailMutation, ConfirmEmailMutationVariables>;

/**
 * __useConfirmEmailMutation__
 *
 * To run a mutation, you first call `useConfirmEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmEmailMutation, { data, loading, error }] = useConfirmEmailMutation({
 *   variables: {
 *      codeByUser: // value for 'codeByUser'
 *   },
 * });
 */
export function useConfirmEmailMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmEmailMutation, ConfirmEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConfirmEmailMutation, ConfirmEmailMutationVariables>(ConfirmEmailDocument, options);
      }
export type ConfirmEmailMutationHookResult = ReturnType<typeof useConfirmEmailMutation>;
export type ConfirmEmailMutationResult = Apollo.MutationResult<ConfirmEmailMutation>;
export type ConfirmEmailMutationOptions = Apollo.BaseMutationOptions<ConfirmEmailMutation, ConfirmEmailMutationVariables>;
export const ForgottenPasswordDocument = gql`
    mutation ForgottenPassword($email: String!) {
  forgottenPassword(email: $email)
}
    `;
export type ForgottenPasswordMutationFn = Apollo.MutationFunction<ForgottenPasswordMutation, ForgottenPasswordMutationVariables>;

/**
 * __useForgottenPasswordMutation__
 *
 * To run a mutation, you first call `useForgottenPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgottenPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgottenPasswordMutation, { data, loading, error }] = useForgottenPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgottenPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ForgottenPasswordMutation, ForgottenPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ForgottenPasswordMutation, ForgottenPasswordMutationVariables>(ForgottenPasswordDocument, options);
      }
export type ForgottenPasswordMutationHookResult = ReturnType<typeof useForgottenPasswordMutation>;
export type ForgottenPasswordMutationResult = Apollo.MutationResult<ForgottenPasswordMutation>;
export type ForgottenPasswordMutationOptions = Apollo.BaseMutationOptions<ForgottenPasswordMutation, ForgottenPasswordMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($password: String!, $code: String!) {
  resetPassword(password: $password, code: $code)
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *      code: // value for 'code'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const AllAdsDocument = gql`
    query AllAds($title: String, $category: String) {
  AllAds(title: $title, category: $category) {
    id
    title
    description
    price
    location
    createdAt
    pictures {
      id
      url
    }
    category {
      id
      name
    }
    tags {
      id
      name
    }
  }
}
    `;

/**
 * __useAllAdsQuery__
 *
 * To run a query within a React component, call `useAllAdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllAdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllAdsQuery({
 *   variables: {
 *      title: // value for 'title'
 *      category: // value for 'category'
 *   },
 * });
 */
export function useAllAdsQuery(baseOptions?: Apollo.QueryHookOptions<AllAdsQuery, AllAdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllAdsQuery, AllAdsQueryVariables>(AllAdsDocument, options);
      }
export function useAllAdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllAdsQuery, AllAdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllAdsQuery, AllAdsQueryVariables>(AllAdsDocument, options);
        }
export function useAllAdsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AllAdsQuery, AllAdsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllAdsQuery, AllAdsQueryVariables>(AllAdsDocument, options);
        }
export type AllAdsQueryHookResult = ReturnType<typeof useAllAdsQuery>;
export type AllAdsLazyQueryHookResult = ReturnType<typeof useAllAdsLazyQuery>;
export type AllAdsSuspenseQueryHookResult = ReturnType<typeof useAllAdsSuspenseQuery>;
export type AllAdsQueryResult = Apollo.QueryResult<AllAdsQuery, AllAdsQueryVariables>;
export const GetAdByIdDocument = gql`
    query GetAdById($getAdByIdId: Float!) {
  getAdById(id: $getAdByIdId) {
    id
    title
    description
    price
    user {
      email
    }
    pictures {
      id
      url
    }
    location
    createdAt
    category {
      id
      name
    }
    tags {
      id
      name
    }
  }
}
    `;

/**
 * __useGetAdByIdQuery__
 *
 * To run a query within a React component, call `useGetAdByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdByIdQuery({
 *   variables: {
 *      getAdByIdId: // value for 'getAdByIdId'
 *   },
 * });
 */
export function useGetAdByIdQuery(baseOptions: Apollo.QueryHookOptions<GetAdByIdQuery, GetAdByIdQueryVariables> & ({ variables: GetAdByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdByIdQuery, GetAdByIdQueryVariables>(GetAdByIdDocument, options);
      }
export function useGetAdByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdByIdQuery, GetAdByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdByIdQuery, GetAdByIdQueryVariables>(GetAdByIdDocument, options);
        }
export function useGetAdByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAdByIdQuery, GetAdByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAdByIdQuery, GetAdByIdQueryVariables>(GetAdByIdDocument, options);
        }
export type GetAdByIdQueryHookResult = ReturnType<typeof useGetAdByIdQuery>;
export type GetAdByIdLazyQueryHookResult = ReturnType<typeof useGetAdByIdLazyQuery>;
export type GetAdByIdSuspenseQueryHookResult = ReturnType<typeof useGetAdByIdSuspenseQuery>;
export type GetAdByIdQueryResult = Apollo.QueryResult<GetAdByIdQuery, GetAdByIdQueryVariables>;
export const AllCategoriesDocument = gql`
    query AllCategories {
  AllCategories {
    id
    name
  }
}
    `;

/**
 * __useAllCategoriesQuery__
 *
 * To run a query within a React component, call `useAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<AllCategoriesQuery, AllCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(AllCategoriesDocument, options);
      }
export function useAllCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCategoriesQuery, AllCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(AllCategoriesDocument, options);
        }
export function useAllCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AllCategoriesQuery, AllCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllCategoriesQuery, AllCategoriesQueryVariables>(AllCategoriesDocument, options);
        }
export type AllCategoriesQueryHookResult = ReturnType<typeof useAllCategoriesQuery>;
export type AllCategoriesLazyQueryHookResult = ReturnType<typeof useAllCategoriesLazyQuery>;
export type AllCategoriesSuspenseQueryHookResult = ReturnType<typeof useAllCategoriesSuspenseQuery>;
export type AllCategoriesQueryResult = Apollo.QueryResult<AllCategoriesQuery, AllCategoriesQueryVariables>;
export const AllTagsAndCategoriesDocument = gql`
    query AllTagsAndCategories {
  AllTags {
    id
    name
  }
  AllCategories {
    id
    name
  }
}
    `;

/**
 * __useAllTagsAndCategoriesQuery__
 *
 * To run a query within a React component, call `useAllTagsAndCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTagsAndCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTagsAndCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTagsAndCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<AllTagsAndCategoriesQuery, AllTagsAndCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTagsAndCategoriesQuery, AllTagsAndCategoriesQueryVariables>(AllTagsAndCategoriesDocument, options);
      }
export function useAllTagsAndCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTagsAndCategoriesQuery, AllTagsAndCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTagsAndCategoriesQuery, AllTagsAndCategoriesQueryVariables>(AllTagsAndCategoriesDocument, options);
        }
export function useAllTagsAndCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<AllTagsAndCategoriesQuery, AllTagsAndCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllTagsAndCategoriesQuery, AllTagsAndCategoriesQueryVariables>(AllTagsAndCategoriesDocument, options);
        }
export type AllTagsAndCategoriesQueryHookResult = ReturnType<typeof useAllTagsAndCategoriesQuery>;
export type AllTagsAndCategoriesLazyQueryHookResult = ReturnType<typeof useAllTagsAndCategoriesLazyQuery>;
export type AllTagsAndCategoriesSuspenseQueryHookResult = ReturnType<typeof useAllTagsAndCategoriesSuspenseQuery>;
export type AllTagsAndCategoriesQueryResult = Apollo.QueryResult<AllTagsAndCategoriesQuery, AllTagsAndCategoriesQueryVariables>;
export const GetUserInfoDocument = gql`
    query GetUserInfo {
  getUserInfo {
    email
    isLoggedIn
  }
}
    `;

/**
 * __useGetUserInfoQuery__
 *
 * To run a query within a React component, call `useGetUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
      }
export function useGetUserInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
        }
export function useGetUserInfoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserInfoQuery, GetUserInfoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserInfoQuery, GetUserInfoQueryVariables>(GetUserInfoDocument, options);
        }
export type GetUserInfoQueryHookResult = ReturnType<typeof useGetUserInfoQuery>;
export type GetUserInfoLazyQueryHookResult = ReturnType<typeof useGetUserInfoLazyQuery>;
export type GetUserInfoSuspenseQueryHookResult = ReturnType<typeof useGetUserInfoSuspenseQuery>;
export type GetUserInfoQueryResult = Apollo.QueryResult<GetUserInfoQuery, GetUserInfoQueryVariables>;
export const GetAllCategoriesAndUserInfoDocument = gql`
    query GetAllCategoriesAndUserInfo {
  getUserInfo {
    email
    isLoggedIn
  }
  AllCategories {
    id
    name
  }
}
    `;

/**
 * __useGetAllCategoriesAndUserInfoQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriesAndUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriesAndUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriesAndUserInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCategoriesAndUserInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoriesAndUserInfoQuery, GetAllCategoriesAndUserInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoriesAndUserInfoQuery, GetAllCategoriesAndUserInfoQueryVariables>(GetAllCategoriesAndUserInfoDocument, options);
      }
export function useGetAllCategoriesAndUserInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoriesAndUserInfoQuery, GetAllCategoriesAndUserInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoriesAndUserInfoQuery, GetAllCategoriesAndUserInfoQueryVariables>(GetAllCategoriesAndUserInfoDocument, options);
        }
export function useGetAllCategoriesAndUserInfoSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAllCategoriesAndUserInfoQuery, GetAllCategoriesAndUserInfoQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllCategoriesAndUserInfoQuery, GetAllCategoriesAndUserInfoQueryVariables>(GetAllCategoriesAndUserInfoDocument, options);
        }
export type GetAllCategoriesAndUserInfoQueryHookResult = ReturnType<typeof useGetAllCategoriesAndUserInfoQuery>;
export type GetAllCategoriesAndUserInfoLazyQueryHookResult = ReturnType<typeof useGetAllCategoriesAndUserInfoLazyQuery>;
export type GetAllCategoriesAndUserInfoSuspenseQueryHookResult = ReturnType<typeof useGetAllCategoriesAndUserInfoSuspenseQuery>;
export type GetAllCategoriesAndUserInfoQueryResult = Apollo.QueryResult<GetAllCategoriesAndUserInfoQuery, GetAllCategoriesAndUserInfoQueryVariables>;