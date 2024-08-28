import axios from "axios";
axios.defaults.baseURL = 'https://pixabay.com/api/';


export const fetchPhotos = async (searchedQuery, page) => {
    const axiosOptions = {
        params: {
            q: searchedQuery,
            per_page: 15,
            page: page,
        image_type: 'photo',
        orientation: 'horizontal',
            safesearch: true,
        key: '45535880-f63e8525243c88ed6c06e2baa',
    }
}

    //    return fetch(`${BASE_URL}?key=45535880-f63e8525243c88ed6c06e2baa&${urlParams}`)


       return await axios.get(``, axiosOptions)
 };
