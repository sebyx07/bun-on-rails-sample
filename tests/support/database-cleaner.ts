export default function setupDataBaseCleaner(testSuite) {
  testSuite.beforeEach(async () => {
    await databaseCleaner.clean()
  })

  testSuite.afterEach(async () => {
    await databaseCleaner.clean()
  })
}