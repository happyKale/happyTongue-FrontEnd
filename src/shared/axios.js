import axios from "axios";

const instance = axios.create({
    baseURL : "http://localhost:4000/",
    headers : {
        'content-type' : 'application/json;charset=UTF-8',
        Accept : 'application/json',
    },
});



export const apis = {
    getPost : () => instance.get('posts'),
    getOnePost : () => instance.get('posts?id'),
    getSearchPost : () => instance.get('posr?search={keyword}')
}