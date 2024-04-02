
describe('User', 'model', () => {
  describe('factory', () => {
    it('should create a new user', () => {
      const user = create('user')
      expect(user).toBeInstanceOf(User)
    })
  })
})