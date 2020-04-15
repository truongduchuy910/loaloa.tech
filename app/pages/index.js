import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import HomeIcon from "@material-ui/icons/Home";
import fetch from "isomorphic-fetch";
import { request } from "graphql-request";
import Copyright from "../src/Copyright";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Chip from "@material-ui/core/Chip";
import StackGrid from "react-stack-grid";
import CodeIcon from "@material-ui/icons/Code";
import { useState, useEffect } from "react";
import formatMoney from "../utils/formatMoney";
export default function Index({
  allDesigns,
  allSettings,
  allMaintains,
  allTemplates,
  url
}) {
  let [width, setWidth] = useState();
  let [height, setHeight] = useState();
  let [designs, setDesigns] = useState(allDesigns);
  let [settings, setSettings] = useState(allSettings);
  let [maintains, setMaintains] = useState(allMaintains);
  let [price, setPrice] = useState(0);
  let [maintainPrice, setMaintainPrice] = useState(0);
  async function getPrice() {
    let designs_id = [];
    designs.map(design => {
      if (design.choosed) designs_id.push(design.id);
    });
    let settings_id = [];
    settings.map(setting => {
      if (setting.choosed) settings_id.push(setting.id);
    });
    let maintains_id = [];
    maintains.map(maintain => {
      if (maintain.choosed) maintains_id.push(maintain.id);
    });
    let res = await request(
      url,
      `query($designs: [ID], $settings: [ID], $maintains: [ID]) {
  design: allPricings(where: { design_some: { id_in: $designs } }) {
    price
  }
  setting: allPricings(where: { setting_some: { id_in: $settings } }) {
    price
  }
  intergrate: allPricings(
    where: {
      design_some: { id_in: $designs }
      setting_some: { id_in: $settings }
    }
  ) {
    price
  }
  maintain: allPricings(where: { maintain_some: { id_in: $maintains } }) {
    price
  }
}`,
      { designs: designs_id, settings: settings_id, maintains: maintains_id }
    );
    let sum = 0;
    let { design, setting, intergrate, maintain } = res;
    design.map(e => (sum += e.price));
    setting.map(e => (sum += e.price));
    setPrice(sum);
    sum = 0;
    maintain.map(e => (sum += e.price));
    setMaintainPrice(sum);
  }
  useEffect(() => {
    window.addEventListener("resize", setWidth(window.innerWidth));
    window.addEventListener("resize", setHeight(window.innerHeight));
    getPrice();
  });
  return (
    <Grid container spacing={0} justify="center" alignItems="center">
      <Grid item xs={12} style={{ backgroundColor: "#212121" }}>
        <Container maxWidth="lg">
          <Grid item xs={12} container justify="center" alignItems="center">
            <Grid item sm={7} md={6}>
              <Typography
                variant="h5"
                align="center"
                style={{
                  marginTop: 21,
                  marginBottom: 21,
                  color: "white",
                  fontWeight: 800
                }}
              >
                Thiết kế website/app phân khúc phổ thông
              </Typography>
              <Typography variant="body1" align="center" color="secondary">
                Giúp bạn sở hữu một website/app đầy sáng tạo với công nghệ mới
                nhất được hàng triệu người sử dụng.
                <br />
                <CodeIcon color="secondary" />
              </Typography>
              <Typography variant="body1" align="center" color="secondary">
                Hân hạnh được hợp tác!
              </Typography>
            </Grid>
            <Grid item sm={5} md={6}>
              <img
                style={{ width: "100%", padding: 21 }}
                src="/img/development.png"
              />
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#212121"
            fillOpacity="1"
            d="M0,32L120,32C240,32,480,32,720,74.7C960,117,1200,203,1320,245.3L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </Grid>
      <Grid item xs={12} style={{ marginTop: width > 768 ? -75 : 0 }}>
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            color="secondary"
            align="center"
            style={{ marginTop: 21 }}
          >
            GIỚI THIỆU
          </Typography>
          <Typography variant="h5" align="center" style={{ fontWeight: 800 }}>
            Nhanh, Rẻ, Đẹp, Hiện Đại.
            <Typography
              variant="body1"
              color="secondary"
              align="center"
              style={{ marginBottom: 21 }}
            >
              Là những gì chúng tôi có và hy vọng mang lại cho bạn nhiều hơn thế
              nữa.
            </Typography>
          </Typography>
          <Grid item xs={12} container justify="center" alignItems="center">
            {allTemplates.map(template => (
              <Grid item xs={6} sm={6} md={4} lg={2} key={template.id}>
                <img src={template.file.publicUrl} style={{ width: "100%" }} />
              </Grid>
            ))}
          </Grid>
          <Typography
            variant="body2"
            color="secondary"
            align="center"
            style={{ marginTop: 34 }}
          >
            BẠN CÓ YÊU CẦU GÌ?
          </Typography>
          <Typography variant="h5" align="center" style={{ fontWeight: 800 }}>
            Nhấn chọn để báo giá!
          </Typography>
          <Typography variant="body1" color="primary" align="center">
            {formatMoney(price, 0)} - đ
          </Typography>
          <Typography
            variant="body2"
            color="secondary"
            align="center"
            style={{ marginBottom: 21 }}
          >
            {formatMoney(maintainPrice, 0)} - đ / năm
          </Typography>
          <Typography variant="h6" style={{ marginTop: 21 }}>
            Chức năng
          </Typography>
          <Typography variant="body1" color="secondary">
            Chọn các chức năng và thành phần bạn muốn xuất hiện trên website/app
            của mình.
          </Typography>
          {settings.map(setting => (
            <Chip
              key={setting.id}
              style={{ margin: 5 }}
              label={setting.name}
              onClick={() => {
                setting.choosed = !Boolean(setting.choosed);
                let newSettinngs = [...settings];
                setSettings(newSettinngs);
              }}
              color={setting.choosed ? "primary" : "default"}
              variant="outlined"
              size="small"
            />
          ))}
          <Typography variant="h6" style={{ marginTop: 21 }}>
            Giao diện
          </Typography>
          <Typography variant="body1" color="secondary">
            Lựa chọn mức độ, phong cách giao diện.
          </Typography>
          {designs.map(design => (
            <Chip
              key={design.id}
              style={{ margin: 5 }}
              label={design.name}
              onClick={() => {
                design.choosed = !Boolean(design.choosed);
                let newDesigns = [...designs];
                setDesigns(newDesigns);
              }}
              color={design.choosed ? "primary" : "default"}
              variant="outlined"
              size="small"
            />
          ))}
          <Typography variant="h6" style={{ marginTop: 21 }}>
            Duy trì
          </Typography>
          <Typography variant="body1" color="secondary">
            Một website/app có tốc độ tải (load) nhanh giúp nâng cao trải nghiệm
            khách hàng
          </Typography>
          {maintains.map(maintain => (
            <Chip
              key={maintain.id}
              style={{ margin: 5 }}
              label={maintain.name}
              onClick={() => {
                maintain.choosed = !Boolean(maintain.choosed);
                let newMaintain = [...maintains];
                setMaintains(newMaintain);
              }}
              color={maintain.choosed ? "primary" : "default"}
              variant="outlined"
              size="small"
            />
          ))}
          <Typography
            variant="body2"
            color="secondary"
            align="center"
            style={{ marginTop: 34 }}
          >
            <CodeIcon color="secondary" />
          </Typography>
          <Typography variant="h5" align="center" style={{ fontWeight: 800 }}>
            Hoặc chỉ cần gửi bài viết, hình ảnh.
          </Typography>
          <Typography
            variant="body2"
            color="secondary"
            align="center"
            style={{ marginBottom: 13, marginTop: 13 }}
          >
            Loa Loa Teams Sẽ Bố Trí Bài Viết, Hình Ảnh. Sáng Tạo Giao Diện Tương
            Xứng Với Thương Hiệu Của Bạn.
          </Typography>

          <Typography
            variant="body1"
            color="primary"
            align="center"
            style={{ marginBottom: 21 }}
          >
            6.000.000
          </Typography>
        </Container>
      </Grid>

      <Grid
        item
        xs={12}
        container
        style={{ backgroundColor: "#212121", marginTop: 21, padding: 21 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#212121"
            fillOpacity="1"
            d="M0,32L120,32C240,32,480,32,720,74.7C960,117,1200,203,1320,245.3L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
        <Container maxWidth="lg">
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xs={6} sm={5} md={4} lg={3}>
              <img
                style={{ width: "100%", padding: 21 }}
                src="/img/coder.png"
              />
            </Grid>
            <Grid item xs={12} sm={5} md={4} lg={3}>
              <Typography
                variant="h6"
                align="center"
                style={{ color: "white" }}
              >
                Liên Hệ
              </Typography>
              <Typography variant="body1" align="center" color="secondary">
                Trần Ngọc Huy
                <br />
                100 Nguyễn Lương Bằng, Liên Chiểu, Đà Nẵng.
                <br />
                0332813077
                <br />
                truongduchuy910@gmail.com
              </Typography>
              <Typography variant="body1" color="secondary"></Typography>
              <Typography variant="body1" color="secondary"></Typography>
            </Grid>
          </Grid>
          <Copyright />
        </Container>
      </Grid>
    </Grid>
  );
}
Index.getInitialProps = async ctx => {
  var a = "";
  if (process.env.NODE_ENV == "development") a = "http://";
  else a = "https://";
  if (ctx.req) {
    var url = a + ctx.req.headers.host + "/admin/api";
  } else {
    var url = window.location.origin + "/admin/api";
  }
  let response = await request(
    url,
    `query {
  allDesigns {
    id
    name
  }
  allSettings {
    id 
    name 
  }
  allMaintains {
    id
    name 
  }
  allTemplates {
    id
    file {
      publicUrl
    }
  }
}
`
  );
  response.url = url;
  return response;
};
