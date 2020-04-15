import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SendIcon from "@material-ui/icons/Send";
import DirectionsIcon from "@material-ui/icons/Directions";
import { useState } from "react";
import request from "../config/request";
const query = {
  createMessage: `mutation($text: String, $conversation: ConversationWhereUniqueInput) {
    createMessage(
      data: { text: $text, conversation: { connect: $conversation } }
    ) {
      id
    }
  }`
};
const useStyles = makeStyles(theme => ({
  root: {
    padding: "1px 2px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    borderRadius: 8
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 8
  },
  divider: {
    height: 21,
    margin: 3
  }
}));
export default function createMessage({ conversation }) {
  const classes = useStyles();
  let [text, setText] = useState();
  let [defaultValue, setDefaultValue] = useState();
  async function createMessageClick() {
    if (text) {
      let { data } = await request({
        body: {
          query: query.createMessage,
          variables: { text, conversation }
        }
      });
      console.log(data);
      setText("");
    }
  }
  return (
    <Paper
      className={classes.root}
      onKeyPress={async event => {
        if (event.key == "Enter") await createMessageClick();
      }}
    >
      <InputBase
        className={classes.input}
        placeholder="Nhập tin nhắn"
        onChange={e => setText(e.target.value)}
        inputProps={{ "aria-label": "Nhập tin nhắn" }}
        value={text ? text : ""}
      />

      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        onClick={async () => await createMessageClick()}
        color="primary"
        className={classes.iconButton}
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
