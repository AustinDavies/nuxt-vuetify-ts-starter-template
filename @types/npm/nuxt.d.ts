declare interface NuxtContext {
    $axios: any;

    app: any;
    isClient: boolean;
    isServer: boolean;
    isStatic: boolean;
    isDev: boolean;
    isHMR: boolean;
    route: any;
    store: any;
    env: any;
    params: any;
    query: any;
    req: any;
    res: any;
    redirect: any;
    error: any;
    nuxtState: any;
    beforeNuxtRender: any;
}