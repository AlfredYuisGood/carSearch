import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID Hrkmmgmk_cw15L5rn9aa4rMYWWuxiyg20vvSUL_w6UM'
    }
});