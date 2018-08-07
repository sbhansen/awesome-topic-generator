import * as React from "react"
import "./Hero.scss"

export interface HeroProps {
    imageUrl: string
}

export default class Hero extends React.Component<HeroProps> {
    render(){
        return (
            <article className="hero" style={{ backgroundImage : `url( ${this.props.imageUrl })` }} >
                {this.props.children}
            </article>
        )
    }
}