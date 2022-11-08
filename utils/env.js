export let HTTP = ''
export let baseURL = ''

if (process.env.NODE_ENV === 'development') {
    // console.log(defineConfig)
    // 开发环境
    // eslint-disable-next-line no-unused-vars
    baseURL = 'http://localhost:5137/api/'
    // eslint-disable-next-line no-unused-vars
    HTTP = 'http://localhost:3000'
} else if (process.env.NODE_ENV === 'production') {
    // 生产环境
    // eslint-disable-next-line no-unused-vars
    baseURL = 'http://localhost:3000/api/'
    // eslint-disable-next-line no-unused-vars
    HTTP = 'http://localhost:3000'
} else {
// 本地环境
}

export default {
    HTTP, baseURL
}
