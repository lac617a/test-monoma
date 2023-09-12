'use client'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { Button, Stack, VStack } from 'native-piece'

// UTILS
import utils from '@/utils'
import { useFormData } from '@/hooks'
import loginMocks from '@/mocks/login.json'
import { APP_NAME, ROUTER } from '@/constants'

// COMPONENTS
import AuthDividerC from '../components/Divider'
import { LinkTo, InputField } from '@/components'
import { useAuthContext } from '@/context/AuthContext'

const AuthLogin = () => {
  const [hasErrorMail, setHasErrorMail] = useState<boolean>(false)
  const { setterUser } = useAuthContext()
  const router = useRouter()
  const { values, onValues, disabledAll } =
    useFormData({ email: '', password: '' })

  const handleOnSignin = async() => {
    const validatedMail = utils.validatedEmail(values.email)

    const exitingUser = loginMocks.find(item => item.email === values.email)
    if (exitingUser) {
      setHasErrorMail(false)
      setterUser(exitingUser)
      router.push(ROUTER.MAIN)
      return toast.success(`Bienvenido a ${APP_NAME}`)
    }

    toast.error('Credenciales invalidas, por favor inténtelo de nuevo.')
    setHasErrorMail(validatedMail)
  }

  return (
    <VStack gap={12}>
      <AuthDividerC />
      <VStack gap={8}>
        <InputField
          type='email'
          autoComplete='on'
          hasError={hasErrorMail}
          className='tst-input-auth'
          label='Correo electrónico'
          placeholder='Correo electrónico'
          helperText='Correo electrónico invalido'
          onChange={(e) => onValues({ email: e.target.value })}
        />
        <InputField
          secure
          type='password'
          label='Contraseñas'
          placeholder='Contraseñas'
          className='tst-input-auth'
          onChange={(e) => onValues({ password: e.target.value })}
        />
      </VStack>
      <Stack marginTop={12} alignItems='center' justifyContent='space-between'>
        <LinkTo href={ROUTER.FORGOT} text='¿Olvidaste tu contraseña?' />
        <Button
          className='tst-btn tst-btn-auth'
          maxWidth='50%'
          disabled={disabledAll}
          onClick={handleOnSignin}
        >Iniciar
        </Button>
      </Stack>
    </VStack>
  )
}

export default AuthLogin
