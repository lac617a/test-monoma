import React, { FC } from 'react'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'
import { Typography } from 'native-piece'

interface Props {
  text: string;
  href: Url;
}
const LinkTo: FC<Props> = ({ text, href }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <a href={href as string}>
        <Typography>{text}</Typography>
      </a>
    </Link>
  )
}

export default LinkTo
