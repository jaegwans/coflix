import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Category from '@/components/main/Category';
import Featured from '@/components/Featured';
import Tab from '@/components/common/Tab';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { videoListsState, keywordsState } from '@/atoms/youtube';
import getVideoList from '@/hooks/api/getVideoLists';
import keywords from '@/data/Search/keywords.json';
import Layout from '@/components/common/Layout';

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
    res.setHeader(
        'Cache-Control',
        'public, max-age=1800, s-maxage=3600, stale-while-revalidate=59'
    );
    const cookies = req.headers.cookie;
    const myDataCookie = cookies
        ?.split('; ')
        .find((row) => row.startsWith('myData='));
    const data = myDataCookie
        ? JSON.parse(decodeURIComponent(myDataCookie.split('=')[1]))
        : null;

    try {
        const videoLists = await getVideoList(data || keywords);

        return {
            props: {
                videoLists,
            },
        };
    } catch (error) {
        return {
            props: {
                videoLists: [error],
            },
        };
    }
};

function MainRaw({
    videoLists,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log(videoLists);
    const router = useRouter();

    const [globalVideoLists, setGlobalVideoList] =
        useRecoilState(videoListsState);

    const [globalKeywords, setGlobalKeywords] = useRecoilState(keywordsState);

    useEffect(() => {
        setGlobalVideoList(videoLists);
        setGlobalKeywords(keywords);
        console.log(videoLists);
    }, [videoLists, setGlobalVideoList, setGlobalKeywords]);

    return (
        <StyledLayout>
            <Tab />
            <Featured />

            {videoLists.map(
                (
                    videoList: { videos: Ivideo[] },
                    index: React.Key | null | undefined //객체에 id가 없어 불가피하게 index 사용
                ) => (
                    <Category
                        key={index}
                        id={index}
                        videos={videoList.videos}
                    />
                )
            )}
        </StyledLayout>
    );
}

export default MainRaw;

const StyledLayout = styled(Layout)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
`;
