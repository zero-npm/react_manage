import service from "../request/index"

export function test(data) {
    return service({
        url: '/login',
        method: 'post',
        data
    })
}