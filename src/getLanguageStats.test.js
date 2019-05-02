import getLanguageStats from './getLanguageStats'

describe('getLanguageStats', () => {
  it('should return language statistics for a user, aggregated from all the repos', async () => {
    // Increase default timeout as this request can take some time, especially for users with many repos.
    jest.setTimeout(60000)
    const stats = await getLanguageStats(process.env.REACT_APP_TEST_GITHUB_USER)
    expect.assertions(2)
    // We get an array back
    expect(stats).toBeInstanceOf(Array)
    // The array is alphabetically sorted after the `name` property
    expect(isAlphabeticallySortedByKey(stats, 'name')).toBe(true)
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
