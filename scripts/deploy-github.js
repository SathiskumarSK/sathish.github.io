const ghpages = require('gh-pages')

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/SathiskumarSK/Sathish.git',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
