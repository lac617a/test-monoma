'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Box, Button, Heading, Stack, Typography, VStack } from 'native-piece'

import { Avatar } from '@/components'
import { useAuthContext } from '@/context'
import LayoutHeader from '@/layouts/Header'
import ListItemEdit from './components/ListItemEdit'

import { FaArrowLeft } from 'react-icons/fa'

const ProfilePage = () => {
  const { user } = useAuthContext()
  const router = useRouter()

  return (
    <>
      <LayoutHeader />
      <Box
        maxWidth={700}
        width='100%'
        marginInline='auto'
        marginBlock={30}
        mediaMd={{ padding: 20, marginInline: 'initial' }}
      >
        <Box className='tst-round'>
          <Button
            display='flex'
            borderRadius={50}
            className='tst-round'
            alignSelf='flex-start'
            onClick={() => router.back()}
          >
            <FaArrowLeft color='var(--color-primary)' />
          </Button>
          <VStack gap={5}>
            <Heading color='var(--color-third)' as='h1'>Mi perfil</Heading>
            <Typography color='var(--color-third)'>
              Añade y edita la información de tu perfil.
            </Typography>
            <VStack gap={20} className='tst-round'>
              <Stack
                gap={10}
                justifyContent='space-between'
                mediaMd={{ flexWrap: 'wrap' }}
              >
                <Avatar src={user.avatar} size={100} />
                <Stack
                  className='tst-round'
                  gap={10}
                  boxShadow='0 8px 16px 0 hsla(199,8%,54%,.3)'
                  mediaMd={{ flexWrap: 'wrap' }}
                >
                  <Typography maxWidth={330}>
                    Tener foto de perfil ayuda a que crezca tu lista de amistades.
                  </Typography>
                  <Button
                    padding={15}
                    minWidth={100}
                    borderRadius={12}
                    height='min-content'
                    color='var(--color-white)'
                    backgroundColor='var(--color-primary)'
                  >Subir foto
                  </Button>
                </Stack>
              </Stack>
              <VStack as='ul' gap={20} className='tst-round'>
                <ListItemEdit title='Nombre' data={user.username} />
                <ListItemEdit title='Contraseña' data={user.username} secure />
                <ListItemEdit title='Email' data={user.email} />
              </VStack>
            </VStack>
          </VStack>
        </Box>
      </Box>
    </>
  )
}

export default ProfilePage
