import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { withAuthSync } from "../utils/auth";
import cookie from "js-cookie";
import Grid from "@material-ui/core/Grid";
import AllMessages from "../components/messages/allMessages";
import AllConversations from "../components/conversations/allConversations";
import CreateMessage from "../components/messages/createMessage";
import CardMedia from "@material-ui/core/CardMedia";
import Router from "next/router";
import Link from "../src/Link";
const useStyles = makeStyles(theme => ({
  box: {
    border: 1,
    background: "rgba(225, 225, 225, 0.3)",
    borderRadius: 8,
    padding: 21,
    height: "100%"
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
function customerChat({ allConversations, allMessages, user }) {
  const classes = useStyles();
  let [conversation, setConversation] = useState();
  return (
    <CardMedia image="/img/tuvilogic_bg.jpg">
      <Container maxWidth="lg" style={{ padding: 13, minHeight: "100vh" }}>
        <Link href="/">Quay lại</Link>

        <Grid container spacing={1}>
          <Grid item xs={12} xl={12} sm={12} md={4} lg={6}>
            <Paper className={classes.box}>
              <Grid container spacing={1}>
                <Grid item xs={12} className={classes.scroll}>
                  <AllMessages conversation={conversation} role="isAdmin" />
                </Grid>
                <Grid item xs={12}>
                  <CreateMessage conversation={conversation} />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} xl={6} sm={6} md={4} lg={3}>
            <Paper className={classes.box}>
              <AllConversations
                user={user}
                onClick={conversation => {
                  setConversation(conversation);
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} xl={6} sm={6} md={4} lg={3}>
            <Paper className={classes.box}>
              <AllConversations user={user} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </CardMedia>
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
    return { allConversations, allMessages, user: { id: id } };
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
