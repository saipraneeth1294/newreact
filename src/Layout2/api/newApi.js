import axios from 'axios';

const basURL='https://localhost:44339/api/home/get';

export async function getDetails(){
    return await axios.get(basURL);
}