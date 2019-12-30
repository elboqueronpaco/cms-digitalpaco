import createAvatar from '../avatar'


describe('#Avatar', () => {
  it('should createAvatar metodo', () => {
    expect(createAvatar('digitalpaco1975@gmail.com')).toBe('6e7896f1663a39bb709ab558085478fc')
  });
})
