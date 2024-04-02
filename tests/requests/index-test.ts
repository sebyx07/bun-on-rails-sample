describe('/', 'request', () => {
  describe('GET /', () => {
    it('should return a welcome message', async () => {
      const response = await request.get('/')
      expect(response.status).toBe(200)
      expect(response.body).toContain('Welcome to the Home Page')
    })
  })
})