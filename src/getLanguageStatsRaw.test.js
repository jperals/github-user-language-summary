import getLanguageStatsRaw from './getLanguageStatsRaw'

describe('getLanguageStatsRaw', () => {
  it('returns language stats for a specific user, divided by repo', async () => {
    const stats = await getLanguageStatsRaw(process.env.REACT_APP_TEST_GITHUB_USER)
    expect.assertions(1)
    expect(stats).toBeInstanceOf(Array)
  })
})
