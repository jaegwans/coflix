// scrape-youtube

interface Ivideo {
    id: string;
    title: string;
    thumbnail: string;
    channel: Ichannel;
    views: number;
    uploaded: string;
    duration: number;
    link: string;
    description: string;
}

interface IvideoList {
    videos: Ivideo[];
    channels: [];
    playlists: [];
    streams: [];
}

interface Ichannel {
    id: string;
    link: string;
    name: string;
    thumbnail: string;
    verified: boolean;
}
