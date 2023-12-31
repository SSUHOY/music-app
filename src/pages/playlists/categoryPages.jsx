import { BlockHeader } from "../../components/basicPage/BlockHeader"
import { Nav } from "../../components/mainWrappers/nav"
import { SkeletonTheme } from "react-loading-skeleton"
import * as S from "../../components/styles/mainMenu/mainMenuStyles"
import PlayListTitle from "../../components/musicPlayer/playListTitle"
import { SideBar } from "../../components/mainWrappers/sidebar"
import { useParams } from "react-router-dom"
import PlayListItem from "../../components/musicPlayer/playListItem"
import { useDispatch, useSelector } from "react-redux"
import { playTrack, selectPlaylistCategories, setTrack } from "../../store/actions/creators/tracks"
import { useEffect, useMemo } from "react"
import { useState } from "react"
import SearchBar from "../../components/basicPage/search/searchBar"
import { selectPlaylist } from "../../store/selectors/tracks"
import { useGetPlaylistCategoriesQuery } from "../../components/services/playlistApi"

export const Playlist = () => {
    const { section } = useParams()
    const {data} = useGetPlaylistCategoriesQuery(section);
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true);
    
    const fetchCategoriesItems = useSelector(selectPlaylist)

    useEffect(() => {
      if (data) {
        dispatch(selectPlaylistCategories(data.playlist));
      }
    }, [data, dispatch]);
    
    const handlePlayTrack = (track, index, playlist) => {
      dispatch(setTrack(track, index, playlist));
      dispatch(playTrack());
      console.log("Track Index:", index);
    };


      // таймер для skeletona
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  

    // Фильтр по вводу в строку поиска
    const [searchText, setSearchText] = useState('')

    const filteredSongs = useMemo(() => {
      let result = [...fetchCategoriesItems];
      if(searchText !== '') {
        result = result.filter((track) => track.name.toLowerCase().includes(searchText.toLowerCase()));
      }
      return result;
    }, [fetchCategoriesItems, searchText]);
  
  
    
  return (
    <S.Main>
    <Nav active={true} />
    <S.MainCenterBlock>
      <SearchBar onChange={(value) => setSearchText(value)} />
        <BlockHeader
          title={
            (section == 1 && "Классическая музыка") ||
            (section == 2 && "Электронная музыка") ||
            (section == 3 && "Рок-музыка")
          }
        />
      <S.CenterBlockContent>
        <SkeletonTheme baseColor="#313131" highlightColor="#444">
          <PlayListTitle />
          <S.PlaylistContent>
            {filteredSongs.map((track, index) => (
              <PlayListItem
                currentData={fetchCategoriesItems}
                onClick={() => handlePlayTrack(track, index)}
                key={index}
                loading={loading}
                title={track.name}
                artist={track.author}
                album={track.album}
                subtitle={track.release_date}
                time={track.duration_in_seconds}
                id={track.id}
                isFavorite={track.isFavorite}
              />
            ))}
          </S.PlaylistContent>
        </SkeletonTheme>
      </S.CenterBlockContent>
    </S.MainCenterBlock>
    <SideBar />
  </S.Main>
  )
}