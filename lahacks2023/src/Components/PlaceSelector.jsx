import AutoComplete from 'react-google-autocomplete';
import '../styles.css';

const PlaceSelector = (props) => {
    const parsePlace = (place) => {
        for (let i = 0; i < place.address_components.length; i++) {
            if (place.address_components[i].types.includes("locality")){
                props.setCity(place.address_components[i].long_name);
            } else if (place.address_components[i].types.includes("country")){
                props.setCountry(place.address_components[i].long_name);
            }
        }
        console.log(place.address_components)
        console.log(place.address_components[0])
        console.log(place.address_components[place.address_components.length - 1])
        props.setCity(place.address_components[0].long_name)
        props.setCountry(place.address_components[place.address_components.length - 1].long_name)
        
    }

    return (    
    <>
        <AutoComplete
            apiKey='AIzaSyAHKMRiy43YEjcrRkFHpoMzx_M_BJvDUM8'
            onPlaceSelected={(place) => parsePlace(place)} />
    </>
    )
}
    

export default PlaceSelector;