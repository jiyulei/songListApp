import { combineReducers } from 'redux';


const songsReducer = () => {
    return [
        {title: "highway to hell", duration: '4:06'},
        {title: "back in black", duration: '3:36'},
        {title: "heros", duration: '5:06'},
        {title: "pink", duration: '5:16'},
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload;
    };

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});