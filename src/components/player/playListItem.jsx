import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import * as S  from "../styles/player/playerStyles"

const PlayListItem = ({ title, artist, album, time, item, loading }) => {
    return (
      <S.PlaylistItem>
        <S.PlayListTrack>
          <S.TrackTitle>
            <S.TrackTitleImg>
            {loading ? (
              <Skeleton count={1} />
            ) : (
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
              </S.TrackTitleSvg>
            )}
            </S.TrackTitleImg>
            <S.TrackTitle>
            {loading ? (
              <Skeleton count={1} />
            ) : (
              <S.TrackTitleLink href="http://">
                {' '}
                {item?.title}{' '}
                <S.TrackTitleSpan>
                  {item?.subtitle ? `(${item?.subtitle})` : ''}
                </S.TrackTitleSpan >
              </S.TrackTitleLink>
            )}
            </S.TrackTitle>
          </S.TrackTitle>
          <S.TrackAuthor >
          {loading ? (
            <Skeleton count={1} />
          ) : (
            <S.TrackAuthorLink  href="http://">
              {item?.author}
            </S.TrackAuthorLink>
          )}
          </S.TrackAuthor >
          <S.TrackAlbum className="track__album">
          {loading ? (
            <Skeleton count={1} />
          ) : (
            <S.TrackAlbumLink  href="http://">
              {item?.album}
            </S.TrackAlbumLink>
          )}
          </S.TrackAlbum>
          <S.TrackTimeText>
          {loading ? (
            <Skeleton count={1} />
          ) : (
            <>
              {' '}
              <S.TrackAlbumTimeSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
              </S.TrackAlbumTimeSvg>
              <S.TrackTimeText className="track__time-text">{item?.time}</S.TrackTimeText >
            </>
          )}
          </S.TrackTimeText>
        </S.PlayListTrack>
      </S.PlaylistItem>
    )
  }
  export default PlayListItem
  