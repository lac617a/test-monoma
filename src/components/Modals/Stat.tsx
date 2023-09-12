import { PokemonData } from '@/types'
import { Box, Typography } from 'native-piece'

function StatComponent({ item }: { item: PokemonData['stats'][0] }) {
  return (
    <Box as='li' className='pokemon-stat'>
      <Typography as='span' fontSize={12} className='stat-name'><b>{item.stat.name}: </b></Typography>
      <Typography as='span' fontSize={12} fontWeight={600} color='var(--color-danger)'>{item.base_stat}</Typography>
    </Box>
  )
}

export default StatComponent
