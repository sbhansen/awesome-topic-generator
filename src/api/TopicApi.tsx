interface topicPool {
    [key: string]: topicPool[keyof topicPool],
    intent: string[],
    subject: string[],
    purpose: string[],
    implementation: string[],
    area: string[],
    pronoun: string[],
    modulator: string[]
}

export default class TopicApi {

    private getItem = (key: string) => {
        let pool: string[] = this.pool[key]
        let range: number = pool.length
        let index: number = Math.floor(Math.random() * range)
        return pool[index]
    }

    private pool: topicPool = {
        intent: [
            "How to fully emerge in",
            "Developing",
            "Programing",
            "Researching better",
            "Constructing"
        ],
        subject: [
            "artificial gravity wells",
            "complex algorithms",
            "solar moon orbit",
            "critical architecture"
        ],
        purpose: [
            "to understand",
            "for better implementation of",
            "to increase knowledge of",
            "for better on-boarding of"
        ],
        implementation: [
            "by focusing on",
            "through increased effort off",
            "by enabling"
        ],
        area: [
            "the competitive market",
            "deep sea drilling",
            "the academic circle",
            "global trading"
        ],
        modulator: [
            "producing",
            "strengthening",
            "increasing",
            "working"
        ],
        pronoun: [
            "over",
            "on",
            "for",
            "in",
            "across",
            "under",
            "into"
        ]
    }

    public getTopic(): string {
        const structure: string[] = [
            "intent",
            "subject",
            "purpose",
            "subject",
            "implementation",
            "subject",
            "pronoun",
            "area"
        ]
        let sentenceArray: string[] = []
        structure.forEach(key => {
            let string: string = this.getItem(key)
            while (sentenceArray.indexOf(string) > 0) {
                string = this.getItem(key)
            }
            sentenceArray.push(string)
        })
        return sentenceArray.join(" ")
    }
}