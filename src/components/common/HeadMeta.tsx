import Head from 'next/head';

function HeadMeta({ title, description, url }: IHeadMetaProps) {
    return (
        <Head>
            <title>{title || 'coflix'}</title>
            <meta
                name="description"
                content={
                    description ||
                    '개발자 취준생에게 꼭 필요한 정보만 모아둔 사이트입니다.'
                }
            />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
            <meta property="og:title" content={title || 'coflix'} />
            <meta property="og:type" content="website" />
            <meta
                property="og:url"
                content={url || 'https://coflix.jaegwan.com'}
            />
            <meta property="og:article:author" content="jaegwan" />
        </Head>
    );
}

export default HeadMeta;
