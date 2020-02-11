import React, { useMemo } from "react";
import Head from "next/head";
import fetch from "isomorphic-unfetch";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

let apolloClient: any = null;

export function withApollo(PageComponent: any, { ssr = true } = {}) {
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }: any) => {
    const client = useMemo(
      () => apolloClient || initApolloClient(apolloState),
      []
    );
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  if (process.env.NODE_ENV !== "production") {
    const displayName =
      PageComponent.displayName || PageComponent.name || "Component";

    if (displayName === "App") {
      console.warn("This withApollo HOC only works with PageComponents.");
    }
    WithApollo.displayName = `withApollo(${displayName})`;
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (ctx: any) => {
      const { AppTree } = ctx;

      // @ts-ignore
      const apolloClient: any = (ctx.apolloClient = initApolloClient());

      let pageProps = {};
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      }

      if (typeof window === "undefined") {
        if (ctx.res && ctx.res.finished) {
          return pageProps;
        }

        if (ssr) {
          try {
            const { getDataFromTree } = await import("@apollo/react-ssr");
            await getDataFromTree(
              <AppTree
                pageProps={{
                  ...pageProps,
                  apolloClient
                }}
              />
            );
          } catch (error) {
            console.error("Error while running `getDataFromTree`", error);
          }

          Head.rewind();
        }
      }

      const apolloState = apolloClient.cache.extract();

      return {
        ...pageProps,
        apolloState
      };
    };
  }

  return WithApollo;
}

// @ts-ignore
function initApolloClient(initialState) {
  if (typeof window === "undefined") {
    return createApolloClient(initialState);
  }

  // @ts-ignore
  if (!apolloClient) {
    apolloClient = createApolloClient(initialState);
  }

  // @ts-ignore
  return apolloClient;
}

function createApolloClient(initialState = {}) {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: "https://api.github.com/graphql",
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
      },
      credentials: "same-origin",
      fetch
    }),
    cache: new InMemoryCache().restore(initialState)
  });
}
