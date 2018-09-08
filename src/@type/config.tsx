interface Config {
    [key:string]: Config[keyof Config]
    api : {
        root: string,
        key : string
    }
}