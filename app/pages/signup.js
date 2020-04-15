import { signup } from "../utils/auth";

import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Layout from "../src/Layout";
import LightBoard from "../src/LightBoard";
import request from "../components/config/request";
import { withAuthSync } from "../utils/auth";
import Link from "../src/Link";
import Logo from "../src/logo";
import { Typography } from "@material-ui/core";
function Signup() {
    let [username, setUserName] = useState(false);
    let [password, setPassword] = useState(false);
    let [confirm, setConfirm] = useState(false);
    let [buttonStatus, setButtonStatus] = useState("Đăng ký");
    let [alert, setAlert] = useState(false);
    async function loginButtonClick() {
        setButtonStatus("Vui lòng đợi...");
        if (username.length <= 5)
            setAlert("Tên đăng nhập phải nhiều hơn 5 ký tự.");
        if (password.length <= 7) setAlert("Mật khẩu phải ít nhất 8 kí tự.");
        if (password != confirm) setAlert("Nhập lại mật khẩu không đúng.");
        if (
            username &&
            password &&
            username.length > 5 &&
            password.length > 7 &&
            password == confirm
        ) {
            let response = await request({
                body: {
                    query: `mutation ($username: String, $password: String) {
            createUser(data: { email: $username, password: $password, isCustomer: true }) {
            id
            }
        }`,
                    variables: {
                        username,
                        password,
                    },
                },
            });
            let {
                data: { createUser },
            } = response;
            if (createUser) {
                setButtonStatus("Đăng ký thành công!");
                signup();
            } else {
                setAlert(
                    "Tên đăng nhập có thể bị trùng. Thử lại với tên đăng nhập và mật khẩu khác."
                );
            }
        } else {
            setButtonStatus("Kiểm tra thông tin và thử lại.");
        }
    }
    return (
        <Layout>
            <Container maxWidth="sm">
                <LightBoard>
                    <Grid container spacing={2} justify="center">
                        <Grid item xs={6}>
                            <Logo />
                        </Grid>
                        <form noValidate autoComplete="off">
                            <Grid container justify="center" spacing={1}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        variant="outlined"
                                        id="username"
                                        label="Tên đăng nhập"
                                        onChange={(e) => {
                                            setUserName(e.target.value);
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        variant="outlined"
                                        id="password"
                                        label="Mật khẩu"
                                        type="password"
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        variant="outlined"
                                        id="confirm"
                                        label="Nhập lại mật khẩu"
                                        type="password"
                                        onChange={(e) => {
                                            setConfirm(e.target.value);
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        fullWidth
                                        // variant="outlined"
                                        onClick={async () =>
                                            await loginButtonClick()
                                        }
                                    >
                                        {buttonStatus}
                                    </Button>
                                </Grid>
                                {alert ? (
                                    <Grid item xs={12}>
                                        <Typography>{alert}</Typography>
                                    </Grid>
                                ) : null}
                                <Grid item xs={12}>
                                    <Link href="/login">Đăng nhập</Link>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </LightBoard>

                <Grid style={{ marginTop: 20 }}>
                    <LightBoard>
                        <Grid
                            container
                            display="flex"
                            alignItems="center"
                            direction="column"
                        >
                            <Grid>
                                <label>Đây là trang web dịch vụ</label>
                            </Grid>
                            <Grid>
                                <label>Xin thông cảm vì sự bất tiện này!</label>
                            </Grid>
                            <Grid>
                                <h3>BẢNG GIÁ:</h3>
                            </Grid>
                            <Grid>
                                <ul>
                                    <li>100k/36 lượt check~3 lá số 12 cung</li>
                                    <li>
                                        300k/lượt luận tử vi/ xem chỉ tay + 36
                                        lượt check"
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                    </LightBoard>
                </Grid>
            </Container>
        </Layout>
    );
}
export default Signup;
