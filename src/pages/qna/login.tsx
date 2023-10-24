import React from 'react';
import Layout from '@/components/common/Layout';
import styled from 'styled-components';

function Login() {
    return <StyledLayout>Login</StyledLayout>;
}

export default Login;

const StyledLayout = styled(Layout)`
    position: relative;
    padding-top: ${({ theme }) => theme.len.tabHeight};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
