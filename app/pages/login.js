import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Layout from "../src/Layout";
import LightBoard from "../src/LightBoard";
import request from "../components/config/request";
import { login } from "../utils/auth";
import Link from "../src/Link";
import Logo from "../src/logo";
import Typography from "@material-ui/core/Typography";
function Login() {
  const [username, setUserName] = useState(false);
  const [password, setPassword] = useState(false);
  const [buttonStatus, setButtonStatus] = useState("Đăng nhập");
  async function loginButtonClick() {
    setButtonStatus("Vui lòng đợi...");
    if (username.length > 5 && password.length > 5) {
      let response = await request({
        body: {
          query: `mutation($username: String, $password: String) {
      authenticateUserWithPassword(email: $username, password: $password) {
      token
      item {
          id
          email
          isAdmin
          isSupporter
          isCustomer
      }
      }}`,
          variables: {
            username,
            password
          }
        }
      });

      let {
        data: { authenticateUserWithPassword }
      } = response;
      if (authenticateUserWithPassword) {
        let {
          token,
          item: { id, email, isAdmin, isSupporter, isCustomer }
        } = authenticateUserWithPassword;
        setButtonStatus("Đăng nhập thành công!");
        login({ token, id, email, isAdmin, isSupporter, isCustomer });
      } else {
        setButtonStatus("Tài khoản không tồn tại.");
      }
    } else {
      setButtonStatus("Kiểm tra và thử lại");
    }
  }
  return (
    <Layout>
      <Container maxWidth="sm" style={{ padding: 8 }}>
        <LightBoard>
          <Grid container spacing={1} justify="center">
            <Grid item xs={12} md={10}>
              <Logo />
            </Grid>
            <Grid item>
              <Typography variant="body1" style={{ marginBottom: 34 }}>
                ĐĂNG KÝ TÀI KHOẢN ĐỂ KHÁM PHÁ THẾ GIỚI HUYỀN BÍ
              </Typography>
            </Grid>
            <form noValidate autoComplete="on">
              <Grid container justify="center" spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="username"
                    label="Tên đăng nhập"
                    onChange={e => {
                      setUserName(e.target.value);
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    id="password"
                    label="Mật khẩu"
                    type="password"
                    onChange={e => {
                      setPassword(e.target.value);
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    style={{
                      backgroundColor: "#76552a",
                      color: "#dab857",
                      marginTop: 21,
                      marginBottom: 21
                    }}
                    fullWidth
                    // variant="outlined"
                    onClick={async () => await loginButtonClick()}
                  >
                    {buttonStatus}
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Link href="/signup">Đăng ký</Link>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </LightBoard>
      </Container>
    </Layout>
  );
}
export default Login;
