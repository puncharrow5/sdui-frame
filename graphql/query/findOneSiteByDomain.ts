import { gql } from "@apollo/client";

export const FIND_ONE_SITE_BY_DOMAIN = gql`
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
