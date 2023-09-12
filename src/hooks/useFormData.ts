import { useState, useMemo } from 'react'

type Actions = { [key: string]: string | number | boolean }
export function useFormData<T = object>(value: T) {
  const [values, setValues] = useState(value)

  const onValues = (val: Actions) =>
    setValues({ ...values, ...val })

  const disabledAll = useMemo(() =>
    Object.values(values as object).some(item => item === ''), [values])

  return { values, onValues, disabledAll }
}
