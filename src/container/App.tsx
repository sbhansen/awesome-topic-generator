import * as React from "react"
import _TopicApi from '../api/TopicApi'
import _ImageApi from '../api/ImageApi'

export default class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props)
        this.state = {
            topic: this.getTopic(),
            coverUrl: this.getCoverUrl()
        }
    }

    private ImageApi = new _ImageApi()
    private TopicApi: any = new _TopicApi()

    private getTopic(): string {
        let topic: string = this.TopicApi.getTopic()
        return topic
    }

    public setTopic(): void {
        let topic: string = this.getTopic()
        this.setState({ topic: topic })
    }

    public getCoverUrl(): string {
        let coverUrl: string = this.ImageApi.getImage()
        return "foo"
    }

    public setCover(): void {
        let coverUrl: string = this.getCoverUrl()
        this.setState({ coverUrl: coverUrl })
    }

    public render() {
        return (
            <article>
                <h2>
                    Creating a high quality topic title is hard.<br />
                    Let robots deal with that mess.
                </h2>
                <h1>
                    {this.state.topic}
                </h1>
                <button onClick={this.setTopic.bind(this)}>
                    Make me another instantly famous speech title
                </button>
            </article>
        )
    }
}