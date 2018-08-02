import { AxiosRequestConfig, AxiosError } from "axios";

export default function({$axios, redirect}: NuxtContext) {
    $axios.onRequest((config: AxiosRequestConfig) => {
        console.log(`Making request to ${config.url}`);
    });
    $axios.onError((error: AxiosError) => {
        console.error(error);
        // const code = error.response != null ? parseInt(error.response && error.response.status) : 500;
        // if (code === 400) {
        //     redirect('/400');
        // }
    })
}
