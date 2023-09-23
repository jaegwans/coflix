import React from 'react';
import styled from 'styled-components';

function Featured() {
    return (
        <a
            href="https://www.acmicpc.net/problem/1759"
            target="_blank"
            rel="noopener noreferrer"
        >
            <StyledFeatured>
                <PSWrapper>
                    <h2 className="title">오늘의 코테 문제</h2>
                    <div className="ps">
                        <h3>암호만들기</h3>
                        <p>1759</p>
                    </div>
                    <div>정답률:44.6%</div>
                </PSWrapper>
            </StyledFeatured>
        </a>
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

const StyledFeatured = styled.div`
    cursor: pointer;
    justify-content: flex-start;
    align-items: center;
    height: 12.5rem;
    padding-left: 1.6rem;

    background-image: url('/images/ps-back.jpg');
    background-size: cover;
    width: 100%;
    display: flex;
    padding-top: ${({ theme }) => theme.len.tabHeight};
`;
