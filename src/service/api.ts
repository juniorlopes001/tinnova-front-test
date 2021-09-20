/* eslint-disable @typescript-eslint/no-use-before-define */
import axios from 'axios';

import User from '../components/Users/models/user.model';


export const api = axios.create({
  baseURL: 'https://private-9d65b3-tinnova.apiary-mock.com',
})

export const getData = async (url: string, setData: (data: any) => any) => {
  const response = await api.get(url)
  localStorage.setItem('users', JSON.stringify(response.data));
  localStorage.getItem('users');
  const storedUsers = JSON.parse(localStorage.users)
  setData(storedUsers);
  console.log(storedUsers);
  
}

export const sendData = async (url: string, obj: User) => {
  const parse = JSON.parse(localStorage.users)
  let users = parse;
  localStorage.removeItem('users');
  users.push(obj);
  const localUser = localStorage.setItem('users', JSON.stringify(users));
  console.log('localUsers', localUser);
  
  await api.post(url, obj);
}

