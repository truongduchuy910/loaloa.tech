import React from "react";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";

export default function Copyright() {
  return (
    <Typography
      style={{ margin: 7 }}
      variant="body2"
      color="secondary"
      align="center"
    >
      {"Copyright © "}
      {new Date().getFullYear()} Loa Loa Teams
      {" All Rights."}
    </Typography>
  );
}
