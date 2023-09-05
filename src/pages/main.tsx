import React, { useEffect } from 'react';
import styled from 'styled-components';
import Category from '@/components/Category';
import Featured from '@/components/Featured';
import Tab from '@/components/common/Tab';
import axios from 'axios';
import { useQuery } from 'react-query';
import useYoutube from '@/hooks/useYoutube';

function Main() {
    // const { isLoading, data, isError, error } = useQuery('super-heroes', () => {
    //     //첫 인자는 이름 두번쨰인자는 프로미스를 반환하는 콜백함수를 받는다.
    //     return axios.get(
    //         'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=' +
    //             process.env.NEXT_PUBLIC_GOOGLE_KEY
    //     );
    // });

    const { isLoading, data, isError, error }: IYoutube = useYoutube();
    if (isError) {
        return <h2>{(error as any).message}</h2>;
    } else {
        console.log(data);
    }
    return (
        <StyledMain>
            <Tab />
            <Featured />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
        </StyledMain>
    );
}

export default Main;

const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0.625rem;
`;
