import $axios from './http.js'
// import  { HTTP } from './env.js'
export const login = async(data)=>{
    console.log(data)
    return $axios({
        url:`/api/login/?username=${data.username}&&password=${data.password}`,
    })
}
