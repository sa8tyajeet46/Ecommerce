import axios from 'axios';
const instance=axios.create({
    baseURL:"https://ecommerce-11111.herokuapp.com/"
});
export default instance;