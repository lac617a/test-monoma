import './styles.css'
import React from 'react'
import Image from 'next/image'
import { Box, Heading, Stack, Typography, VStack } from 'native-piece'

// UITLS
import { PokemonData } from '@/types'
import typePokemon from '@/constants/type_pokemon'

export default function Card({ item }: { item: PokemonData }) {
  const types = item.types.slice(0, 2).map(item => item.type.name).join().replace(',', ' / ')
  const moves = item.moves.slice(0, 2).map(item => item.move.name)

  const typePokemons = typePokemon[item.types[0].type.name]
  return (
    <Box
      flex='1 1 300px'
      borderRadius={12}
      overflow='hidden'
      backgroundColor='var(--color-white)'
    >
      <Box
        height={200}
        maxHeight={200}
        minHeight={200}
        overflow='hidden'
      >
        <Stack position='relative' height='100%'>
          <Box as='figure' width='100%' height='100%'>
            <Box className='tst-pokemon-back'>
              <Image
                width={300}
                height={300}
                loading='lazy'
                alt={item.name}
                src={item.sprites.back_default}
              />
            </Box>
            <Box position='relative' zIndex={2} height='100%'>
              <VStack alignItems='center' justifyContent='center' height='100%'>
                <Image
                  loading='lazy'
                  width={150}
                  height={150}
                  alt={item.name}
                  src={item.sprites.front_default}
                />
                <Stack
                  as='figcaption'
                  zIndex={2}
                  width='100%'
                  paddingInline={12}
                  position='relative'
                  justifyContent='space-between'
                >
                  <Typography fontWeight={700}>{types}</Typography>
                  <Box backgroundColor='var(--color-primary)' borderRadius={50} padding='6px 12px'>
                    <Typography fontSize={12} color='var(--color-white)'>{item.weight} / {item.height}</Typography>
                  </Box>
                </Stack>
              </VStack>
            </Box>
          </Box>
        </Stack>
      </Box>
      <Stack padding={12} justifyContent='space-between'>
        <VStack>
          <Heading>{item.name}</Heading>
          <Stack gap={4}>
            {moves.map((item, index) => (
              <Typography key={index} color='var(--color-secondary)'>#{item}</Typography>
            ))}
          </Stack>
        </VStack>
        <Box className='tst-type-pokemon' backgroundPosition={typePokemons} />
      </Stack>
    </Box>
  )
}
