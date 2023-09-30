import React from 'react';
import styled from 'styled-components';

function Featured({ bj }: { bj: any }) {
    const url = `https://www.acmicpc.net/problem/${bj.id}`;
    return (
        <StyledFeatured href={url} target="_blank" rel="noopener noreferrer">
            <PSWrapper>
                <h3 className="title">오늘의 코테 문제로 이동</h3>
                <div className="ps">
                    <h2>{bj.title}</h2>
                    <p>{bj.id}번</p>
                </div>
                <div>정답률:{bj.rate}</div>
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
