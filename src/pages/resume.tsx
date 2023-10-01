import React, { useEffect } from 'react';
import styled from 'styled-components';
import Layout from '@/components/common/Layout';
import Card from '@/components/resume/Card';
import resume from '@/data/resume/resume.json';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { ServerResponse } from 'http';
import addPreview from '@/hooks/addPreview';

interface IResumes {
    url: string;
    name: string;
    position: string;
    imgSrc?: string;
}

export async function getServerSideProps({ res }: { res: ServerResponse }) {
    //image 안에 url 있음
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    );
    const newResumes = await Promise.all(
        resume.map((object) => {
            return addPreview(object);
        })
    );
    return {
        props: {
            resumes: newResumes,
        },
    };
}

function Resume({
    resumes,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    useEffect(() => {
        console.log(resumes);
    }, []);
    return (
        <StyledLayout>
            <h1>resume</h1>
            <StyledResumes>
                {resumes.map((resume, index) => {
                    return <Card key={index} data={resume} />;
                })}
            </StyledResumes>
        </StyledLayout>
    );
}

export default Resume;

const StyledResumes = styled.div`
    display: grid;
    width: 95%;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    justify-items: center;
    align-items: center;
    gap: 1rem 0rem;
`;
const StyledLayout = styled(Layout)`
    h1 {
        align-self: flex-start;

        margin: 1.5rem 0rem 1.5rem 5%;
    }
    position: relative;
    padding-top: ${({ theme }) => theme.len.tabHeight};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
