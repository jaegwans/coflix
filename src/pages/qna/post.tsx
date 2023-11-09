import React, { useEffect, useState } from 'react';
import Layout from '@/components/common/Layout';
import styled from 'styled-components';
import { useQnA } from '@/hooks/api/useQnA';
import onPush from '@/hooks/onPush';

function Qna() {
    const { data, isLoading, isError, postQnA } = useQnA();
    useEffect(() => {
        console.log(data);
    }, [isLoading]);

    isLoading && <div>로딩중</div>;

    const [post, setPost] = useState({});

    return (
        <StyledLayout>
            <h1>Post</h1>
            <input type="text" placeholder="이름" name="name" />
            <StyeldArea
                placeholder="무엇이 궁금하신가요?"
                name="content"
            ></StyeldArea>

            <StyeldButton
                type="button"
                onClick={() =>
                    postQnA.mutate({
                        content: 'test',
                        name: 'test',
                        password: 'test',
                    })
                }
            >
                작성
            </StyeldButton>
        </StyledLayout>
    );
}

export default Qna;

const StyeldArea = styled.textarea`
    all: unset;
    border: 1px solid ${({ theme }) => theme.color.white};
    height: 100%;
    width: 90%;
`;

const StyledPostRow = styled.div`
    cursor: pointer;
    width: calc(100% - 3rem);
    display: flex;
    justify-content: space-between;

    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.white};
`;

const StyeldButton = styled.button`
    all: unset;
    cursor: pointer;
    bottom: 0;
    right: 0;
    position: fixed;
    margin: 1rem 1.5rem;
    padding: 0.325rem 0.6rem;
    border: 2px solid ${({ theme }) => theme.color.grey};
    transition: border 0.2s ease-in, transform 0.2s ease-in 0.1s;

    &:hover {
        border: 2px solid ${({ theme }) => theme.color.white};
        transform: translateY(-0.2rem);
    }
`;

const StyledLayout = styled(Layout)`
    h1 {
        align-self: flex-start;
        margin-left: 1.5rem;
    }
    height: 100%;
    position: relative;
    padding-top: ${({ theme }) => theme.len.tabHeight};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
