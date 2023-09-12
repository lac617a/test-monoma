'use client'
import React, {
  FC,
  useMemo,
  useState,
  useEffect,
  useContext,
  createContext,
  PropsWithChildren
} from 'react'

import { AMOUNTPOKEMON, LOCK } from '@/constants'
import { PokemonData, PokemonPaginationType } from '@/types'
import { getPokemon, getPokemonPagination } from '@/services/pokemon.service'
import utils from '@/utils'

type State = {
  pages: number
  total: number
  loading: boolean
  pokemon: PokemonData[]
}

type Actions = {
  onPages: (pages: number) => void
}

type ContextType = State & Actions
const PokemonContext = createContext<ContextType>({} as ContextType)

export const PokemonProvider: FC<PropsWithChildren> = (props) => {
  const [total, setTotal] = useState<number>(0)
  const [pages, setPages] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)
  const [pokemon, setPokemon] = useState<PokemonData[]>([])

  const showPokemon = async() => {
    try {
      setLoading(true)
      utils.scrollTo()
      const data = await getPokemonPagination(AMOUNTPOKEMON, AMOUNTPOKEMON * pages) as PokemonPaginationType
      const promise = data?.results.map(async poke => await getPokemon(poke.url))
      const results = await Promise.all(promise)
      setPokemon(results)
      setTotal(Math.ceil(data?.count / AMOUNTPOKEMON))
      setLoading(false)
    } catch (error) { console.error(error) }
  }

  useEffect(() => {
    const token = sessionStorage.getItem(LOCK)
    if (token) showPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages])

  const values = useMemo(() => {
    return { total, pages, loading, pokemon, onPages: setPages }
  }, [loading, pages, pokemon, total])

  return <PokemonContext.Provider value={values} {...props} />
}

export function usePokemon() {
  const context = useContext(PokemonContext)
  if (!context) throw new Error('usePokemon debe estar dentro del proveedor PokemonContext')
  return context
}
