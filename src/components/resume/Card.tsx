import React from 'react';
import styled from 'styled-components';

interface ICard {
    name: string;
    url: string;
    position: string;
    preview?: string;
}

function Card({ data }: { data: ICard }) {
    return (
        <>
            <StyledCard href={data.url} target="_blank">
                <StyledPreview>
                    <img
                        src={data.preview}
                        width={300}
                        height={300}
                        alt={data.name}
                        onError={(e) =>
                            (e.currentTarget.style.display = 'none')
                        }
                    />
                    {/**화이트리스트 문제로 img 사용**/}
                </StyledPreview>
                <div className="desc">
                    <div className="name">{data.name}</div>
                    <div className="position">{data.position}</div>
                </div>
            </StyledCard>
        </>
    );
}

export default Card;
const StyledCard = styled.a`
    .desc {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 0.5rem;
        padding: 0.5rem 0rem;
        .name {
            font-size: 1.2rem;
            font-weight: 700;
        }
        .position {
            font-size: 1rem;
            font-weight: 500;
            color: #e4e4e4;
            border: 1px solid #e4e4e4;
            width: 5rem;
            padding: 0.1rem 0.2rem;
            text-align: center;
            border-radius: 50px;
        }
    }
    all: unset;
    display: block;
    width: 11rem;
    height: 15rem;
`;
const StyledPreview = styled.div`
    height: 70%;
    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;
