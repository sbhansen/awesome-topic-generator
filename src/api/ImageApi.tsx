interface apiConfig {
    [key: string]: apiConfig[keyof apiConfig]
    root: string
    key: string
}

export default class ImageApi {

    constructor(config: apiConfig) {
        this.apiConfig = config
    }

    private apiConfig: apiConfig

    private getEndpointUrl(endpoint: string): string {
        const delimiter:string = endpoint.indexOf("?") > -1 ? "&" : "?"
        return this.apiConfig.root + endpoint + delimiter + "client_id=" + this.apiConfig.key
    }

    private getImageUrlFromResult(result: any): string {
        return result.urls.regular
    }

    public getImage( query:string = "" ): any {
        return new Promise((resolve: any, reject: any) => {
            let endpoint:string = `query=${query}&per_page=1&page=1`
            fetch(this.getEndpointUrl("random"))
                .then(result => {
                    if (result.ok) {
                        let data: any = result.json();
                        return data;
                    }
                    else {
                        reject( "ERROR: API replied, but not ok response." )
                    }
                })
                .then(data => {
                    resolve( this.getImageUrlFromResult(data) )
                })
                .catch((error) => {
                    reject( "ERROR: Could not fetch data from API" )
                })
        })
    }
}