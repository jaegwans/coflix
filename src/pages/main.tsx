import React, { useEffect } from 'react';
import styled from 'styled-components';
import Category from '@/components/Category';
import Featured from '@/components/Featured';
import Tab from '@/components/common/Tab';
import axios from 'axios';
import { useQuery, useQueries, dehydrate, QueryClient } from 'react-query';
import useYoutube from '@/hooks/useYoutube';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { youtube } from 'scrape-youtube';

type IvideoJson = {
    title: string;
    id: string;
    url: string;
    thumbnail: string;
    description: string;
    duration: string;
    uploadedAt: string;
    views: string;
};

export const getServerSideProps: GetServerSideProps = async () => {
    const { videos }: { videos: any } = await youtube.search('김재관');
    const videosJson: IvideoJson[] = videos;
    return {
        props: {
            videosJson,
        },
    };
};

function Main({
    videosJson,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log(videosJson);

    return (
        <StyledMain>
            <Tab />
            <Featured />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
        </StyledMain>
    );
}

export default Main;

const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0.625rem;
`;
