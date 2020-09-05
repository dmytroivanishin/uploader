const initialState = {
    loading: true,
    error: null,
    photos: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_REQUEST":
            return {
                loading: true,
                error: null,
                photos: state.photos.length ? [...state.photos] : []
            };
        case "GET_ALL_PHOTOS_SUCCESS":
            return {
                loading: false,
                error: null,
                photos: action.payload
            };
        case "GET_ALL_PHOTOS_ERROR":
            return {
                loading: false,
                error: action.payload,
                photos: []
            };
        case "POST_PHOTO_SUCCESS":
            return {
                loading: false,
                error: null,
                photos: [ ...state.photos, action.payload]
            };
        case "POST_PHOTO_ERROR":
            return {
                loading: false,
                error: action.payload,
                photos: [ ...state.photos]
            };
        default: return state;
        
    }
};

export default rootReducer;