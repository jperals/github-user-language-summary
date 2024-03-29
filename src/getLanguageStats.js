import { get } from './apiRequest'
import getUserRepoData from './getUserRepoData'

// The language statistics from the Github GraphQL API come grouped by repo.
// This function sums up the language statistics across all the user's repos so that we can see the overall language statistics for the user.
export default async (username) => {
  const userRepos = await getUserRepoData(username)
  const aggregatedLanguageSizeByName = {}
  const requests = []
  for (const repo of userRepos) {
    if (!(repo && repo.languages_url && !repo.fork)) {
      continue
    }
    requests.push(get(repo.languages_url))
  }
  // Use Promise.all to fetch data from the different URLs in parallel.
  return Promise.all(requests)
    .then(resultsArray => {
      for (const dataSet of resultsArray) {
        combineLanguages(aggregatedLanguageSizeByName, dataSet)
      }
      // A key-value object was convenient for aggregating the data, but we prefer to return an array, sorted by the language size.
      const sortedStats = Object.keys(aggregatedLanguageSizeByName).map(key => {
        return {
          name: key,
          size: aggregatedLanguageSizeByName[key]
        }
      })
      sortedStats.sort((a, b) => b.size - a.size)
      return sortedStats
    })
}

// Combine new data with the existing data.
function combineLanguages(oldData, newData) {
  for (const key in newData) {
    if (typeof oldData[key] === 'undefined') {
      oldData[key] = newData[key]
    } else {
      oldData[key] += newData[key]
    }
  }
}
