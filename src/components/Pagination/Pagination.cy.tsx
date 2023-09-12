import React from 'react'
import Pagination from './index'
import { PokemonContext } from '../../context'

const total = 100
describe('<Pagination />', () => {
  it('Renders with pages and total', () => {
    const onClick = cy.stub()
    cy.mount(
      <PokemonContext.Provider value={{ pages: 1, total, onPages: onClick } as any}>
        <Pagination />
      </PokemonContext.Provider>
    )
  })
  it('Renders with pages', () => {
    const onClick = cy.stub()
    cy.mount(
      <PokemonContext.Provider value={{ pages: 10, total: 0, onPages: onClick } as any}>
        <Pagination />
      </PokemonContext.Provider>
    )
  })
  it('Renders with total', () => {
    const onClick = cy.stub()
    cy.mount(
      <PokemonContext.Provider value={{ pages: 1, total, onPages: onClick } as any}>
        <Pagination />
      </PokemonContext.Provider>
    )
  })
  it('Renders with click next', () => {
    const onClick = cy.stub()
    cy.mount(
      <PokemonContext.Provider value={{ pages: 1, total, onPages: onClick } as any}>
        <Pagination />
      </PokemonContext.Provider>
    )
    cy.get('button[data-next]').click()
    cy.get('p[data-total]').should('contain', '2 de 100')
  })
  it('Renders with click previus', () => {
    const onClick = cy.stub()
    let pages = 2
    cy.mount(
      <PokemonContext.Provider value={{ pages, total, onPages: onClick } as any}>
        <Pagination />
      </PokemonContext.Provider>
    )
    cy.get('button[data-prev]').click()
    pages -= 1
    cy.mount(
      <PokemonContext.Provider value={{ pages, total, onPages: onClick } as any}>
        <Pagination />
      </PokemonContext.Provider>
    )
    cy.get('p[data-total]').should('contain', '2 de 100')
  })
})
