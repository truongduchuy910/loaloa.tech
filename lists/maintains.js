let { Text, Relationship } = require("@keystonejs/fields");
module.exports = {
  ref: "Maintain",
  config: {
    fields: {
      name: {
        type: Text
      },
      price: {
        type: Relationship,
        ref: "Pricing.maintain"
      }
    }
  }
};
