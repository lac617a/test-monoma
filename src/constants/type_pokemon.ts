const COL_ONE = '-18px'
const COL_TWO = '-77px'
const COL_THREE = '-137px'
const COL_FOURT = '-195px'
const COL_FIVE = '-258px'
const COL_SIXE = '-320px'

const ROW_ONE = '-20px'
const ROW_TWO = '-102px'
const ROW_THREE = '-185px'

const typePokemon: { [key: string]: string } = {
  water: `${COL_ONE} ${ROW_ONE}`,
  fire: `${COL_TWO} ${ROW_ONE}`,
  grass: `${COL_THREE} ${ROW_ONE}`,
  ground: `${COL_FOURT} ${ROW_ONE}`,
  rock: `${COL_FIVE} ${ROW_ONE}`,
  steel: `${COL_SIXE} ${ROW_ONE}`,

  ice: `${COL_ONE} ${ROW_TWO}`,
  electric: `${COL_TWO} ${ROW_TWO}`,
  dragon: `${COL_THREE} ${ROW_TWO}`,
  ghost: `${COL_FOURT} ${ROW_TWO}`,
  psychic: `${COL_FIVE} ${ROW_TWO}`,
  normal: `${COL_SIXE} ${ROW_TWO}`,

  fighting: `${COL_ONE} ${ROW_THREE}`,
  poison: `${COL_TWO} ${ROW_THREE}`,
  bug: `${COL_THREE} ${ROW_THREE}`,
  flying: `${COL_FOURT} ${ROW_THREE}`,
  dark: `${COL_FIVE} ${ROW_THREE}`,
  fairy: `${COL_SIXE} ${ROW_THREE}`
}
export default typePokemon
