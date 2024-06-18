import React from "react";
import { getClient } from "@/config/client";
import { FIND_ONE_SITE_BY_DOMAIN } from "@/graphql/query";
import { Container } from "@/components/Container";

export default async function Home() {
  const client = getClient();

  const { data } = await client.query({
    query: FIND_ONE_SITE_BY_DOMAIN,
    variables: {
      domain: process.env.SITE_DOMAIN!,
    },
    fetchPolicy: "network-only",
  });

  return <Container data={data.findOneSiteByDomain} />;
}
