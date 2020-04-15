import Router from "next/router";
import nextCookie from "next-cookies";
import cookie from "js-cookie";
import { GraphQLClient } from "graphql-request";
import { Component } from "react";
export const login = ({
  token,
  id,
  email,
  isAdmin,
  isSupporter,
  isCustomer
}) => {
  cookie.set("id", id);
  cookie.set("email", email);
  cookie.set("isAdmin", isAdmin);
  cookie.set("isSupporter", isSupporter);
  cookie.set("isCustomer", isCustomer);
  cookie.set("token", token);

  Router.push("/");
};
export const signup = () => {
  Router.push("/login");
};
export const auth = ctx => {
  const { token, id, isAdmin, isSupporter, isCustomer, email } = nextCookie(
    ctx
  );
  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: "/login" });
    ctx.res.end();
    return;
  }

  if (!token) {
    Router.push("/login");
  }

  return { token, id, isAdmin, isSupporter, isCustomer, email };
};

const getDisplayName = Component =>
  Component.displayName || Component.name || "Component";

export const withAuthSync = WrappedComponent =>
  class extends Component {
    static displayName = `withAuthSync(${getDisplayName(WrappedComponent)})`;

    static async getInitialProps(ctx) {
      const { token, id, isAdmin, isSupporter, isCustomer, email } = auth(ctx);
      let a = "";
      if (process.env.NODE_ENV == "development") a = "http://";
      else a = "https://";
      if (ctx.req) {
        var uri = a + ctx.req.headers.host + "/admin/api";
      } else {
        var uri = window.location.origin + "/admin/api";
      }

      const client = new GraphQLClient(uri, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      ctx.client = client;
      ctx.id = id;
      ctx.isAdmin = isAdmin;
      ctx.isSupporter = isSupporter;
      ctx.isCustomer = isCustomer;
      ctx.email = email;
      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx));

      return {
        ...componentProps,
        client,
        token,
        id,
        isAdmin,
        isSupporter,
        isCustomer,
        email
      };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
