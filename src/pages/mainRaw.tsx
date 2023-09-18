import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Category from '@/components/Category';
import Featured from '@/components/Featured';
import Tab from '@/components/common/Tab';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { videoListsState } from '@/atoms/youtube';
import getVideoList from '@/hooks/api/getVideoLists';

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const videoLists = await getVideoList();

        return {
            props: {
                videoLists,
                fallback: true,
            },
        };
    } catch (error) {
        console.log(error);
        return {
            props: {
                videoLists: false,
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

    useEffect(() => {
        setGlobalVideoList(videoLists);
    }, [videoLists, setGlobalVideoList]);

    if (router.isFallback) {
        return <p>로딩중</p>;
    }
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

export default MainRaw;

const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0.625rem;
`;
