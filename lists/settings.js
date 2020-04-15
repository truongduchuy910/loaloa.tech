let { Text, Relationship } = require("@keystonejs/fields");
module.exports = {
  ref: "Setting",
  config: {
    fields: {
      name: {
        type: Text
      },
      price: {
        type: Relationship,
        ref: "Pricing.setting"
      }
    }
  }
};
