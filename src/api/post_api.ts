import {instance} from './api'
import {AxiosResponse} from 'axios'

export const PostApi = {
  getPage(id: number): Promise<AxiosResponse<any>> {
    return instance.get(`pages/${id}?_embed`).then(res => res)
  },
}