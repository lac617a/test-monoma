type CommonType = { name: string; url: string }

interface ICommonDataPokemon {
  id: number
  name: string
  order: number
  weight: number
  height: number
  is_default: boolean
  base_experience: number
  location_area_encounters: string
}

export type PokemonPaginationType = {
  next: string
  count: number
  previous: string
  results: CommonType[]
}

export type UserData = {
  email: string
  token: string
  avatar: string
  username: string
}

export type PokemonData = ICommonDataPokemon & {
  past_types: any[]
  forms: CommonType[]
  species: CommonType
  types: {
    slot: number
    type: CommonType
  }[]
  sprites: {
    back_female: null
    back_shiny: string
    front_female: null
    front_shiny: string
    back_default: string
    front_default: string
    back_shiny_female: null
    front_shiny_female: null
  }
  moves: {
    move: CommonType
    version_group_details: {
      level_learned_at: number
      move_learn_method: CommonType
      version_group: CommonType
    }[]
  }[]
  abilities: {
    slot: number
    is_hidden: boolean
    ability: CommonType
  }[]
  game_indices: {
    game_index: number
    version: CommonType
  }[]
  held_items: {
    item: CommonType
    version_details: {
      rarity: number
      version: CommonType
    }[]
  }[]
}

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}
