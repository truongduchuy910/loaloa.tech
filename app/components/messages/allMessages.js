import { useEffect, useState, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Pager from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import request from "../config/request";
import Card from "@material-ui/core/Card";
const query = {
  allMessages: `query($conversation: ConversationWhereInput) {
    allMessages(
      orderBy: "time_ASC", 
      where: { conversation: $conversation },
      first: 100) {
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

export default function allMessages({ conversation, role }) {
  let [messages, setMessage] = useState([]);
  const divRef = useRef(null);

  let counter;
  useEffect(() => {
    counter = setInterval(async () => {
      if (conversation) {
        let {
          data: { allMessages }
        } = await request({
          body: { query: query.allMessages, variables: { conversation } }
        });

        // divRef.current.scrollIntoView({ behavior: "smooth" });

        setMessage(allMessages);
      }
    }, 1000);
    return () => {
      clearInterval(counter);
    };
  });
  if (messages.length) {
    return (
      <Box style={{ overflowY: "scroll", padding: 8, maxHeight: "85vh" }}>
        {messages.map(message => {
          return (
            <Grid
              key={message.id}
              container
              spacing={1}
              justify={message.seller[role] ? "flex-end" : "flex-start"}
            >
              <Grid item>
                <Pager style={{ padding: 5, borderRadius: 8 }}>
                  <Typography>{message.text}</Typography>
                </Pager>
              </Grid>
            </Grid>
          );
        })}
        <div ref={divRef}></div>
      </Box>
    );
  } else return <div ref={divRef}>Đang tải...</div>;
}
