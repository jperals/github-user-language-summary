const graphql = require('@octokit/graphql')

// Returns language stats for a specific user, divided by repo
// (i.e, not aggregated)
export default async (username) => {
  const stats = await graphql(`query stats($username: String!) {
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
    }`,
    {
      username,
      headers: {
        authorization: `token ${process.env.REACT_APP_GITHUB_GRAPHQL_API_TOKEN}`
      }
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
