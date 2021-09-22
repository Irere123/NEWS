import { gql } from '@apollo/client';
import * as React from 'react';
import * as Apollo from '@apollo/client';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Advertisement = {
  __typename?: 'Advertisement';
  advertiser: Scalars['String'];
  createdAt: Scalars['DateTime'];
  expired: Scalars['Boolean'];
  id: Scalars['ID'];
  image: Scalars['String'];
  link: Scalars['String'];
  paidAmount: Scalars['Int'];
  text: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Article = {
  __typename?: 'Article';
  category: Scalars['String'];
  createdAt: Scalars['DateTime'];
  creator: User;
  id: Scalars['ID'];
  tag: Scalars['String'];
  text: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CreateAdInput = {
  advertiser: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  paidAmount: Scalars['Float'];
  text: Scalars['String'];
  title: Scalars['String'];
};

export type CreateAdResponse = {
  __typename?: 'CreateAdResponse';
  advertisement: Advertisement;
  ok: Scalars['Boolean'];
};

export type CreateInput = {
  category: Scalars['String'];
  creatorId: Scalars['ID'];
  tag: Scalars['String'];
  text: Scalars['String'];
  title: Scalars['String'];
};

export type CreateMessageInput = {
  text: Scalars['String'];
  userId: Scalars['ID'];
};

export type CreateMessageResponse = {
  __typename?: 'CreateMessageResponse';
  message: Message;
  ok: Scalars['Boolean'];
};

export type CreateResponse = {
  __typename?: 'CreateResponse';
  article: Article;
  ok: Scalars['Boolean'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAdvertisement: CreateAdResponse;
  createArticle: CreateResponse;
  createMessage: CreateMessageResponse;
  deleteArticle: Scalars['Boolean'];
  login?: Maybe<User>;
  logout: Scalars['Boolean'];
  register: RegisterResponse;
  updateAd: Scalars['Boolean'];
  updateArticle: UpdateResponse;
};


export type MutationCreateAdvertisementArgs = {
  input: CreateAdInput;
};


export type MutationCreateArticleArgs = {
  input: CreateInput;
};


export type MutationCreateMessageArgs = {
  input: CreateMessageInput;
};


export type MutationDeleteArticleArgs = {
  articleId: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationUpdateAdArgs = {
  expired: Scalars['Boolean'];
  id: Scalars['String'];
};


export type MutationUpdateArticleArgs = {
  input: UpdateInput;
};

export type Query = {
  __typename?: 'Query';
  advertisements: Array<Advertisement>;
  allUsers: Array<User>;
  article: Article;
  articles: Array<Article>;
  categoryArticles: Array<Article>;
  hello: Scalars['String'];
  hightestPaidAds: Array<Advertisement>;
  lastestArticles: Array<Article>;
  me?: Maybe<User>;
  messages: Array<Message>;
};


export type QueryAdvertisementsArgs = {
  limit: Scalars['Float'];
};


export type QueryArticleArgs = {
  id: Scalars['String'];
};


export type QueryCategoryArticlesArgs = {
  category: Scalars['String'];
};

export type RegisterInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  role?: Maybe<Scalars['String']>;
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  errors?: Maybe<Array<FieldError>>;
  ok: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type UpdateInput = {
  articleId: Scalars['ID'];
  category: Scalars['String'];
  tag: Scalars['String'];
  text: Scalars['String'];
  title: Scalars['String'];
};

export type UpdateResponse = {
  __typename?: 'UpdateResponse';
  article: Article;
  ok: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  name: Scalars['String'];
  role: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = { __typename?: 'Query', hello: string };


export const HelloDocument = gql`
    query Hello {
  hello
}
    `;
export type HelloComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<HelloQuery, HelloQueryVariables>, 'query'>;

    export const HelloComponent = (props: HelloComponentProps) => (
      <ApolloReactComponents.Query<HelloQuery, HelloQueryVariables> query={HelloDocument} {...props} />
    );
    

/**
 * __useHelloQuery__
 *
 * To run a query within a React component, call `useHelloQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloQuery(baseOptions?: Apollo.QueryHookOptions<HelloQuery, HelloQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
      }
export function useHelloLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloQuery, HelloQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloQuery, HelloQueryVariables>(HelloDocument, options);
        }
export type HelloQueryHookResult = ReturnType<typeof useHelloQuery>;
export type HelloLazyQueryHookResult = ReturnType<typeof useHelloLazyQuery>;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;