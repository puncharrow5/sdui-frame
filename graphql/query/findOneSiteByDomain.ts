import { gql } from "@apollo/client";

export const FIND_ONE_SITE_BY_DOMAIN = gql`
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
