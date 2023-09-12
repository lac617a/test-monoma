'use client'
import React from 'react'
import type { Metadata } from 'next'
import { useRouter } from 'next/navigation'
import { Box, Button, Heading, VStack } from 'native-piece'

// UTILS
import { ROUTER } from '@/constants'
import METADATA from '@/config/metadata'

// COMPONENTS
import LinkTo from '@/components/Link'
import Network from './components/Network'

// ASSETS
import { FaArrowLeft } from 'react-icons/fa'

export const metadata: Metadata = METADATA

export default function AuthLayout({ children }: React.PropsWithChildren) {
  const router = useRouter()

  return (
    <Box className='tst-background-auth'>
      {/* <Image src={PikachuPng} alt='PIKACHU' width={300} height={200} /> */}
      <VStack
        gap={8}
        maxWidth={500}
        width='100%'
        height='100vh'
        flex='1 1 auto'
        marginBlock={50}
        alignItems='center'
        marginInline='auto'
        justifyContent='center'
      >
        <Button
          display='flex'
          borderRadius={50}
          className='tst-round'
          alignSelf='flex-start'
          onClick={() => router.back()}
        >
          <FaArrowLeft color='white' />
        </Button>
        <Box className='tst-round' width='100%'>
          <VStack gap={18}>
            <Heading fontSize={40} color='var(--color-white)'>
              Iniciar sesión
            </Heading>
            <Network />
            {children}
          </VStack>
        </Box>
        <LinkTo href={ROUTER.LOGIN} text='¿Aun no tienes una cuenta?' />
      </VStack>
    </Box>
  )
}
