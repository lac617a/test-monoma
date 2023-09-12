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
      <Stack gap={12} alignItems='center'>
        <Button
          display='flex'
          borderRadius={50}
          className='tst-round'
          alignSelf='flex-start'
          onClick={lastPage}
        >
          <FaArrowLeft />
        </Button>
        <Typography color='var(--color-white)'>
          {pages + 1} de {total}
        </Typography>
        <Button
          display='flex'
          borderRadius={50}
          className='tst-round'
          alignSelf='flex-start'
          onClick={nextPage}
        >
          <FaArrowRight />
        </Button>
      </Stack>
    </Box>
  )
}
