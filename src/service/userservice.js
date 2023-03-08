import axios from "axios";

const RESTUARANT_REST_API_URL='http://localhost:8083/api/restuarant';


class Userservice{
    getDetails(){
        // return fetch(RESTUARANT_REST_API_URL).then((res=>res.json()));
          return axios.get(RESTUARANT_REST_API_URL);
    }
}

export default new Userservice();