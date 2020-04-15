import { request } from "graphql-request";
function Logout() {
  return <h1>OK</h1>;
}
Logout.getInitialProps = async ({ req, res }) => {
  let a = "";
  if (process.env.NODE_ENV == "development") a = "http://";
  else a = "https://";
  if (req) {
    var uri = a + req.headers.host + "/admin/api";
  } else {
    var uri = window.location.origin + "/admin/api";
  }

  let data = await request(
    uri,
    `mutation {
    unauthenticateUser {
      success
    }
  }`
  );
  console.log(data);
  res.writeHead(302, { Location: "/login" });
  res.end();
  return {};
};
export default Logout;
