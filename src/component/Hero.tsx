import * as React from "react";

export interface HeroProps {
    title: string;
    imageUrl: string;
}

export class Hero extends React.Component<HeroProps, {}> {
    render(){
        return <h1>{this.props.title}</h1>
    }
}