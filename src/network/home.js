import { request } from './request'

export function getHomeMUltidata() {
    return request({
        url: '/home/multidata'
    })
}

export function getHomeData(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}