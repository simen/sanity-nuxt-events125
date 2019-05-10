export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events125-studio',
                  apiId: 'c5a4af2e-1de2-4f54-a3f4-7b5165e1a9c6'
                },
                {
                  buildHookId: '5cd54d3d7775a0d2e855b00f',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events125',
                  apiId: '9798cb0d-3e27-477c-8bda-5e672fc52770'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-nuxt-events125',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events125.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
