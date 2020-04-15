let { File, Text, Relationship, Integer } = require("@keystonejs/fields");
let { fileAdapter } = require("../store/index");

module.exports = {
  ref: "Template",
  config: {
    fields: {
      file: {
        type: File,
        adapter: fileAdapter,
        hooks: {
          beforeChange: ({ existingItem = {} }) =>
            fileAdapter.delete(existingItem)
        },
        isRequired: true
      },
      price: {
        type: Integer
      }
    }
  }
};
