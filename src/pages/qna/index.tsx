import React, { useEffect } from 'react';
import Layout from '@/components/common/Layout';
import styled from 'styled-components';
import { useQnA } from '@/hooks/api/useQnA';
import onPush from '@/hooks/onPush';

function Qna() {
    const { data, isLoading, isError } = useQnA();
    useEffect(() => {
        console.log(data);
    }, [isLoading]);

    isLoading && <div>로딩중</div>;
    return (
        <StyledLayout>
            <p>백엔드 서버 요금문제로 일시 중단중입니다.</p>
            <p>백엔드 코드는 아래 레포에서 확인할 수 있습니다.</p>
            <a href="https://github.com/jaegwans/coflix-back">
                https://github.com/jaegwans/coflix-back
            </a>
        </StyledLayout>
    );
    // return (
    //     <StyledLayout>
    //         <h1>QnA</h1>
    //         {data?.map(({ id, content, name }: IPostResponse) => (
    //             <StyledPostRow key={id}>
    //                 <span>
    //                     {id}
    //                     {')'} {content}
    //                 </span>
    //                 <span>{name}</span>
    //             </StyledPostRow>
    //         ))}
    //         <StyeldButton type="button" onClick={() => onPush('/qna/post')}>
    //             글쓰기
    //         </StyeldButton>
    //     </StyledLayout>
    // );
}

export default Qna;

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
    position: relative;
    padding-top: ${({ theme }) => theme.len.tabHeight};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
