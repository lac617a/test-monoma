'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Box, Button, Stack, VStack } from 'native-piece'

import { Avatar } from '@/components'
import { useAuthContext } from '@/context'
import { LOCK, ROUTER } from '@/constants'

const LayoutHeader = () => {
  const router = useRouter()
  const { user } = useAuthContext()

  const [show, setShow] = useState<boolean>(false)

  const handleOnLogout = () => {
    sessionStorage.removeItem(LOCK)
    router.push(ROUTER.LOGIN)
  }

  return (
    <Box position='sticky' top={0} zIndex={10} backgroundColor='var(--color-primary)' padding={20}>
      <Stack justifyContent='space-between' width='100%' alignItems='center'>
        <Image
          priority
          width={100}
          height={40}
          alt='logo-pokemon'
          src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
        />
        {user.username && (
          <Box position='relative' zIndex={10} onClick={() => setShow(prev => !prev)}>
            <Avatar src={user.avatar} title={user.username} />
            {show && (
              <VStack
                className='tst-round'
                position='absolute'
                minWidth={160}
                right={10}
                top={60}
                zIndex={50}
                padding={0}
                overflow='hidden'
                selectors={{
                  '> button': {
                    width: '100%',
                    padding: 10,
                    fontSize: 17,
                    transition: '300ms',
                    fontWeight: 700,
                    color: 'var(--color-third)',
                    backgroundColor: 'transparent',
                    '&:hover': {
                      color: 'var(--color-white)',
                      backgroundColor: 'var(--color-primary-2)'
                    }
                  }
                }}
              >
                <Button onClick={() => router.push(ROUTER.PROFILE)}>Perfil</Button>
                <Button onClick={handleOnLogout}>Cerrar sesión</Button>
              </VStack>
            )}
          </Box>
        )}
      </Stack>
    </Box>
  )
}

export default LayoutHeader
