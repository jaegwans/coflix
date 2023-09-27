function useKeywords(
    keywords: string[],
    setKeywords: React.Dispatch<React.SetStateAction<string[]>>
) {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;
        const index = Number(e.target.name);

        setKeywords((prevData) => {
            const newData = [...prevData];
            newData[index] = value;
            return newData;
        });
    }

    return {
        handleChange,
    };
}

export default useKeywords;
