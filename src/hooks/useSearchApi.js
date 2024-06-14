import {useEffect, useState} from "react";
import axios from "axios";

export function useSearchApi (page, pageNumber) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [response, setResponse] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setResponse([])
    }, [])

    useEffect(() => {
        setLoading(true)
        setError(false)
        // let cancel;
        const controller = new AbortController();
        axios({
            method: 'GET',
            url: `https://rickandmortyapi.com/api/${page}`,
            params: {page: pageNumber},
            signal: controller.signal
            // Не дает продолжить при рендере делаю еще запросы. Останавливается на последнем
            // Все остальные останавливает
            // cancelToken: new axios.CancelToken((c) => cancel = c)
        }).then((res) => {
            setResponse((prevState) => {
                // Взяли массив, дополнили его и удалили дубликаты
                // return [...new Set([...prevState, ...res.data.docs.map(b => b.title)])]
                console.log(res.data.results)
                return [...new Set([...prevState, ...res.data.results])]
            })
            setHasMore(res.data.docs.length > 0)
            setLoading(false)
            console.log(res.data)
        }).catch(e => {
            if(axios.isCancel(e)) {
                return;
            }
            setError(false)
            console.error(e)
        })
        // return() => cancel();
    }, [ pageNumber])
    return {
        loading,
        error,
        response,
        hasMore
    }
}

