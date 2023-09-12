import React from 'react'
import Image from 'next/image'
import { Box, Button, Heading, Stack, Typography, VStack } from 'native-piece'

import { usePokemon } from '@/context'
import { IoClose } from 'react-icons/io5'

const ModalPokemonPreview = () => {
  const { selectPokemon, onSelectPokemon } = usePokemon()

  if (!selectPokemon) return null
  const types = selectPokemon?.types.map(item => item.type.name).join().replace(',', ' / ')
  const moves = selectPokemon?.moves.slice(0, 2).map(item => item.move.name).join().replace(',', ' / ')

  const handleOnClose = () => onSelectPokemon(undefined)
  return (
    <VStack
      inset={0}
      zIndex={10}
      position='fixed'
      alignItems='center'
      justifyContent='center'
      backgroundColor='rgba(0,0,0,0.5)'
      mediaSm={{ paddingInline: 10 }}
    >
      <Box
        className='tst-round'
        width='100%'
        padding={0}
        maxWidth={500}
        overflow='hidden'
        marginInline='auto'
      >
        <Button
          position='absolute'
          className='tst-round'
          borderRadius={50}
          display='flex'
          padding={10}
          top={10}
          zIndex={10}
          right={10}
          onClick={handleOnClose}
        >
          <IoClose size={20} />
        </Button>
        <Box position='relative' zIndex={2} height='100%'>
          <VStack alignItems='center' justifyContent='space-between' height='100%'>
            <Heading
              top='15%'
              zIndex={-1}
              opacity={0.3}
              fontSize={90}
              position='absolute'
              color='var(--color-third)'
              transform='rotate(-20deg)'
            >{selectPokemon?.name}
            </Heading>
            <Image
              loading='eager'
              unoptimized
              width={250}
              height={250}
              alt={selectPokemon?.name}
              src={selectPokemon?.sprites.front_default || selectPokemon?.sprites.front_shiny}
            />
            <Stack as='figcaption' className='tst-card-figcation'>
              <VStack as='ul' selectors={{ ':is(h3, p)': { color: 'var(--color-third)' } }}>
                <Heading as='h3'>{selectPokemon?.name}</Heading>
                <Typography fontWeight={700}>Tipo: {types}</Typography>
                <Typography fontWeight={700}>Movimiento: {moves}</Typography>
              </VStack>
              <Box backgroundColor='var(--color-primary)' borderRadius={10} padding='6px 16px' height='min-content'>
                <Typography fontSize={12} color='var(--color-white)'>Peso: {selectPokemon?.weight.toFixed(1)}</Typography>
                <Typography fontSize={12} color='var(--color-white)'>Alto: {selectPokemon?.height.toFixed(1)}</Typography>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </VStack>
  )
}

export default ModalPokemonPreview
