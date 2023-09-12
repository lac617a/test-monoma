'use client'
import { Box, Stack, VStack } from 'native-piece'
import Card from '@/components/Cards/Card'
import { Loading, Pagination } from '@/components'
import { usePokemon } from '@/context/PokemonContext'

export default function Home() {
  const { loading, pokemon } = usePokemon()
  return (
    <>
      <Loading DOMLoad={loading} />
      <VStack gap={20} className='tst-background-home'>
        <Stack gap={20} flexWrap='wrap'>
          {pokemon?.length > 0 && pokemon.map(item => (
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
