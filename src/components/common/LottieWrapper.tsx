import { useLottie } from 'lottie-react';
import styled from 'styled-components';

interface ILottieWrapper {
    lottieData: object;
}

function LottieWrapper({ lottieData }: ILottieWrapper) {
    const lottieOptions = {
        animationData: lottieData,
        loop: false,
        autoplay: true,
    };
    const { View } = useLottie(lottieOptions);

    return <StyledWrapper>{View}</StyledWrapper>;
}

export default LottieWrapper;

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
`;
