import React, { FC } from 'react'
import Image from 'next/image'
import { Stack, Typography } from 'native-piece'

interface Props {
  src: string;
  title?: string;
  size?: number
}
const Avatar: FC<Props> = ({ src, size, title }) => {
  const sizes = size || 50
  return (
    <Stack gap={10} alignItems='center'>
      <Stack borderRadius={50} overflow='hidden'>
        <Image src={src} alt='avatar' width={sizes} height={sizes} />
      </Stack>
      {title && (
        <Typography fontWeight={700} color='var(--color-white)'>
          {title}
        </Typography>
      )}
    </Stack>
  )
}

export default Avatar
