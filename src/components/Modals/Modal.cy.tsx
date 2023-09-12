import Modal from './Pokemon'
import { PokemonContext } from '../../context'
import pokemonJson from '../../mocks/pokemon.json'
import { PokemonData } from '@/types'

describe('<Modal />', () => {
  it('Renders with Pokemon', () => {
    cy.mount(
      <PokemonContext.Provider value={{ selectPokemon: pokemonJson as PokemonData } as any}>
        <Modal />
      </PokemonContext.Provider>
    )
  })
  it('Renders without Pokemon', () => {
    cy.mount(
      <PokemonContext.Provider value={{ selectPokemon: undefined } as any}>
        <Modal />
      </PokemonContext.Provider>
    )
  })
})
