import Tab from '@/components/common/Tab';
import styled from 'styled-components';

function Layout({
    className,
    children,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <StyeldLayoutWrapper className={className}>
            <Tab />
            <StyledLayoutInnerWrapper>{children}</StyledLayoutInnerWrapper>
        </StyeldLayoutWrapper>
    );
}

export default Layout;

const StyeldLayoutWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;
const StyledLayoutInnerWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;
