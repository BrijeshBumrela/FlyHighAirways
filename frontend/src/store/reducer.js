const initialState = {
    selectedFlightValues : {
        source: '',
        destination: '',
        time: ''
    }
};

const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case 'ADD_FLIGHT_FORM':
            const flightData = { ...action.flightData };

            return {
                ...state,
                selectedFlightValues: flightData
            }
        default:
            return state;
    }
};


export default reducer;