export interface IEpisode{
    id: string
    name: string
    type: string
    image: string
    episode: string
    description: string
}
export const episodes:IEpisode[] = [
    {
        id: 'W2E3R4',
        name: 'Should you get outboard audio gear?',
        type: 'Gear',
        image: require('../photos/Episode3.png'),
        episode: 'Episode 3',
        description: 'Is hardware really worth it when it comes to podcasting? The answer is...it depends. Here’s our reasons on why you might want to consider picking something up.',
    },
    {
        id: 'A1S2D3',
        name: 'Mic tricks to take you to the next level',
        type: 'Tips & Tricks',
        image: require('../photos/Episode2.png'),
        episode: 'Episode 2',
        description: 'Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.',
    },
    {
        id: 'H1K3L4',
        name: 'The best microphone under $200',
        type: 'Gear',
        image: require('../photos/Episode1.png'),
        episode: 'Episode 1',
        description: 'With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.',
    }
]

export interface IReview{
    id: string
    mark: number
    review: string
    sender: string 
}

export const reviews: IReview[] = [
    {
        id: 'QAWSED',
        mark: 5,
        review: 'I can’t recommend this podcast enough',
        sender: 'Betty Lacey',
    },
    {
        id: 'AZSXDC',
        mark: 4.5,
        review: 'Jacob is the best in the business',
        sender: 'Adam Driver',
    },
    {
        id: 'ALSKDJ',
        mark: 5,
        review: 'A wealth of audio knowledge',
        sender: 'Marcus Brown',
    },
    {
        id: 'QWPEOR',
        mark: 5,
        review: 'Every episode is a gem!',
        sender: 'Jessica Knowl',
    },
    {
        id: 'PLOQWE',
        mark: 4,
        review: 'Whoa whoa, let me take some notes!',
        sender: 'Scott Adams',
    },
    {
        id: '1QW34R',
        mark: 5,
        review: 'I’ve upped my game considerably since I started listening',
        sender: 'Steven Blast',
    }
]