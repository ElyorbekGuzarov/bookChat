import {setAxiosInter} from "@/config/axios-interceptor";
// eslint-disable-next-line
export function initVueApp(vue){
    setAxiosInter(()=>
    console.log("Unauthorized"))
}