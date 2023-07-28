import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { ExploreTopics } from "@site/src/components/exploreTopics";
import { GrantArea } from "@site/src/components/grantArea";

import { Hero } from "@site/src/components/homePageHero";
import { Discord } from "../components/discord";
import { Cta } from "../components/cta";
import { Cta2 } from "../components/cta2";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <Hero />
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Koii is Web3, for everyone."
    >
      <HomepageHeader />
      <Cta />

      <Cta2 />
       <GrantArea />
      {/*       <ExploreTopics />  */}
      <Discord />
    </Layout>
  );
}
