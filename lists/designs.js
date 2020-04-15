let { Text, Relationship } = require("@keystonejs/fields");
module.exports = {
  ref: "Design",
  config: {
    fields: {
      name: {
        type: Text
      },
      price: {
        type: Relationship,
        ref: "Pricing.design"
      }
    }
  }
};
