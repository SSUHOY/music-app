import {
    SET_PLAYLIST, 
    SET_CURRENT_TRACK,
    NEXT_TRACK,
    PREV_TRACK,
    PAUSE_TRACK,
    SHUFFLE_PLAYLIST,
    PLAY_TRACK,
    LOOP_TRACK,
    GET_FAVORITE_TRACKS,
    TOGGLE_LIKE,
    UPLOAD_TOKENS,
    LOG_OUT_USER,
    LOG_IN_USER,
    DAILY_TRACKS,
    DANCE_HITS,
    INDIE_CHARGE,
    GET_TRACKS_FROM_PLAYLIST,
    GET_SEARCH_TEXT
 } from '../types/tracks';


 export const setTrack = (track, index, playlist) => ({
    type: SET_CURRENT_TRACK,
    payload: {index, track, playlist}
})
 
 export const pauseTrack = () => ({
    type: PAUSE_TRACK
     })


 export const playTrack = () => ({
    type: PLAY_TRACK
    })
    
     
export const setPlaylist = (playlist) => ({
    type: SET_PLAYLIST,
    payload: playlist,
})

export const setIsShuffle = () => ({
    type: SHUFFLE_PLAYLIST
})
    
export const setIsLoop = () => ({
    type: LOOP_TRACK
})

export const nextTrack = (track, index) => ({
    type: NEXT_TRACK,
    payload: {index, track}
})
  
export const prevTrack = (index, track) => ({
    type: PREV_TRACK,
    payload: {index, track}
})

// Плейлисты
export const getFavoriteTracks = (favoriteTracks) => ({
    type: GET_FAVORITE_TRACKS,
    payload: favoriteTracks,
})

export const selectPlaylistCategories = (setPlaylist) => ({
    type: GET_TRACKS_FROM_PLAYLIST,
    payload: setPlaylist,
})
     
export const toggleLike = (index, track) =>({
    type: TOGGLE_LIKE,
    payload: {index, track}
})

export const uploadTokens = (accessToken, refreshToken) => ({
    type: UPLOAD_TOKENS,
    payload: {accessToken, refreshToken}
})

export const logoutUser = () => ({
    type: LOG_OUT_USER
})

export const loginUser = () => ({
    type: LOG_IN_USER
})
