import getLanguageStatsRaw from './getLanguageStatsRaw'

// The language statistics from the Github GraphQL API come grouped by repo.
// This function sums up the language statistics across all the user's repos so that we can see the overall language statistics for the user.
export default async (username) => {
  const rawStats = await getLanguageStatsRaw(username)
  const aggregatedLanguageSizeByName = {}
  for (const repo of rawStats) {
    if (!(repo && repo.languages && repo.languages.edges)) {
      continue
    }
    for (const language of repo.languages.edges) {
      const languageName = language.node.name
      const languageSize = language.size
      if (aggregatedLanguageSizeByName[languageName]) {
        aggregatedLanguageSizeByName[languageName] += languageSize
      } else {
        aggregatedLanguageSizeByName[languageName] = languageSize
      }
    }
  }
  // A key-value object was convenient for aggregating the data, but we prefer to return an array, sorted by the language name.
  const sortedStats = Object.keys(aggregatedLanguageSizeByName).sort().map(key => {
      return {
        name: key,
        size: aggregatedLanguageSizeByName[key]
      }
    }
  )
  return sortedStats
}
