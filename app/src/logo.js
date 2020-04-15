import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Logo() {
  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <img src="/img/logo.png" style={{ maxWidth: "50%" }} />
      <Typography
        style={{
          fontSize: 18,
          color: "#dab857",
          fontWeight: "bold",
          margin: 15
        }}
      >
        LUẬN GIẢI LÁ SỐ TỬ VI
      </Typography>
    </Grid>
  );
}
