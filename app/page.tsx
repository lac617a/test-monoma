'use client'
import { Box, Stack, VStack } from 'native-piece'
import Card from '@/components/Cards/Card'
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
  return (
    <>
      <ModalPokemonPreview />
      <VStack gap={20} className='tst-background-home'>
        <Stack gap={20} flexWrap='wrap'>
          {pokemons?.length > 0 && pokemons.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </Stack>
        <Box alignSelf='flex-end'>
          <Pagination />
        </Box>
      </VStack>
    </>
  )
}
