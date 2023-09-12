import { Loading } from './Loading'

describe('<Loading />', () => {
  it('Renders with DOMLoad', () => {
    cy.mount(<Loading DOMLoad />)
  })
  it('Renders without DOMLoad', () => {
    cy.mount(<Loading DOMLoad={false} />)
  })
})