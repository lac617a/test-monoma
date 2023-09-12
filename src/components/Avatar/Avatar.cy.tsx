import Avatar from './index'

describe('<Avatar />', () => {
  it('Renders with title', () => {
    cy.mount(
      <Avatar
        src='https://i.ibb.co/SP0FB5f/360-F-64676383-Ldbmhi-NM6-Ypzb3-FM4-PPu-FP9r-He7ri8-Ju.webp'
        title='Test'
      />
    )
  })
  it('Renders without title', () => {
    cy.mount(
      <Avatar
        src='https://i.ibb.co/SP0FB5f/360-F-64676383-Ldbmhi-NM6-Ypzb3-FM4-PPu-FP9r-He7ri8-Ju.webp'
      />
    )
  })
  it('Renders with size', () => {
    cy.mount(
      <Avatar
        src='https://i.ibb.co/SP0FB5f/360-F-64676383-Ldbmhi-NM6-Ypzb3-FM4-PPu-FP9r-He7ri8-Ju.webp'
        title='Test'
        size={100}
      />
    )
  })
})
