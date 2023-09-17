import React, { useEffect } from 'react';
import styled from 'styled-components';
import Category from '@/components/Category';
import Featured from '@/components/Featured';
import Tab from '@/components/common/Tab';
import axios from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRecoilState } from 'recoil';
import { videoListsState } from '@/atoms/youtube';
import getVideoList from '@/hooks/api/getVideoLists';

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const videoLists = await getVideoList();

        return {
            props: {
                videoLists,
            },
        };
    } catch (error) {
        console.log(error);
        return {
            props: {
                videoLists: [],
            },
        };
    }
};

function Main({
    videoLists,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log(videoLists);

    const [globalVideoLists, setGlobalVideoList] =
        useRecoilState(videoListsState);

    useEffect(() => {
        setGlobalVideoList(videoLists);
    }, [videoLists, setGlobalVideoList]);
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
