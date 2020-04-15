let { Text, Checkbox, Password } = require("@keystonejs/fields");
module.exports = {
  ref: "User",
  config: {
    fields: {
      email: {
        type: Text,
        isUnique: true,
        isRequired: true,
        label: "Tài khoản"
      },
      isAdmin: { type: Checkbox },
      password: {
        type: Password,
        label: "Mật khẩu"
      }
    }
  }
};
