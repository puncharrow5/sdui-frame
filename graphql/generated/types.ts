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

/** 배경 종류 */
export enum BackgroundType {
  /** 색상 */
  Color = 'COLOR',
  /** 이미지 */
  Image = 'IMAGE'
}

/** 컴포넌트 */
export type ComponentEntity = {
  /** 배경 */
  background?: Maybe<Scalars['String']['output']>;
  /** 배경 종류 */
  backgroundType?: Maybe<BackgroundType>;
  /** 컴포넌트 종류 */
  componentType: ComponentType;
  /** 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** 내용 스타일 */
  contentStyle?: Maybe<ContentStyleEntity>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 컴포넌트 이름 */
  name: Scalars['String']['output'];
  /** 사이트 ID */
  siteId: Scalars['Int']['output'];
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
  /** 제목 스타일 */
  titleStyle?: Maybe<TitleStyleEntity>;
};

/** 컴포넌트 종류 */
export enum ComponentType {
  /** 푸터 */
  Footer = 'FOOTER',
  /** 문의 */
  Inquiry = 'INQUIRY',
  /** 팝업 */
  Popup = 'POPUP',
  /** 섹션 */
  Section = 'SECTION'
}

/** 내용 스타일 */
export type ContentStyleEntity = {
  /** 컴포넌트 ID */
  componentId: Scalars['Float']['output'];
  /** ID */
  id: Scalars['Int']['output'];
  /** 아래쪽 마진 */
  marginBottom?: Maybe<Scalars['Int']['output']>;
  /** 왼쪽 마진 */
  marginLeft?: Maybe<Scalars['Int']['output']>;
  /** 오른쪽 마진 */
  marginRight?: Maybe<Scalars['Int']['output']>;
  /** 위쪽 마진 */
  marginTop?: Maybe<Scalars['Int']['output']>;
  /** 텍스트 색상 */
  textColor?: Maybe<Scalars['String']['output']>;
  /** 텍스트 크기 */
  textSize?: Maybe<Scalars['Int']['output']>;
};

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
  /** 텍스트 크기 */
  textSize?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  /** 회원가입 */
  createAdmin: Scalars['Boolean']['output'];
  /** 컴포넌트 생성 */
  createComponent: Scalars['Boolean']['output'];
  /** 사이트 생성 */
  createSite: Scalars['Boolean']['output'];
  /** 로그인 */
  login: Scalars['String']['output'];
  /** 헤더 스타일 설정 */
  setHeaderStyle: Scalars['Boolean']['output'];
};


export type MutationCreateAdminArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateComponentArgs = {
  componentType: ComponentType;
  name: Scalars['String']['input'];
  siteId: Scalars['Int']['input'];
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
  components?: Maybe<Array<ComponentEntity>>;
  /** 도메인 */
  domain: Scalars['String']['output'];
  /** 사이트 이메일 */
  email: Scalars['String']['output'];
  /** 헤더 */
  header?: Maybe<HeaderEntity>;
  /** ID */
  id: Scalars['Int']['output'];
};

/** 제목 스타일 */
export type TitleStyleEntity = {
  /** 컴포넌트 ID */
  componentId: Scalars['Float']['output'];
  /** ID */
  id: Scalars['Int']['output'];
  /** 아래쪽 마진 */
  marginBottom?: Maybe<Scalars['Int']['output']>;
  /** 왼쪽 마진 */
  marginLeft?: Maybe<Scalars['Int']['output']>;
  /** 오른쪽 마진 */
  marginRight?: Maybe<Scalars['Int']['output']>;
  /** 위쪽 마진 */
  marginTop?: Maybe<Scalars['Int']['output']>;
  /** 텍스트 색상 */
  textColor?: Maybe<Scalars['String']['output']>;
  /** 텍스트 크기 */
  textSize?: Maybe<Scalars['Int']['output']>;
};

export type FindOneSiteByDomainQueryVariables = Exact<{
  domain: Scalars['String']['input'];
}>;


export type FindOneSiteByDomainQuery = { findOneSiteByDomain: { email: string, domain: string, components?: Array<{ id: number, componentType: ComponentType, name: string, title?: string | null, content?: string | null, backgroundType?: BackgroundType | null, background?: string | null, titleStyle?: { marginTop?: number | null, marginBottom?: number | null, marginRight?: number | null, marginLeft?: number | null, textSize?: number | null, textColor?: string | null } | null, contentStyle?: { marginTop?: number | null, marginBottom?: number | null, marginRight?: number | null, marginLeft?: number | null, textSize?: number | null, textColor?: string | null } | null }> | null, header?: { logo?: string | null, backgroundColor?: string | null, textSize?: number | null, textColor?: string | null } | null } };


export const FindOneSiteByDomainDocument = gql`
    query FindOneSiteByDomain($domain: String!) {
  findOneSiteByDomain(domain: $domain) {
    email
    domain
    components {
      id
      componentType
      name
      title
      content
      backgroundType
      background
      titleStyle {
        marginTop
        marginBottom
        marginRight
        marginLeft
        textSize
        textColor
      }
      contentStyle {
        marginTop
        marginBottom
        marginRight
        marginLeft
        textSize
        textColor
      }
    }
    header {
      logo
      backgroundColor
      textSize
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