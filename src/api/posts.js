import request from "@/utils/request";

export function postsListGet() {
    return request({
        url: `api/posts`,
        method: 'get'
    })
}

export function postByIdGet(id) {
    return request({
        url: `api/posts/${id}`,
        method: 'get'
    })
}