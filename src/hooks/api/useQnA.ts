import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { get } from 'http';
import onPush from '../onPush';
interface INewPost {
    content: string;
    name: string;
    password: string;
}

function getQnA() {
    return axios.get(process.env.NEXT_PUBLIC_API_QNA + 'posts');
}
function postQnA(newPost: any) {
    return axios.post(process.env.NEXT_PUBLIC_API_QNA + 'posts', newPost);
}

export function useQnA() {
    const queryClient = useQueryClient();
    const posts = useQuery({
        queryKey: ['qna'],
        queryFn: getQnA,
        select: (data) => data.data,
    });
    const mutation = useMutation({
        mutationFn: (newPost: INewPost) => postQnA(newPost),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['qna'] });
            onPush('/qna');
        },
    });

    return { ...posts, postQnA: mutation };
}
