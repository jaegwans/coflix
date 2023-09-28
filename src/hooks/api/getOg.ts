import og from 'open-graph';

interface IOg {
    image: {
        url: string;
        width: number;
        height: number;
    };
    title: string;
    description: string;
    url: string;
}

function getOg(url: string): Promise<IOg> {
    return new Promise((resolve, reject) => {
        og(url, (err, meta) => {
            if (err) reject(err);
            resolve(meta as any);
        });
    });
}

export default getOg;
