import React, { useCallback } from 'react'
import { Box, Button, Stack, Typography } from 'native-piece'

import { usePokemon } from '@/context'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function Pagination() {
  const { pages, total, onPages } = usePokemon()

  const lastPage = useCallback(() => {
    const last = Math.max(pages - 1, 0)
    onPages(last)
  }, [pages, onPages])

  const nextPage = useCallback(() => {
    const page = pages + 1
    if (total >= page + 1) {
      const next = Math.min(page, total)
      onPages(next)
    }
  }, [pages, total, onPages])

  return (
    <Box>
      <Stack
        gap={12}
        alignItems='center'
        selectors={{
          '> button': {
            display: 'flex',
            borderRadius: 50,
            transition: '300ms',
            '&:hover': {
              transform: 'scale(1.04)',
              backgroundColor: 'var(--color-primary)'
            }
          }
        }}
      >
        <Button className='tst-round' onClick={lastPage}>
          <FaArrowLeft color='var(--color-white)' />
        </Button>
        <Typography color='var(--color-white)'>
          {pages + 1} de {total}
        </Typography>
        <Button className='tst-round' onClick={nextPage}>
          <FaArrowRight color='var(--color-white)' />
        </Button>
      </Stack>
    </Box>
  )
}
