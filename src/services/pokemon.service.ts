import { PokemonPaginationType } from '@/types'

export async function getPokemonPagination(limit = 10, offset = 0) {
  try {
    const url = `${process.env.NEXT_PUBLIC_API}?limit=${limit}&offset=${offset}`
    const response = await fetch(url)
    const data = await response.json()
    return data as PokemonPaginationType
  } catch (error) {
    console.error(error)
  }
}

export async function getPokemon(url: string) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}
