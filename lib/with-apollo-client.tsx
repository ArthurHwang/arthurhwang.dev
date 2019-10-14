import React from "react";
import initApollo from "./init-apollo";
import Head from "next/head";
import { getDataFromTree } from "react-apollo";
import { isBrowser } from "./isBrowser";
import { NormalizedCacheObject, ApolloClient } from "apollo-boost";

export default (App: any) => {
  return class Apollo extends React.Component {
    static displayName = "withApollo(App)";

    static async getInitialProps(ctx: any) {
      const { Component, router } = ctx;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }
      //@ts-ignore
      const apollo = initApollo();
      if (!isBrowser) {
        try {
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />
          );
        } catch (error) {
          console.error("Error while running `getDataFromTree`", error);
        }
        Head.rewind();
      }

      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState
      };
    }

    apolloClient: ApolloClient<NormalizedCacheObject>;

    constructor(props: any) {
      super(props);
      this.apolloClient = initApollo(props.apolloState);
    }

    render() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  };
};
