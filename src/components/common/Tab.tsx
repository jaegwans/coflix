import React from 'react';
import styled from 'styled-components';

function Tab() {
    return <StyledTab>Tab</StyledTab>;
}

export default Tab;

const StyledTab = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    z-index: 10;

    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    width: 100%;
    height: 4.375rem;
`;
