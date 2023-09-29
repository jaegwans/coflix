import React, { useEffect } from 'react';
import styled from 'styled-components';
import Layout from '@/components/common/Layout';
import Card from '@/components/resume/Card';
import resume from '@/data/resume/resume.json';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import getOg from '@/hooks/api/getOg';

interface IResumes {
    url: string;
    name: string;
    position: string;
    imgSrc?: string;
}

async function addPreview(object: IResumes) {
    const og = await getOg(object.url);

    return Object.assign(object, { preview: og.image.url });
}

export async function getServerSideProps() {
    //image 안에 url 있음

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
    }, [resumes]);
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
