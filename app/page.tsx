'use client'
import { Box, Stack, VStack } from 'native-piece'
import Card from '@/components/Cards/Card'
import LayoutHeader from '@/layouts/Header'
import { ModalPokemonPreview, Pagination } from '@/components'
import { PokemonProvider, usePokemon } from '@/context/PokemonContext'

export default function Home() {
  return (
    <PokemonProvider>
      <Container />
    </PokemonProvider>
  )
}

const Container = () => {
  const { pokemons } = usePokemon()
  const showPokemons = pokemons?.length > 0
  return (
    <>
      <LayoutHeader />
      <ModalPokemonPreview />
      <VStack
        gap={20}
        className='tst-background-home'
        height={!showPokemons ? 'calc(100vh - 90px)' : '100%'}
      >
        <Stack gap={20} flexWrap='wrap'>
          {showPokemons && pokemons.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </Stack>
        {showPokemons && (
          <Box alignSelf='flex-end'>
            <Pagination />
          </Box>
        )}
      </VStack>
    </>
  )
}
