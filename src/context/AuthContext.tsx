'use client'
import React, {
  FC,
  useState,
  useEffect,
  useContext,
  createContext,
  PropsWithChildren
} from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { UserData } from '@/types'
import { LOCK, ROUTER } from '../constants'
import loginMocks from '../mocks/login.json'
import { Loading } from '../components/Loading'

type State = {
  user: UserData
  loading: boolean
}

type Actions = {
  setterUser: (user?: UserData) => void
  setterLoading: (status: boolean) => void
}

type ActionType = State & Actions

export const AuthContext = createContext<ActionType>({} as ActionType)

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<UserData>({
    token: '',
    email: '',
    username: '',
    avatar: ''
  })
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()
  const pathname = usePathname()

  const setterLoading = (status: boolean) => setLoading(status)
  const setterUser = (users?: UserData) => {
    sessionStorage.setItem(LOCK, users?.token as string)
    setUser(users as UserData)
  }

  useEffect(() => {
    const token = sessionStorage.getItem(LOCK)
    if (token && user.username === '') {
      const exitingUser = loginMocks.find(item => item.token === token)
      if (exitingUser) {
        setUser(exitingUser)
        router.push(ROUTER.MAIN)
        setLoading(false)
      } else {
        router.replace(ROUTER.LOGIN)
        setLoading(false)
      }
    } else {
      if (user.username === '') {
        router.replace(ROUTER.LOGIN)
      }
      setLoading(false)
    }
    return () => setLoading(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return (
    <AuthContext.Provider value={{ user, loading, setterUser, setterLoading }}>
      <Loading DOMLoad={loading} />
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error(
      'useAuthContext debe estar dentro del proveedor AuthContext'
    )
  }
  return context
}
