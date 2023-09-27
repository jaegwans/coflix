import Layout from '@/components/common/Layout';
import React, { useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import initKeywords from '@/data/Search/keywords.json';
import useKeywords from '@/hooks/keywords/useKeywords';
import useLocalStorage from '@/hooks/useLocalStorage';
import onPush from '@/hooks/onPush';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
// 제거 및 추가 설정

function Edit() {
    const { getLocalStorage, setLocalStorage, isSet } = useLocalStorage();
    const [keywords, setKeywords] = useState<string[]>([]);
    const { handleChange } = useKeywords(keywords, setKeywords);

    useLayoutEffect(() => {
        const init = getLocalStorage('caterory') || initKeywords;
        setKeywords(init);
    }, []);

    function onClickApply() {
        if (keywords.includes('')) {
            // handle empty keyword case
            alert('키워드는 공백으로 두지 마세요.');
        } else {
            onPush('/main', setLocalStorage('caterory', keywords));
        }
    }

    return (
        <Layout>
            <StyledWrapperEdit>
                <StyledForm>
                    <h1>Category Edit</h1>
                    {keywords.map((keyword, index) => (
                        <StyledInput
                            key={index}
                            name={index.toString()}
                            type="text"
                            value={keyword}
                            onChange={handleChange}
                        />
                    ))}
                    <StyeldMore type="button">
                        <AddIcon />
                    </StyeldMore>
                    <StyledButtonWrapper>
                        <StyeldButton
                            type="button"
                            onClick={() => {
                                setLocalStorage('caterory', initKeywords);
                                setKeywords(initKeywords);
                            }}
                        >
                            초기화
                        </StyeldButton>
                        <StyeldButton type="button" onClick={onClickApply}>
                            {isSet ? '적용완료' : '적용하기'}
                        </StyeldButton>
                    </StyledButtonWrapper>
                </StyledForm>
            </StyledWrapperEdit>
        </Layout>
    );
}

export default Edit;
const StyledButtonWrapper = styled.div`
    align-self: flex-end;
`;
const StyeldMore = styled.button`
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 3rem;
    align-self: center;
    margin: 0rem 0.2rem;
    padding: 0.325rem 0.6rem;
    /* border: 2px solid ${({ theme }) => theme.color.grey};
    transition: border 0.2s ease-in, transform 0.2s ease-in 0.1s;

    &:hover {
        border: 2px solid ${({ theme }) => theme.color.white};
    } */
`;
const StyeldButton = styled.button`
    all: unset;
    cursor: pointer;
    margin: 0rem 0.2rem;
    padding: 0.325rem 0.6rem;
    border: 2px solid ${({ theme }) => theme.color.grey};
    transition: border 0.2s ease-in, transform 0.2s ease-in 0.1s;

    &:hover {
        border: 2px solid ${({ theme }) => theme.color.white};
        transform: translateY(-0.2rem);
    }
`;
const StyledInput = styled.input`
    width: 100%;
    height: 2.5rem;
    font-size: 1.25rem;
    vertical-align: bottom;
    background-color: black;
    border-bottom: 2px solid ${({ theme }) => theme.color.grey};
    transition: border-bottom 0.2s ease-in-out;
    color: white;
    padding-bottom: 0rem;

    &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.color.white};
    }
`;
const StyledForm = styled.form`
    margin-top: 3rem;
    display: flex;
    width: 80%;
    height: 100%;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1rem;
    h1 {
        align-self: flex-start;
    }
`;
const StyledWrapperEdit = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    align-items: center;
    padding-top: ${({ theme }) => theme.len.tabHeight};
`;
