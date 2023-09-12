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

import utils from '@/utils'
import { useAuthContext } from '.'
import { AMOUNTPOKEMON, LOCK } from '@/constants'
import { PokemonData, PokemonPaginationType } from '@/types'
import { getPokemon, getPokemonPagination } from '@/services/pokemon.service'

type State = {
  pages: number
  total: number
  loading: boolean
  pokemons: PokemonData[]
  selectPokemon: PokemonData
}

type Actions = {
  onPages: (pages: number) => void
  onSelectPokemon: (pages: PokemonData | undefined) => void
}

type ContextType = State & Actions
export const PokemonContext = createContext<ContextType>({} as ContextType)

export const PokemonProvider: FC<PropsWithChildren> = (props) => {
  const [total, setTotal] = useState<number>(0)
  const [pages, setPages] = useState<number>(0)
  const [pokemons, setPokemons] = useState<PokemonData[]>([])
  const [selectPokemon, setSelectPokemon] = useState<PokemonData>(pokemons[0])

  const { loading, setterLoading } = useAuthContext()

  const onSelectPokemon = (pokemons?: PokemonData) =>
    setSelectPokemon(pokemons as PokemonData)

  const showPokemon = async() => {
    try {
      setterLoading(true)
      utils.scrollTo()
      const data = await getPokemonPagination(AMOUNTPOKEMON, AMOUNTPOKEMON * pages) as PokemonPaginationType
      const promise = data?.results.map(async poke => await getPokemon(poke.url))
      const results = await Promise.all(promise)
      setPokemons(results)
      setTotal(Math.ceil(data?.count / AMOUNTPOKEMON))
      setterLoading(false)
    } catch (error) { console.error(error) }
  }

  useEffect(() => {
    const token = sessionStorage.getItem(LOCK)
    if (token) showPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pages])

  const values = useMemo(() => {
    return {
      total,
      pages,
      pokemons,
      loading,
      onSelectPokemon,
      onPages: setPages,
      selectPokemon: selectPokemon as PokemonData
    }
  }, [total, pages, pokemons, loading, selectPokemon])

  return <PokemonContext.Provider value={values} {...props} />
}

export function usePokemon() {
  const context = useContext(PokemonContext)
  if (!context) throw new Error('usePokemon debe estar dentro del proveedor PokemonContext')
  return context
}
