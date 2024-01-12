import {useEffect, useState} from 'react';

export function ExtractDataFromRequest<Type>(promise: Promise<Type>) {

    const [data, setData] = useState<Type | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    // TODO: Replace by react-query
    useEffect(() => {
        promise.then(res => setData(res))
            .catch(err => setError(err))
            .finally(() => setIsLoading(false))
    }, [])

    return {data, error, isLoading}
}
