import React from 'react';
import styled, { css } from 'styled-components';
import useScroll from '@/hooks/useScroll';
import onPush from '@/hooks/onPush';

function Tab() {
    const { scrollTop } = useScroll();
    return (
        <StyledTab paint={!scrollTop}>
            <ul>
                <li className="logo" onClick={() => onPush('/main')}>
                    Coflix
                </li>
                <li onClick={() => onPush('/intro')}>intro</li>
                <li onClick={() => onPush('/edit')}>edit</li>
                <li onClick={() => alert('준비중입니다.')}>resume</li>
            </ul>
        </StyledTab>
    );
}

export default Tab;

const StyledTab = styled.header<{ paint: boolean }>`
    ul {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        .logo {
            font-size: 1.2rem;
            font-weight: 700;
            text-shadow: 0px 0px 15px #adadad;
        }
        li {
            font-weight: 500;
            cursor: pointer;
        }
    }

    display: flex;
    position: fixed;
    border-width: 0;
    top: 0;
    z-index: 10;
    transition: background-color 0.2s ease-in-out;

    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    height: ${({ theme }) => theme.len.tabHeight};
    ${({ paint }) =>
        paint &&
        css`
            /* background-color: ${({ theme }) => theme.color.black}; */
            background-color: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(5px);
        `}
`;
