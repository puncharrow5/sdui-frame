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
  Upload: { input: any; output: any; }
};

/** 배경 종류 */
export enum BackgroundType {
  /** 색상 */
  Color = 'COLOR',
  /** 이미지 */
  Image = 'IMAGE'
}

/** 자식 컴포넌트 */
export type ChildEntity = {
  /** 자식 컴포넌트 스타일 */
  childStyle?: Maybe<ChildStyleEntity>;
  /** 컴포넌트 종류 */
  childType: ChildType;
  /** 컴포넌트 ID */
  componentId: Scalars['Int']['output'];
  /** 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 삭제 여부 */
  isDelete: Scalars['Boolean']['output'];
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
};

/** 자식 컴포넌트 스타일 */
export type ChildStyleEntity = {
  /** 배경 */
  background?: Maybe<Scalars['String']['output']>;
  /** 배경 종류 */
  backgroundType?: Maybe<BackgroundType>;
  /** 테두리 */
  border?: Maybe<Scalars['String']['output']>;
  /** 테두리 곡률 */
  borderRadius?: Maybe<Scalars['String']['output']>;
  /** 자식컴포넌트 ID */
  childId: Scalars['Int']['output'];
  /** 높이 */
  height?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 마진 */
  margin?: Maybe<Scalars['String']['output']>;
  /** 패딩 */
  padding?: Maybe<Scalars['String']['output']>;
  /** 너비 */
  width?: Maybe<Scalars['String']['output']>;
};

export type ChildStyleInput = {
  /** 배경 */
  background?: InputMaybe<Scalars['String']['input']>;
  /** 배경 종류 */
  backgroundType?: InputMaybe<BackgroundType>;
  /** 테두리 */
  border?: InputMaybe<Scalars['String']['input']>;
  /** 테두리 곡률 */
  borderRadius?: InputMaybe<Scalars['String']['input']>;
  /** 높이 */
  height?: InputMaybe<Scalars['String']['input']>;
  /** 마진 */
  margin?: InputMaybe<Scalars['String']['input']>;
  /** 패딩 */
  padding?: InputMaybe<Scalars['String']['input']>;
  /** 너비 */
  width?: InputMaybe<Scalars['String']['input']>;
};

/** 자식 컴포넌트 종류 */
export enum ChildType {
  /** 박스 */
  Box = 'BOX',
  /** 이미지 */
  Image = 'IMAGE'
}

/** 컴포넌트 */
export type ComponentEntity = {
  /** 자식 컴포넌트 목록 */
  children?: Maybe<Array<ChildEntity>>;
  /** 컴포넌트 모바일 스타일 */
  componentMobileStyle?: Maybe<ComponentMobileStyleEntity>;
  /** 컴포넌트 스타일 */
  componentStyle?: Maybe<ComponentStyleEntity>;
  /** 컴포넌트 종류 */
  componentType: ComponentType;
  /** 내용 */
  content?: Maybe<Scalars['String']['output']>;
  /** 내용 스타일 */
  contentStyle?: Maybe<ContentStyleEntity>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 삭제 여부 */
  isDelete: Scalars['Boolean']['output'];
  /** 컴포넌트 이름 */
  name: Scalars['String']['output'];
  /** 사이트 ID */
  siteId: Scalars['Int']['output'];
  /** 제목 */
  title?: Maybe<Scalars['String']['output']>;
  /** 제목 스타일 */
  titleStyle?: Maybe<TitleStyleEntity>;
};

/** 컴포넌트 모바일 스타일 */
export type ComponentMobileStyleEntity = {
  /** 배경 */
  background?: Maybe<Scalars['String']['output']>;
  /** 배경 종류 */
  backgroundType?: Maybe<BackgroundType>;
  /** 컴포넌트 ID */
  componentId: Scalars['Int']['output'];
  /** 갭 */
  gap?: Maybe<Scalars['String']['output']>;
  /** 높이 */
  height?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 패딩 */
  padding?: Maybe<Scalars['String']['output']>;
};

export type ComponentMobileStyleInput = {
  /** 배경 */
  background?: InputMaybe<Scalars['String']['input']>;
  /** 배경 종류 */
  backgroundType?: InputMaybe<BackgroundType>;
  /** 갭 */
  gap?: InputMaybe<Scalars['String']['input']>;
  /** 높이 */
  height?: InputMaybe<Scalars['String']['input']>;
  /** 패딩 */
  padding?: InputMaybe<Scalars['String']['input']>;
};

/** 컴포넌트 스타일 */
export type ComponentStyleEntity = {
  /** 배경 */
  background?: Maybe<Scalars['String']['output']>;
  /** 배경 종류 */
  backgroundType?: Maybe<BackgroundType>;
  /** 컴포넌트 ID */
  componentId: Scalars['Int']['output'];
  /** 갭 */
  gap?: Maybe<Scalars['String']['output']>;
  /** 높이 */
  height?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 패딩 */
  padding?: Maybe<Scalars['String']['output']>;
};

export type ComponentStyleInput = {
  /** 배경 */
  background?: InputMaybe<Scalars['String']['input']>;
  /** 배경 종류 */
  backgroundType?: InputMaybe<BackgroundType>;
  /** 갭 */
  gap?: InputMaybe<Scalars['String']['input']>;
  /** 높이 */
  height?: InputMaybe<Scalars['String']['input']>;
  /** 패딩 */
  padding?: InputMaybe<Scalars['String']['input']>;
};

/** 컴포넌트 종류 */
export enum ComponentType {
  /** 문의 */
  Inquiry = 'INQUIRY',
  /** 팝업 */
  Popup = 'POPUP',
  /** 섹션 */
  Section = 'SECTION'
}

/** 내용 스타일 */
export type ContentStyleEntity = {
  /** 텍스트 색상 */
  color?: Maybe<Scalars['String']['output']>;
  /** 컴포넌트 ID */
  componentId: Scalars['Int']['output'];
  /** ID */
  id: Scalars['Int']['output'];
  /** 줄 높이 */
  lineHeight?: Maybe<Scalars['Int']['output']>;
  /** 마진 */
  margin?: Maybe<Scalars['String']['output']>;
  /** 모바일 줄 높이 */
  mobileLineHeight?: Maybe<Scalars['Int']['output']>;
  /** 모바일 마진 */
  mobileMargin?: Maybe<Scalars['String']['output']>;
  /** 모바일 텍스트 크기 */
  mobileSize?: Maybe<Scalars['Int']['output']>;
  /** 텍스트 크기 */
  size?: Maybe<Scalars['Int']['output']>;
};

export type ContentStyleInput = {
  /** 텍스트 색상 */
  color?: InputMaybe<Scalars['String']['input']>;
  /** 줄 높이 */
  lineHeight?: InputMaybe<Scalars['Int']['input']>;
  /** 마진 */
  margin?: InputMaybe<Scalars['String']['input']>;
  /** 모바일 줄 높이 */
  mobileLineHeight?: InputMaybe<Scalars['Int']['input']>;
  /** 모바일 마진 */
  mobileMargin?: InputMaybe<Scalars['String']['input']>;
  /** 모바일 텍스트 크기 */
  mobileSize?: InputMaybe<Scalars['Int']['input']>;
  /** 텍스트 크기 */
  size?: InputMaybe<Scalars['Int']['input']>;
};

/** 푸터 */
export type FooterEntity = {
  /** 배경 색상 */
  backgroundColor?: Maybe<Scalars['String']['output']>;
  /** 하단 내용 */
  contentBottom?: Maybe<Scalars['String']['output']>;
  /** 상단 내용 */
  contentTop?: Maybe<Scalars['String']['output']>;
  /** 푸터 타입 */
  footerType: Scalars['Int']['output'];
  /** 고객센터 */
  helpCenter?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 줄 높이 */
  lineHeight?: Maybe<Scalars['Int']['output']>;
  /** 로고 */
  logo?: Maybe<Scalars['String']['output']>;
  /** 하단 패딩 */
  paddingBottom?: Maybe<Scalars['String']['output']>;
  /** 상단 패딩 */
  paddingTop?: Maybe<Scalars['String']['output']>;
  /** 사이트 ID */
  siteId: Scalars['Int']['output'];
  /** 약관 */
  terms?: Maybe<Scalars['String']['output']>;
  /** 텍스트 색상 */
  textColor?: Maybe<Scalars['String']['output']>;
  /** 텍스트 크기 */
  textSize?: Maybe<Scalars['Int']['output']>;
};

/** 헤더 */
export type HeaderEntity = {
  /** 배경 색상 */
  backgroundColor?: Maybe<Scalars['String']['output']>;
  /** 헤더 높이 */
  height?: Maybe<Scalars['Int']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 로고 */
  logo?: Maybe<Scalars['String']['output']>;
  /** 로고 사이즈 */
  logoSize?: Maybe<Scalars['String']['output']>;
  /** 사이트 ID */
  siteId: Scalars['Int']['output'];
  /** 텍스트 색상 */
  textColor?: Maybe<Scalars['String']['output']>;
  /** 텍스트 크기 */
  textSize?: Maybe<Scalars['Int']['output']>;
};

/** 헤더 */
export type MobileHeaderEntity = {
  /** 배경 색상 */
  backgroundColor?: Maybe<Scalars['String']['output']>;
  /** 테두리 */
  border?: Maybe<Scalars['String']['output']>;
  /** 메뉴 버튼 */
  button?: Maybe<Scalars['String']['output']>;
  /** 메뉴 버튼 사이즈 */
  buttonSize?: Maybe<Scalars['String']['output']>;
  /** 헤더 높이 */
  height?: Maybe<Scalars['Int']['output']>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 로고 */
  logo?: Maybe<Scalars['String']['output']>;
  /** 로고 사이즈 */
  logoSize?: Maybe<Scalars['String']['output']>;
  /** 가로 패딩 */
  paddingHorizontal?: Maybe<Scalars['String']['output']>;
  /** 세로 패딩 */
  paddingVertical?: Maybe<Scalars['String']['output']>;
  /** 사이트 ID */
  siteId: Scalars['Int']['output'];
  /** 텍스트 색상 */
  textColor?: Maybe<Scalars['String']['output']>;
  /** 텍스트 크기 */
  textSize?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  /** 사이트 연결 */
  connectSite: Scalars['Boolean']['output'];
  /** 회원가입 */
  createAdmin: Scalars['Boolean']['output'];
  /** 자식 컴포넌트 생성 */
  createChild: Scalars['Boolean']['output'];
  /** 컴포넌트 생성 */
  createComponent: Scalars['Boolean']['output'];
  /** 사이트 생성 */
  createSite: Scalars['Boolean']['output'];
  /** 자식 컴포넌트 삭제 */
  deleteChild: Scalars['Boolean']['output'];
  /** 컴포넌트 삭제 */
  deleteComponent: Scalars['Boolean']['output'];
  /** 사이트 연결 해제 */
  disconnectSite: Scalars['Boolean']['output'];
  /** 로그인 */
  login: Scalars['Boolean']['output'];
  /** 로그아웃 */
  logout: Scalars['Boolean']['output'];
  /** 자식 컴포넌트 업데이트 */
  updateChild: Scalars['Boolean']['output'];
  /** 컴포넌트 수정 */
  updateComponent: Scalars['Boolean']['output'];
  /** 푸터 설정 */
  updateFooter: Scalars['Boolean']['output'];
  /** 헤더 설정 */
  updateHeader: Scalars['Boolean']['output'];
  /** 모바일 헤더 설정 */
  updateMobileHeader: Scalars['Boolean']['output'];
};


export type MutationConnectSiteArgs = {
  domain: Scalars['String']['input'];
};


export type MutationCreateAdminArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateChildArgs = {
  childType: ChildType;
  componentId: Scalars['Int']['input'];
};


export type MutationCreateComponentArgs = {
  componentType: ComponentType;
  name: Scalars['String']['input'];
  siteId: Scalars['Int']['input'];
};


export type MutationCreateSiteArgs = {
  domain: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationDeleteChildArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteComponentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDisconnectSiteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateChildArgs = {
  childStyle?: InputMaybe<ChildStyleInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  id: Scalars['Int']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateComponentArgs = {
  componentMobileStyle?: InputMaybe<ComponentMobileStyleInput>;
  componentStyle?: InputMaybe<ComponentStyleInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  contentStyle?: InputMaybe<ContentStyleInput>;
  id: Scalars['Int']['input'];
  imageFile?: InputMaybe<Scalars['Upload']['input']>;
  mobileImageFile?: InputMaybe<Scalars['Upload']['input']>;
  name: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  titleStyle?: InputMaybe<TitleStyleInput>;
};


export type MutationUpdateFooterArgs = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  contentBottom?: InputMaybe<Scalars['String']['input']>;
  contentTop?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  footerType: Scalars['Int']['input'];
  helpCenter?: InputMaybe<Scalars['String']['input']>;
  lineHeight?: InputMaybe<Scalars['Int']['input']>;
  paddingBottom?: InputMaybe<Scalars['String']['input']>;
  paddingTop?: InputMaybe<Scalars['String']['input']>;
  siteId: Scalars['Int']['input'];
  terms?: InputMaybe<Scalars['String']['input']>;
  textColor?: InputMaybe<Scalars['String']['input']>;
  textSize?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateHeaderArgs = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  file?: InputMaybe<Scalars['Upload']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  logoSize?: InputMaybe<Scalars['String']['input']>;
  siteId: Scalars['Int']['input'];
  textColor?: InputMaybe<Scalars['String']['input']>;
  textSize?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateMobileHeaderArgs = {
  backgroundColor?: InputMaybe<Scalars['String']['input']>;
  border?: InputMaybe<Scalars['String']['input']>;
  buttonFile?: InputMaybe<Scalars['Upload']['input']>;
  buttonSize?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  logoFile?: InputMaybe<Scalars['Upload']['input']>;
  logoSize?: InputMaybe<Scalars['String']['input']>;
  paddingHorizontal?: InputMaybe<Scalars['String']['input']>;
  paddingVertical?: InputMaybe<Scalars['String']['input']>;
  siteId: Scalars['Int']['input'];
  textColor?: InputMaybe<Scalars['String']['input']>;
  textSize?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  /** 관리자 ID로 사이트 목록 조회 */
  findManySite: Array<SiteEntity>;
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
  /** 푸터 */
  footer?: Maybe<FooterEntity>;
  /** 헤더 */
  header?: Maybe<HeaderEntity>;
  /** ID */
  id: Scalars['Int']['output'];
  /** 모바일 헤더 */
  mobileHeader?: Maybe<MobileHeaderEntity>;
  /** 이름 */
  name: Scalars['String']['output'];
};

/** 제목 스타일 */
export type TitleStyleEntity = {
  /** 텍스트 색상 */
  color?: Maybe<Scalars['String']['output']>;
  /** 컴포넌트 ID */
  componentId: Scalars['Float']['output'];
  /** ID */
  id: Scalars['Int']['output'];
  /** 줄 높이 */
  lineHeight?: Maybe<Scalars['Int']['output']>;
  /** 마진 */
  margin?: Maybe<Scalars['String']['output']>;
  /** 모바일 줄 높이 */
  mobileLineHeight?: Maybe<Scalars['Int']['output']>;
  /** 모바일 마진 */
  mobileMargin?: Maybe<Scalars['String']['output']>;
  /** 모바일 텍스트 크기 */
  mobileSize?: Maybe<Scalars['Int']['output']>;
  /** 텍스트 크기 */
  size?: Maybe<Scalars['Int']['output']>;
};

export type TitleStyleInput = {
  /** 텍스트 색상 */
  color?: InputMaybe<Scalars['String']['input']>;
  /** 줄 높이 */
  lineHeight?: InputMaybe<Scalars['Int']['input']>;
  /** 마진 */
  margin?: InputMaybe<Scalars['String']['input']>;
  /** 모바일 줄 높이 */
  mobileLineHeight?: InputMaybe<Scalars['Int']['input']>;
  /** 모바일 마진 */
  mobileMargin?: InputMaybe<Scalars['String']['input']>;
  /** 모바일 텍스트 크기 */
  mobileSize?: InputMaybe<Scalars['Int']['input']>;
  /** 텍스트 크기 */
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type FindOneSiteByDomainQueryVariables = Exact<{
  domain: Scalars['String']['input'];
}>;


export type FindOneSiteByDomainQuery = { findOneSiteByDomain: { id: number, name: string, email: string, domain: string, components?: Array<{ id: number, componentType: ComponentType, name: string, title?: string | null, content?: string | null, isDelete: boolean, siteId: number, componentStyle?: { id: number, height?: string | null, padding?: string | null, gap?: string | null, background?: string | null, backgroundType?: BackgroundType | null, componentId: number } | null, componentMobileStyle?: { id: number, height?: string | null, padding?: string | null, gap?: string | null, background?: string | null, backgroundType?: BackgroundType | null, componentId: number } | null, titleStyle?: { id: number, margin?: string | null, mobileMargin?: string | null, size?: number | null, mobileSize?: number | null, color?: string | null, mobileLineHeight?: number | null, lineHeight?: number | null, componentId: number } | null, contentStyle?: { id: number, margin?: string | null, mobileMargin?: string | null, size?: number | null, mobileSize?: number | null, color?: string | null, mobileLineHeight?: number | null, lineHeight?: number | null, componentId: number } | null, children?: Array<{ id: number, childType: ChildType, title?: string | null, content?: string | null, isDelete: boolean, componentId: number, childStyle?: { id: number, width?: string | null, height?: string | null, margin?: string | null, padding?: string | null, background?: string | null, backgroundType?: BackgroundType | null, border?: string | null, borderRadius?: string | null, childId: number } | null }> | null }> | null, header?: { id: number, logo?: string | null, logoSize?: string | null, height?: number | null, backgroundColor?: string | null, textSize?: number | null, textColor?: string | null, siteId: number } | null, mobileHeader?: { id: number, logo?: string | null, logoSize?: string | null, button?: string | null, buttonSize?: string | null, height?: number | null, paddingHorizontal?: string | null, paddingVertical?: string | null, backgroundColor?: string | null, textSize?: number | null, textColor?: string | null, border?: string | null, siteId: number } | null, footer?: { id: number, footerType: number, logo?: string | null, contentTop?: string | null, helpCenter?: string | null, terms?: string | null, contentBottom?: string | null, backgroundColor?: string | null, paddingTop?: string | null, paddingBottom?: string | null, textSize?: number | null, textColor?: string | null, lineHeight?: number | null, siteId: number } | null } };


export const FindOneSiteByDomainDocument = gql`
    query FindOneSiteByDomain($domain: String!) {
  findOneSiteByDomain(domain: $domain) {
    id
    name
    email
    domain
    components {
      id
      componentType
      name
      title
      content
      isDelete
      siteId
      componentStyle {
        id
        height
        padding
        gap
        background
        backgroundType
        componentId
      }
      componentMobileStyle {
        id
        height
        padding
        gap
        background
        backgroundType
        componentId
      }
      titleStyle {
        id
        margin
        mobileMargin
        size
        mobileSize
        color
        mobileLineHeight
        lineHeight
        componentId
      }
      contentStyle {
        id
        margin
        mobileMargin
        size
        mobileSize
        color
        mobileLineHeight
        lineHeight
        componentId
      }
      children {
        id
        childType
        title
        content
        isDelete
        componentId
        childStyle {
          id
          width
          height
          margin
          padding
          background
          backgroundType
          border
          borderRadius
          childId
        }
      }
    }
    header {
      id
      logo
      logoSize
      height
      backgroundColor
      textSize
      textColor
      siteId
    }
    mobileHeader {
      id
      logo
      logoSize
      button
      buttonSize
      height
      paddingHorizontal
      paddingVertical
      backgroundColor
      textSize
      textColor
      border
      siteId
    }
    footer {
      id
      footerType
      logo
      contentTop
      helpCenter
      terms
      contentBottom
      backgroundColor
      paddingTop
      paddingBottom
      textSize
      textColor
      lineHeight
      siteId
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