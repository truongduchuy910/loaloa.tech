import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";

import { withAuthSync } from "../utils/auth";
import cookie from "js-cookie";
import Layout from "../src/Layout";
import Pager from "@material-ui/core/Paper";
import AllMessages from "../components/messages/allMessages";
import CreateMessage from "../components/messages/createMessage";
import request from "graphql-request";

import Link from "../src/Link";
const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0)
  },
  paper: {
    paddingBottom: 50
  },
  list: {
    marginBottom: theme.spacing(2)
  },
  subheader: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "white",
    boxShadow: "none"
  },
  toolbar: { padding: 13, boder: "none" },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  }
}));

const query = {
  allAdmins: `query {
    allAdmins: allUsers(where: { isAdmin: true }) {
      id
    }
  }`,
  allConversations: `query($user: UserWhereInput) {
    allConversations(where: { members_some: $user }) {
      id
    }
  }`,
  allMessages: `query($conversation: ConversationWhereInput) {
    allMessages(orderBy: "time_ASC", where: { conversation: $conversation }) {
      seller {
        isCustomer
        isSupporter
        isAdmin
        email
        id
      }
      id
      text
      time
    }
  }`,
  createConversation: `mutation($members: [UserWhereUniqueInput]) {
    createConversation(data: { members: { connect: $members } }) {
      id
    }
  }`
};
import Router from "next/router";

function customerChat({ allConversations, allMessages, isAdmin, isSupporter }) {
  const classes = useStyles();
  if (isAdmin == "true") {
    Router.push("/adminChat");
  }
  return (
    <Layout>
      <Link href="/">Quay lại</Link>
      <React.Fragment>
        <CssBaseline />
        <AllMessages
          allMessages={allMessages}
          conversation={allConversations[0]}
          role="isCustomer"
        />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <CreateMessage conversation={allConversations[0]} />}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </Layout>
  );
}
customerChat.getInitialProps = async ({
  res,
  client,
  id,
  email,
  isAdmin,
  isSupporter,
  isCustomer
}) => {
  try {
    const data = await client.request(query.allConversations, {
      user: { id: id }
    });
    let { allConversations } = data;
    if (allConversations.length) {
      var { allMessages } = await client.request(query.allMessages, {
        conversation: { id: allConversations[0].id }
      });
    } else {
      var { allAdmins: members } = await client.request(query.allAdmins);
      members.push({ id: id });
      let {
        createConversation
      } = await client.request(query.createConversation, { members });
      allConversations.push(createConversation);
    }
    return { allConversations, allMessages, isAdmin, isSupporter };
  } catch (error) {
    console.log(error);
    cookie.remove("token");
    client.request(`mutation {
      unauthenticateUser {
        success
      }
    }`);
    if (res) {
      res.writeHead(302, { Location: "/login" });
      res.end();
    }
  }
};
export default withAuthSync(customerChat);
