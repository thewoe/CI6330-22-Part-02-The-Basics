import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer qzdM0Toh5b43Othd3NovoVD_DgpTDN10ddTnKLCBQ5rhpMf_63w1qMjehdaBeivZLe7JoGbRylupPHoNqB6NfEYfL_iLqVYu5N_prymck6SW0DrnZwYdeTsVdLBzY3Yx'
    }
});