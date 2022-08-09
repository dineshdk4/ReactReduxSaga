import * as actions from "../action";

const initialState = {
    mockData: [],
    imageData: [], //this another step,
    statusMessage: "",
    loading: false,
}

export default function appReducer(state = initialState, action) {
    // console.log(action, "___________________")
    switch (action.type) {
        case "FETCH_MOCK_DATA": {
            return {
                ...state,
                loading: true,
            }
        }
        case "FETCH_MOCK_DATA_SUCCESS": {
            return {
                ...state,
                mockData: action.payload,
                statusMessage: "Fetched Succesfully"
            }
        }
        case "FETCH_MOCK_DATA_FAILURE": {
            return {
                ...state,
                mockData: [],
                statusMessage: "Failed"
            }
        }
        default:
            return state
    }
}