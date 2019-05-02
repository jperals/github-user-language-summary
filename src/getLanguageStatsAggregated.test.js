import getLanguageStatsAggregated from './getLanguageStatsAggregated'

describe('getLanguageStatsAggregated', () => {
  it('should return language statistics for a user, aggregated from all the repos', async () => {
    const stats = await getLanguageStatsAggregated(process.env.REACT_APP_TEST_GITHUB_USER)
    expect.assertions(2)
    // We get an array back
    expect(stats instanceof Array).toBe(true)
    // The array is alphabetically sorted after the `name` property
    expect(isAlphabeticallySortedByKey(stats, 'name'))
  })
})

function isAlphabeticallySortedByKey(array, key) {
  for(let i = 1; i < array.length; i++) {
    if (array[i - 1][key] > array[i][key]) {
      return false
    }
  }
  return true
}