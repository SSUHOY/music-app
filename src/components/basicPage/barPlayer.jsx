import PlayerControls from '../player/playerControls'
import TrackPlay from './trackPlay'
import * as S from '../styles/basicPage/basicPageStyles'

const BarPlayer = () => {
  return (
    <S.BarPlayer>
      <PlayerControls />
      <TrackPlay />
    </S.BarPlayer>
  )
}

export default BarPlayer