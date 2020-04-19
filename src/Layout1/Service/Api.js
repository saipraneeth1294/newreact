import axios from 'axios';
import { Component } from 'react';
export default class Api {
   

static async  NewService(callBack){
  let headers={
    'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
  };
  // await axios.post(`https://jsonplaceholder.typicode.com/posts`,{headers})
  //           .then(res=>callBack(res.data,null))
  //           .catch(er=>null);
  await axios({
    method: 'post',
    url: `https://jsonplaceholder.typicode.com/posts`,
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>JSON.stringify(response))
  .then(json=>{console.log(json); callBack(json)});
}
};
