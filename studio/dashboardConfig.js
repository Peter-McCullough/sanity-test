export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e9c3910b6c58b71e355d994',
                  title: 'Sanity Studio',
                  name: 'sanity-test-studio-qdy2e5mp',
                  apiId: '99ab4d51-1a65-47a8-ac30-3aeb44a04a40'
                },
                {
                  buildHookId: '5e9c39108e1a563ded81f5ef',
                  title: 'Blog Website',
                  name: 'sanity-test-web-hfzsrath',
                  apiId: 'f9c0a7b9-5e7b-43e8-b91d-267f9b6dd296'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Peter-McCullough/sanity-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-test-web-hfzsrath.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
