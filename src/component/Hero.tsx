import * as React from "react"
import "./Hero.scss"

export interface HeroProps {
    imageUrl: string
    topic: string
    setNewTopic: Function
}

export default class Hero extends React.Component<HeroProps> {

    setNewTopic(event: any) {
        event.preventDefault()
        this.props.setNewTopic()
        event.target.blur()
    }

    render() {
        return (
            <article className="hero" style={{ backgroundImage: `url( ${this.props.imageUrl})` }} >
                <h2>
                    Creating a high quality topic title is hard.<br />
                    Let robots deal with that mess.
                </h2>
                <h1>
                    {this.props.topic}
                </h1>
                <button onClick={this.setNewTopic.bind(this)}>
                    Make me another instantly famous speech title
                </button>
                <aside>
                    <p>
                        Our conversational predictive AI sources thousands of research
                        articles and creates the perfect title, making your talk stand
                        out between millions of presumptuous meetup talks.
                    </p>
                </aside>
            </article>
        )
    }
}