import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import getRandom from '../getRandom';

const num = getRandom(1000, 25302).toString();
const getBj = () => {
    return axios.get('/api/v3/problem/show?problemId=' + num);
};

export function useBJData() {
    return useQuery({
        queryKey: ['todos'],
        queryFn: getBj,
        select: (data) => data.data,
    });
}
