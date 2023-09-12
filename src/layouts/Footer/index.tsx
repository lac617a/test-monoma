'use client'
import React from 'react'
import { Box, Typography, VStack } from 'native-piece'

const LayoutFooter = () => {
  return (
    <Box padding={20} backgroundColor='var(--color-white)' borderTop='2px solid var(--background-color)'>
      <VStack alignItems='center'>
        <Typography>
          Creado por Dominyel Rivera <strong>(Yoydev)</strong> con <span title='<3'>❤</span> para <strong>Monoma</strong>. Alojado en <a href='https://vercel.com/' target='_blank' rel='noopener noreferrer'>Vercel</a>.
        </Typography>
        <Typography>
          &copy; Todos los derechos reservados.
        </Typography>
      </VStack>
    </Box>
  )
}

export default LayoutFooter
