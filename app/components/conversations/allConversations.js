import { useEffect, useState } from "react";
import Pager from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import request from "../config/request";
const query = {
  allConversations: `query($user: UserWhereInput) {
        allConversations(where: { members_some: $user }) {
          id
          members (where: { isSupporter: null, AND: { isAdmin: null } }) {
              id
              email
          }
        }
      }`
};

export default function allConversations({ user, onClick }) {
  let [conversations, setConversations] = useState([]);
  let counter;
  useEffect(() => {
    counter = setInterval(async () => {
      let {
        data: { allConversations }
      } = await request({
        body: { query: query.allConversations, variables: { user } }
      });
      setConversations(allConversations);
    }, 2020);
    return () => {
      clearInterval(counter);
    };
  });
  if (conversations.length) {
    return (
      <List>
        {conversations.map(conversation => {
          return (
            <ListItem
              button
              key={conversation.id}
              onClick={() => onClick({ id: conversation.id })}
            >
              <ListItemText
                primary={conversation.members
                  .map(conversation => conversation.email)
                  .toString()}
              />
            </ListItem>
          );
        })}
      </List>
    );
  } else return <div>...</div>;
}
