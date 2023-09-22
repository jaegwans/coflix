import React from 'react';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';
import onPush from '@/hooks/onPush';

function VideoMore({ data }: { data: React.Key | null | undefined }) {
    return (
        <StyledVideoMore
            onClick={() =>
                onPush({
                    pathname: '/categoryDetail',
                    query: { id: data },
                })
            }
        >
            <StyledMoreIcon fontSize="large" />
        </StyledVideoMore>
    );
}

export default VideoMore;

const StyledVideoMore = styled.div`
    height: 100px;
    width: 100px;
    background-color: ${({ theme }) => theme.color.grey};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 0.625rem;
    cursor: pointer;
`;

const StyledMoreIcon = styled(AddIcon)`
    width: 300px;
    height: 300px;
`;
