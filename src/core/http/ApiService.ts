import { AxiosRequestConfig } from 'axios'
import { Config } from '../config'
import { HttpClient } from './http'

const parseUrl = (path: string) => {
  return `${Config.apiUrl}/${path}`
}

const get = async <R>(path: string, config?: AxiosRequestConfig) => {
  const response = await HttpClient.get<R>(parseUrl(path), config)
  return response.data
}

const post = async <R, B>(path: string, data: B, config?: AxiosRequestConfig) => {
  const response = await HttpClient.post<R>(parseUrl(path), data, config)
  return response.data
}

const put = async <R, B>(path: string, data: Partial<B>, config?: AxiosRequestConfig) => {
  const response = await HttpClient.put<R>(parseUrl(path), data, config)
  return response.data
}

const deleteFn = async <R>(path: string, config?: AxiosRequestConfig) => {
  const response = await HttpClient.delete<R>(parseUrl(path), config)
  return response.data
}

export const ApiService = {
  get,
  post,
  put,
  delete: deleteFn,
}
