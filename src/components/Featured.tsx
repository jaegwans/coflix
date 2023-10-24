import React, { use, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useBJData } from '@/hooks/api/useBJData';

function Featured() {
    const url = `https://www.acmicpc.net/problem/`;

    const { isLoading, isError, data, error } = useBJData();

    isLoading && <div>로딩중</div>;
    isError && <div>Error: 재시도 해주세요.</div>;

    return (
        <StyledFeatured
            href={url + data?.problemId}
            target="_blank"
            rel="noopener noreferrer"
        >
            <PSWrapper>
                <h3 className="title">오늘의 코테 문제로 이동</h3>
                <div className="ps">
                    <h2>{data?.titleKo}</h2>
                    <p>{data?.problemId}번</p>
                </div>
                <div>평균 시도 횟수:{data?.averageTries}번</div>
            </PSWrapper>
        </StyledFeatured>
    );
}

export default Featured;

const PSWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    .title {
    }
    .ps {
        display: flex;
        align-items: flex-start;
        gap: 0.3rem;
        p {
            color: #e4e4e4;
        }
    }
    justify-content: space-around;
`;

const StyledFeatured = styled.a`
    cursor: pointer;
    justify-content: flex-start;
    align-items: center;
    height: 12.5rem;
    padding-left: 1.6rem;
    padding-bottom: 0.5rem;

    background-image: url('/images/ps-back.png');
    background-size: cover;
    width: 100%;
    display: flex;
    padding-top: ${({ theme }) => theme.len.tabHeight};
`;
