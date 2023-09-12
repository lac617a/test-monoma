import React from 'react'
import { Button, Stack, Typography } from 'native-piece'

import { BsDiscord, BsFacebook } from 'react-icons/bs'
import { AiFillGithub, AiOutlineGoogle } from 'react-icons/ai'

const Network = () => {
  return (
    <Stack
      gap={8}
      alignItems='center'
      justifyContent='center'
      selectors={{
        '> button > div > svg': { fill: 'white' },
        '> button > div > p': { color: 'white', fontWeight: 600 }
      }}
    >
      <Button className='tst-btn' backgroundColor='var(--color-primary-2)'>
        <Stack alignItems='center' gap={5}>
          <BsDiscord size={30} />
          <Typography>Discord</Typography>
        </Stack>
      </Button>
      <Button className='tst-btn' backgroundColor='var(--color-danger)'>
        <Stack alignItems='center' gap={5}>
          <AiOutlineGoogle size={30} />
          <Typography>Google</Typography>
        </Stack>
      </Button>
      <Button className='tst-btn' backgroundColor='rgb(59,89,152)'>
        <Stack alignItems='center' gap={5}>
          <BsFacebook size={30} />
          <Typography>Facebook</Typography>
        </Stack>
      </Button>
      <Button className='tst-btn' backgroundColor='rgb(63,63,70)'>
        <Stack alignItems='center' gap={5}>
          <AiFillGithub size={30} />
          <Typography>GitHub</Typography>
        </Stack>
      </Button>
    </Stack>
  )
}

export default Network
