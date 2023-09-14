export const playlistSelector = (store) => store.player.playlist
export const shufflePlaylistSelector = (store) => store.player.shufflePlaylist
export const selectIsPlaying = (state) => state.player.isPlaying
export const selectAllTracks = (state) => state.player.playlist
export const selectCurrentTrack = (state) => state.player.track
export const selectIsShuffle = (state) => state.player.isShuffle
export const selectCurrentTrackIndex = (state) => state.player.currentTrackIndex
export const selectShuffledTracks = (state) => state.player.shuffledTracks
export const selectIsLoop = (state) => state.player.isLoop
export const selectFavoriteTracks = (state) => state.player.favoriteTracks
console.log(selectFavoriteTracks);