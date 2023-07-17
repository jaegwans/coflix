import Lottie, { Options } from 'react-lottie';
import styled from 'styled-components';

interface ILottieWrapper {
    lottieData: object;
}

function LottieWrapper({ lottieData }: ILottieWrapper) {
    const lottieOptions: Options = {
        animationData: lottieData,
        loop: false,
        autoplay: true,
    };

    return <Lottie options={lottieOptions} isClickToPauseDisabled />;
}

export default LottieWrapper;
