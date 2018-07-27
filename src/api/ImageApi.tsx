interface apiConfig {
    [key: string]: apiConfig[keyof apiConfig],
    root: string
}

export default class ImageApi {
    private apiConfig: apiConfig = {
        root: "https://api.gettyimages.com/v3/search/images"
    }
    public getImage(): any {
        fetch(this.apiConfig.root + "?fields=id,title,thumb,referral_destinations&sort_order=best&phrase=lecture")
        .then(response => {
            if( response.ok ){
                let data:any = response.json();
                return "jolo";
            }
            else {
                console.log(response.status)
                console.log(response.statusText)
                return false
            }
        })
        .catch(()=>{
            return false
        })
    }
}