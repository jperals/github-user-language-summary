const graphql = require('@octokit/graphql').defaults({
  headers: {
    authorization: `token ${process.env.REACT_APP_GITHUB_GRAPHQL_API_TOKEN}`
  }
})

// Returns language stats for a specific user, divided by repo
// (i.e, not aggregated)

const query = `query stats($username: String!) {
  user(login: $username) {
    repositories(first: 100) {
      nodes {
        languages(first: 100) {
          edges {
            node {
              name
            },
            size
          }
        }
      }
    }
  }
}`

module.exports = async function (username) {
  console.log(graphql)
  const stats = await graphql({
    query,
    username
  })
  try {
    return stats.user.repositories.nodes
  } catch(error) {
    // Fail in a controlled way if the path `languageStats.user.repositories.nodes` is not traversable.
    // This should result in a rejected promise, see
    // https://stackoverflow.com/questions/42453683/how-to-reject-in-async-await-syntax
    throw new Error(404)
  }
}
