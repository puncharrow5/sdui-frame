import { gql } from "@apollo/client";

export const FIND_ONE_SITE_BY_DOMAIN = gql`
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
