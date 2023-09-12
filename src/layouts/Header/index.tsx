import React from 'react'
import Image from 'next/image'
import { Box } from 'native-piece'

const LayoutHeader = () => {
  return (
    <Box backgroundColor='var(--color-primary)' padding={10}>
      <Image
        src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
        alt='logo-pokemon'
        width={100}
        priority
        height={40}
      />
    </Box>
  )
}

export default LayoutHeader
