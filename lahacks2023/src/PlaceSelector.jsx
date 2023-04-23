import AutoComplete from 'react-google-autocomplete';

const PlaceSelector = () => (
    <>
        <AutoComplete
            apiKey='AIzaSyAHKMRiy43YEjcrRkFHpoMzx_M_BJvDUM8'
            onPlaceSelected={(place) => console.log(place)} />
    </>
)

export default PlaceSelector;