import * as React from "react"
import _TopicApi from '../api/TopicApi'
import _ImageApi from '../api/ImageApi'

import Hero from "../component/Hero";

import "./App.scss"

interface AppProps {
    [key:string]: AppProps[keyof AppProps]
    config:any
}

interface AppState {
    [key:string]: AppState[keyof AppState]
    topic: string
    coverUrl: string
    loading:boolean
}

export default class App extends React.Component<AppProps, AppState> {

    constructor(props: any) {
        super(props)
        this.state = {
            topic: this.TopicApi.getTopic(),
            coverUrl: "https://images.unsplash.com/photo-1532662362004-da35ea753120?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM0MzUzfQ&s=9d049ccfc6c4f3b55267cfbc3b6414f3",
            loading: false
        }
    }

    private ImageApi = new _ImageApi(this.props.config.api)
    private TopicApi: any = new _TopicApi()

    private setNewTopic(): void {
        this.ImageApi.getImage().then((cover: string) => {
            this.setState({
                topic: this.TopicApi.getTopic(),
                coverUrl: cover,
                loading: false
            })
        }).catch((error: string) => {
            this.setState({
                loading: false
            })
        })
    }

    public componentWillMount(){
        //this.setNewTopic()
    }

    public render() {
        return (
            <Hero imageUrl={this.state.coverUrl}>
                <h2>
                    Creating a high quality topic title is hard.<br />
                    Let robots deal with that mess.
                </h2>
                <h1>
                    {this.state.topic}
                </h1>
                <button onClick={this.setNewTopic.bind(this)}>
                    Make me another instantly famous speech title
                </button>
                <p>
                    Our conversational predictive AI sources thousands of research
                    articles and creates the perfect title, making your talk stand
                    out between millions of presumptuous meetup talks.
                </p>
            </Hero>
        )
    }
}