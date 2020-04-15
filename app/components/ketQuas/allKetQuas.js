import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import LabelIcon from "@material-ui/icons/Label";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
function intersect(A = [], B = []) {
  let inter = false;
  A.forEach(a => {
    B.forEach(b => {
      if (a.id == b.id) inter = true;
    });
  });
  return inter;
}
export default ({ allKetQuas = [] }) => {
  return (
    <Grid container spacing={1}>
      {allKetQuas.map(ketQua => {
        ketQua.ketQua.sort((a, b) =>
          a.chinhTinh.length + a.phuTinh.length <
          b.chinhTinh.length + b.phuTinh.length
            ? 1
            : a.chinhTinh.length + a.phuTinh.length ==
              b.chinhTinh.length + b.phuTinh.length
            ? a.chinhTinh.length < b.chinhTinh.length
              ? 1
              : -1
            : -1
        );

        let existChinhTinhs = [];
        let existPhuTinhs = [];
        return (
          <Grid key={ketQua.id} item xs={12}>
            <Box
              style={{
                backgroundColor: "transparent",
                border: 1,
                borderColor: "rgba(0, 0, 0, 0.3)",
                borderStyle: "solid",
                borderRadius: 8,
                padding: 16
              }}
            >
              <List>
                <ListItem>
                  <ListItemText>tuvilogic.com</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LabelIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        style={{ fontWeight: "bold" }}
                      >{`Cung ${ketQua.cung.name}`}</Typography>
                    }
                  />
                </ListItem>
              </List>
              {ketQua.ketQua.map(giai => {
                let chinhTinhs = giai.chinhTinh
                  .map(tinh => tinh.name)
                  .toString();
                let phuTinhs = giai.phuTinh.map(tinh => tinh.name).toString();

                let available = false;
                if (
                  giai.chinhTinh.length &&
                  !intersect(giai.chinhTinh, existChinhTinhs)
                ) {
                  available = true;
                  existChinhTinhs = existChinhTinhs.concat(giai.chinhTinh);
                }
                if (
                  giai.phuTinh.length &&
                  !intersect(giai.phuTinh, existPhuTinhs)
                ) {
                  available = true;
                  existPhuTinhs = existPhuTinhs.concat(giai.phuTinh);
                }
                if (available) {
                  return (
                    <List component="nav" key={giai.id}>
                      {chinhTinhs ? (
                        <ListItem>
                          <ListItemIcon>
                            <StarIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={`Chính tinh ${chinhTinhs}. `}
                            secondary={giai.giai}
                          />
                        </ListItem>
                      ) : null}
                      {phuTinhs ? (
                        <ListItem>
                          <ListItemIcon>
                            <StarBorderIcon />
                          </ListItemIcon>
                          <ListItemText
                            primary={`Phụ tinh ${phuTinhs}. `}
                            secondary={giai.giai}
                          />
                        </ListItem>
                      ) : null}
                    </List>
                  );
                }
              })}
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};
