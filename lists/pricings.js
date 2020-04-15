let { Text, Relationship, Integer } = require("@keystonejs/fields");
module.exports = {
  ref: "Pricing",
  config: {
    fields: {
      design: {
        type: Relationship,
        many: true,
        ref: "Design.price"
      },
      setting: {
        type: Relationship,
        many: true,
        ref: "Setting.price"
      },
      maintain: {
        type: Relationship,
        many: true,
        ref: "Maintain.price"
      },
      price: { type: Integer }
    }
  }
};
