let { Keystone } = require("@keystonejs/keystone");
let { GraphQLApp } = require("@keystonejs/app-graphql");
let { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { StaticApp } = require("@keystonejs/app-static");
let { MongooseAdapter } = require("@keystonejs/adapter-mongoose");
const { NextApp } = require("@keystonejs/app-next");

let keystone = new Keystone({
  secureCookies: false,
  name: "tuvi",
  adapter: new MongooseAdapter({
    mongoUri:
      "mongodb://loaloateam:Loaloa.Media@139.180.214.47:27017/loaloateam"
  }),
  defaultAdapter: "lists",
  onConnect: require("./onConnect")
});

const fs = require("fs");
const path = require("path");
let files = fs.readdirSync("./lists");
files.forEach(file => {
  if (path.extname(file) === ".js") {
    let list = require(`./lists/${file}`);
    keystone.createList(list.ref, list.config);
  }
});

let { PasswordAuthStrategy } = require("@keystonejs/auth-password");

let authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User"
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      enableDefaultRoute: false,
      authStrategy
    }),
    new NextApp({ dir: "app" })
  ],
  configureExpress: app => {
    let path = require("path");
    app.use(require("express").static(path.join(path.resolve(), "store")));
  }
};
