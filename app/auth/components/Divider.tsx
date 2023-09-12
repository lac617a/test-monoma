import React from 'react'
import { Box, Stack, Typography } from 'native-piece'

const AuthDividerC = () => {
  return (
    <Stack gap={12} alignItems='center'>
      <Box flex={1} borderTop='1px solid var(--color-white)' />
      <Typography
        fontWeight={600}
        fontSize={20}
        textAlign='center'
        textTransform='uppercase'
        color='var(--color-white)'
      >o
      </Typography>
      <Box flex={1} borderTop='1px solid var(--color-white)' />
    </Stack>
  )
}

export default AuthDividerC
