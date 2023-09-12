import Input from './Input'

describe('<Input />', () => {
  it('Renders with label', () => {
    cy.mount(
      <Input label='Test' />
    )
  })
  it('Renders with secure', () => {
    cy.mount(
      <Input label='Test' secure />
    )
  })
  it('Renders with hasError', () => {
    cy.mount(
      <Input label='Test' hasError helperText='Test help' />
    )
  })
  it('Renders with hasHelper', () => {
    cy.mount(
      <Input hasHelper helperText='Test help' />
    )
  })
  it('Renders with helperText', () => {
    cy.mount(
      <Input hasHelper helperText='Test help' />
    )
  })
  it('Renders without', () => {
    cy.mount(
      <Input />
    )
  })
})
