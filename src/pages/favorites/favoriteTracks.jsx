import { BlockHeader } from "../../components/basicPage/BlockHeader"
import { Nav } from "../../components/mainWrappers/nav"
import { SkeletonTheme } from "react-loading-skeleton"
import * as S from "../../components/styles/mainMenu/mainMenuStyles"
import PlayListTitle from "../../components/musicPlayer/playListTitle"
import { SideBar } from "../../components/mainWrappers/sidebar"
import PlayListItem from "../../components/musicPlayer/playListItem"
import { useDispatch, useSelector } from "react-redux"
import { getFavoriteTracks, playTrack, setTrack } from "../../store/actions/creators/tracks"
import { useMemo, useState } from "react"
import { useEffect } from "react"
import { selectFavoriteTracks } from "../../store/selectors/tracks"
import { useGetFavoriteTracksQuery } from "../../components/services/playlistApi"
import SearchBar from "../../components/basicPage/search/searchBar"



const FavoriteTracks = ({}) => {
  const { data } = useGetFavoriteTracksQuery();
  const dispatch = useDispatch();
  const favoriteTracksFromStore = useSelector(selectFavoriteTracks);
  console.log("fav tracks", favoriteTracksFromStore);
  
  const [loading, setLoading] = useState(true);
  // получение треков из понравившихся
  useEffect(() => {
    if (data) {
      dispatch(getFavoriteTracks(data));
    }
  }, [data, dispatch]);
  
  // таймер для skeletona
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  
  const handlePlayTrack = (track, index, playlist) => {
    dispatch(setTrack(track, index, playlist));
    dispatch(playTrack());
    console.log("Track Index:", index);
  };

  // Фильтр по вводу в строку поиска
  const [searchText, setSearchText] = useState('')

  const filteredSongs = useMemo(() => {
    let result = [...favoriteTracksFromStore];
    if(searchText !== '') {
      result = result.filter((track) => track.name.toLowerCase().includes(searchText.toLowerCase()));
    }
    return result;
  }, [favoriteTracksFromStore, searchText]);

  

  return (
    <>
      <S.Main>
      <Nav/>
      <S.MainCenterBlock>
      <SearchBar onChange={(value) => setSearchText(value)} />
      <BlockHeader title="Мои треки" />  
      <S.CenterBlockContent > 
      <SkeletonTheme baseColor="#313131" highlightColor="#444">
      <PlayListTitle />
      <S.PlaylistContent>
        {filteredSongs.map((track, index) =>
           (<PlayListItem
                  onClick={() => handlePlayTrack(track)}
                  loading={loading}
                  title={track.name}
                  artist={track.author}
                  album={track.album}
                  subtitle={track.release_date}
                  time={track.duration_in_seconds}
                  key={index}
                  id ={track.id}
                  isFavorite={track.isFavorite}
           /> ))}
      {filteredSongs.length === 0 && 'В этом плейлисте нет треков'}
      </S.PlaylistContent>
      </SkeletonTheme>
      </S.CenterBlockContent>
      </S.MainCenterBlock>
      <SideBar/>
      </S.Main>
    </>
    )
}
  export default FavoriteTracks