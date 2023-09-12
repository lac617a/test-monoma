import { PokemonData } from '@/types'
import Card from './Card'
import pokemonJson from '../../mocks/pokemon.json'
import { PokemonProvider } from '../../context'

const mocksItems = pokemonJson

describe('<Card />', () => {
  it('Renders with title', () => {
    cy.mount(
      <PokemonProvider>
        <Card item={mocksItems as PokemonData} />
      </PokemonProvider>
    )
  })
  it('Renders without items', () => {
    cy.mount(
      <PokemonProvider>
        <Card item={{} as any} />
      </PokemonProvider>
    )
  })
})
