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
};

/** 컴포넌트 */
export type ComponentEntity = {
  /** 배경 */
  background?: Maybe<Scalars['String']['output']>;
  /** 컴포넌트 종류 */
  componentType: ComponentType;
  /** 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** 내용 스타일 */
  contentStyle?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 컴포넌트 이름 */
  name: Scalars['String']['output'];
  /** 사이트 ID */
  siteId: Scalars['Int']['output'];
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
  /** 제목 스타일 */
  titleStyle?: Maybe<Scalars['String']['output']>;
};

/** 컴포넌트 종류 */
export enum ComponentType {
  /** 푸터 */
  Footer = 'Footer',
  Inquiry = 'Inquiry',
  /** 팝업 */
  Popup = 'Popup',
  /** 섹션 */
  Section = 'Section'
}

/** 헤더 */
export type HeaderEntity = {
  /** 배경 색상 */
  backgroundColor?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 로고 */
  logo?: Maybe<Scalars['String']['output']>;
  /** 사이트 ID */
  siteId: Scalars['Int']['output'];
  /** 텍스트 색상 */
  textColor?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  /** 컴포넌트 추가 */
  addComponent: Scalars['Boolean']['output'];
  /** 회원가입 */
  createAdmin: Scalars['Boolean']['output'];
  /** 사이트 생성 */
  createSite: Scalars['Boolean']['output'];
  /** 로그인 */
  login: Scalars['String']['output'];
  /** 헤더 스타일 설정 */
  setHeaderStyle: Scalars['Boolean']['output'];
};


export type MutationAddComponentArgs = {
  background?: InputMaybe<Scalars['String']['input']>;
  componentType: ComponentType;
  content?: InputMaybe<Scalars['String']['input']>;
  contentStyle?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  siteId: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  titleStyle?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateAdminArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateSiteArgs = {
  domain: Scalars['String']['input'];
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSetHeaderStyleArgs = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  siteId: Scalars['Int']['input'];
  textColor?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  /** 도메인으로 사이트 조회 */
  findOneSiteByDomain: SiteEntity;
  /** ID로 사이트 조회 */
  findOneSiteById: SiteEntity;
};


export type QueryFindOneSiteByDomainArgs = {
  domain: Scalars['String']['input'];
};


export type QueryFindOneSiteByIdArgs = {
  id: Scalars['Int']['input'];
};

/** 사이트 */
export type SiteEntity = {
  /** 컴포넌트 목록 */
  components: Array<ComponentEntity>;
  /** 도메인 */
  domain: Scalars['String']['output'];
  /** 사이트 이메일 */
  email: Scalars['String']['output'];
  /** 헤더 */
  header: HeaderEntity;
  /** ID */
  id: Scalars['Int']['output'];
};

export type FindOneSiteByDomainQueryVariables = Exact<{
  domain: Scalars['String']['input'];
}>;


export type FindOneSiteByDomainQuery = { findOneSiteByDomain: { id: number, domain: string, email: string, components: Array<{ id: number, componentType: ComponentType, name: string, title?: string | null, titleStyle?: string | null, content?: string | null, contentStyle?: string | null, background?: string | null, siteId: number }>, header: { logo?: string | null, backgroundColor?: string | null, textColor?: string | null } } };


export const FindOneSiteByDomainDocument = gql`
    query FindOneSiteByDomain($domain: String!) {
  findOneSiteByDomain(domain: $domain) {
    id
    domain
    email
    components {
      id
      componentType
      name
      title
      titleStyle
      content
      contentStyle
      background
      siteId
    }
    header {
      logo
      backgroundColor
      textColor
    }
  }
}
    `;

/**
 * __useFindOneSiteByDomainQuery__
 *
 * To run a query within a React component, call `useFindOneSiteByDomainQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneSiteByDomainQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneSiteByDomainQuery({
 *   variables: {
 *      domain: // value for 'domain'
 *   },
 * });
 */
export function useFindOneSiteByDomainQuery(baseOptions: Apollo.QueryHookOptions<FindOneSiteByDomainQuery, FindOneSiteByDomainQueryVariables> & ({ variables: FindOneSiteByDomainQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOneSiteByDomainQuery, FindOneSiteByDomainQueryVariables>(FindOneSiteByDomainDocument, options);
      }
export function useFindOneSiteByDomainLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOneSiteByDomainQuery, FindOneSiteByDomainQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOneSiteByDomainQuery, FindOneSiteByDomainQueryVariables>(FindOneSiteByDomainDocument, options);
        }
export function useFindOneSiteByDomainSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindOneSiteByDomainQuery, FindOneSiteByDomainQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindOneSiteByDomainQuery, FindOneSiteByDomainQueryVariables>(FindOneSiteByDomainDocument, options);
        }
export type FindOneSiteByDomainQueryHookResult = ReturnType<typeof useFindOneSiteByDomainQuery>;
export type FindOneSiteByDomainLazyQueryHookResult = ReturnType<typeof useFindOneSiteByDomainLazyQuery>;
export type FindOneSiteByDomainSuspenseQueryHookResult = ReturnType<typeof useFindOneSiteByDomainSuspenseQuery>;
export type FindOneSiteByDomainQueryResult = Apollo.QueryResult<FindOneSiteByDomainQuery, FindOneSiteByDomainQueryVariables>;