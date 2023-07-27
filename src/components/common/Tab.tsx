import React from 'react';
import styled, { css } from 'styled-components';
import useScroll from '@/hooks/useScroll';

function Tab() {
    const { scrollTop } = useScroll();
    return <StyledTab paint={!scrollTop}>Tab</StyledTab>;
}

export default Tab;

const StyledTab = styled.div<{ paint: boolean }>`
    display: flex;
    position: fixed;
    top: 0;
    z-index: 10;
    transition: background-color 0.2s ease-in-out;

    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0);
    width: 100%;
    height: 4.375rem;
    ${({ paint }) =>
        paint &&
        css`
            background-color: ${({ theme }) => theme.color.black};
        `}
`;
