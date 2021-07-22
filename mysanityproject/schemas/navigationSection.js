/* eslint-disable import/no-anonymous-default-export */
export default {
    name: 'navigation.section',
    type: 'object',
    title: 'Section',
    fields: [
      {
        type: 'reference',
        name: 'target',
        title: 'Landing Page',
        to: [{ type: 'page' }],
        // _weak: true // enable if you don't want reference integrity checks
      },
   
      {
        type: 'string',
        name: 'title',
        title: 'Title',
      },
      {
        type: 'array',
        name: 'links',
        title: 'Links',
        editModal: "fullscreen",
        of: [{ type: 'navigation.link' }],
      },
    ],
  }