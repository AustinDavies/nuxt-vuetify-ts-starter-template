import {AxiosError, AxiosPromise, AxiosResponse, AxiosRequestConfig} from 'axios';

declare interface NuxtAxiosInstance {
    onRequest: (config: AxiosRequestConfig) => any;
    onResponse: (response: AxiosResponse) => any;
    onError: (error: AxiosError) => any;
    onRequestError: (err: AxiosError) => any;
    onResponseError: (err: AxiosError) => any;

    $get(...options?: any): Promise<any>;
    $post(...options?: any): Promise<any>;
    $put(...options?: any): Promise<any>;
    $patch(...options?: any): Promise<any>;
    $delete(...options?: any): Promise<any>;

    get(...options?: any): AxiosPromise<any>;
    post(...options?: any): AxiosPromise<any>;
    put(...options?: any): AxiosPromise<any>;
    patch(...options?: any): AxiosPromise<any>;
    delete(...options?: any): AxiosPromise<any>;

    $get<T>(...options?: any): Promise<T>;
    $post<T>(...options?: any): Promise<T>;
    $put<T>(...options?: any): Promise<T>;
    $patch<T>(...options?: any): Promise<T>;
    $delete<T>(...options?: any): Promise<T>;

    get<T>(...options?: any): AxiosPromise<T>;
    post<T>(...options?: any): AxiosPromise<T>;
    put<T>(...options?: any): AxiosPromise<T>;
    patch<T>(...options?: any): AxiosPromise<T>;
    delete<T>(...options?: any): AxiosPromise<T>;

    setHeader(header: string, value: string): void;
    setToken(token:string, type:string, scopes: string|string[] = 'common');
}
