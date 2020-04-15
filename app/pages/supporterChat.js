import { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";

import { withAuthSync } from "../utils/auth";
import cookie from "js-cookie";
import Layout from "../src/Layout";
import AllMessages from "../components/messages/allMessages";
import CreateMessage from "../components/messages/createMessage";

const query = {
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
    }`
};

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

const supporterChat = ({ allConversations, allMessages }) => {
  const classes = useStyles();

  return (
    <Layout>
      <Fragment>
        <CssBaseline />
        <AllMessages
          allMessages={allMessages}
          conversation={allConversations[0]}
        />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <CreateMessage conversation={allConversations[0]} />
            {/* <IconButton edge="start" color="inherit" aria-label="open drawer">
                        <MenuIcon />
                        </IconButton>
                        <Fab
                        color="secondary"
                        aria-label="add"
                        className={classes.fabButton}
                        >
                        <AddIcon />
                        </Fab>
                        <div className={classes.grow} />
                        <IconButton color="inherit">
                        <SearchIcon />
                        </IconButton>
                        <IconButton edge="end" color="inherit">
                        <MoreIcon />
                        </IconButton> */}
          </Toolbar>
        </AppBar>
      </Fragment>
    </Layout>
  );
};

supporterChat.getInitialProps = async ({ res, client, id }) => {
  try {
    const conversationsQueryResult = await client.request(
      query.allConversations,
      {
        user: { id }
      }
    );
    console.log("conversationsQueryResult", conversationsQueryResult);
    const { allConversations } = conversationsQueryResult;

    let allMessages = [];
    if (allConversations.length) {
      const messageQueryResult = await client.request(query.allMessages, {
        conversation: {
          id: allConversations[0].id
        }
      });

      allMessages = messageQueryResult.allMessages;
    }
    return { allConversations, allMessages };
  } catch (error) {
    console.error(error);
    cookie.remove("token");
    client.request(`mutation {
            unauthenticateUser {
                success
            }
        }`);

    // if (res) {
    //     res.writeHead(302, { Location: "/login" });
    //     res.end();
    // }
  }
};

export default withAuthSync(supporterChat);
