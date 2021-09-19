/* eslint-disable @typescript-eslint/no-use-before-define */
import axios from 'axios';


export const api = axios.create({
  baseURL: 'https://private-9d65b3-tinnova.apiary-mock.com',
})

export const getData = async (url: string, setData: (data: any) => any) => {
  const response = await api.get(url)
  const setUsers = localStorage.setItem('users', JSON.stringify(response.data));
  const localUsers = JSON.parse(localStorage.getItem('users') as any);
  setData(localUsers)
}

export const sendData = async (url: string, obj: any) => {
  let users: any[] = [];
  const getCurrentUsers = JSON.parse(localStorage.getItem('users') as any);
  const newArr = users.push(...getCurrentUsers, obj) as any;

  let localUsers = localStorage.setItem('users', newArr);

  const response = await api.post(url, obj);
} 