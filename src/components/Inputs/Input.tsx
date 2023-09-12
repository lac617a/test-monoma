import React, { FC, useState, InputHTMLAttributes, useMemo } from 'react'
import { Button, Stack, Typography, VStack } from 'native-piece'
import utils from '@/utils'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  secure?: boolean;
  hasError?: boolean;
  hasHelper?: boolean;
  helperText?: string;
}

const InputField: FC<Props> = (props) => {
  const {
    name,
    label,
    secure,
    hasError,
    hasHelper,
    className,
    helperText,
    ...rest
  } = props
  const [type, setType] = useState(props.type)

  const classNames = utils.classNames(`tst-input ${className}`)

  const helperRenderer = () => {
    if (hasError) return <Typography fontSize={12} fontWeight={700} color='var(--color-danger)'>{helperText}</Typography>
    if (hasHelper) return <Typography fontSize={12} fontWeight={700}>{helperText}</Typography>
    return null
  }

  const secureRenderer = useMemo(
    () =>
      secure
        ? (
          <Button
            tabIndex={-1}
            overflow='initial'
            backgroundColor='transparent'
            onClick={() =>
              type === 'password' ? setType('text') : setType('password')}
          >
            <Stack>
              {type === 'password'
                ? (
                  <AiOutlineEyeInvisible size={20} />
                  )
                : (
                  <AiOutlineEye size={20} />
                  )}
            </Stack>
          </Button>
          )
        : null,
    [secure, type]
  )

  return (
    <VStack gap={5} width='100%'>
      <label className='tst-input-label' htmlFor={name}>{label}</label>
      <Stack className='tst-input-wrap'>
        <input
          {...rest}
          id={name}
          type={type || 'text'}
          className={classNames}
        />
        {secureRenderer}
      </Stack>
      {helperRenderer()}
    </VStack>
  )
}

export default InputField
