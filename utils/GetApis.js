import axios from 'axios';
import baseRoute from './../Routes/GetRoutes';

export const getHandler = async (api)=>{

var {data} = await axios.get(baseRoute + '')
return data
}