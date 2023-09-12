import LinkTo from './index'
import { ROUTER } from '../../constants'

describe('<LinkTo />', () => {
  it('Renders with href', () => {
    cy.mount(
      <LinkTo href={ROUTER.MAIN} text='' />
    )
  })
  it('Renders with href and text', () => {
    cy.mount(
      <LinkTo href={ROUTER.MAIN} text='Home' />
    )
  })
})
