/**
 * @fileoverview Rule to prevent importing the entirety of huge packages.
 * @author Mouad Debbar
 */
"use strict"

module.exports = {
  meta: {
    docs: {
      description: "prevent unnecessary full import",
      category: "Possible increase in bundle size",
      recommended: false,
    },
    schema: [
      {
        'type': 'array',
      },
    ],
  },
  create: function(context) {
    const packages = context.options[0] || []
    return {
      ImportDeclaration(node) {
        const name = node.source.value
        if (packages.indexOf(name) !== -1) {
          context.report(node.source, `Importing the entire "${name}" library is not permitted, please import the specific functions you need`)
        }
      },
    }
  },
}
