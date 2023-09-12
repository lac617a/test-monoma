import React, { FC } from 'react'
import { Button, Stack, Typography, VStack } from 'native-piece'
import { MdVerified } from 'react-icons/md'

interface Props {
  title: string
  data: string
  secure?: boolean
}
const ListItemEdit: FC<Props> = ({ data, title, secure }) => {
  return (
    <Stack as='li' alignItems='center' justifyContent='space-between'>
      <VStack>
        <Typography opacity={0.8}>{title}</Typography>
        <Typography fontWeight={700}>{secure ? '*******' : data}</Typography>
      </VStack>
      {title === 'Email'
        ? (
          <Stack gap={4} alignItems='center' color='var(--color-primary)'>
            <MdVerified />
            <Typography fontSize={18}>Verificado</Typography>
          </Stack>
          )
        : (
          <Button
            padding={15}
            borderRadius={12}
            height='min-content'
            color='var(--color-white)'
            backgroundColor='var(--color-primary)'
          >Cambiar
          </Button>
          )}
    </Stack>
  )
}

export default ListItemEdit
