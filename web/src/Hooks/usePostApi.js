import axios from "axios";
import { useState } from "react";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

console.log('BaseUrl', baseUrl);

const usePostApi = (uri) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [result, setResult] = useState();

    const submitRequest = (body) => {
        setError(undefined);
        setLoading(true);

        axios.post(`${baseUrl}${uri.indexOf('/') === 0 ? uri : '/' + uri}`, body).then(r => {
            setResult(r.data.result);
        }).catch(e => {
            console.error(e);
            setError(e);
        }).finally(() => {
            setLoading(false);
        });
    };

    const reset = () => {
        setLoading(false);
        setError(undefined);
        setResult(undefined);
    };

    return {
        loading,
        error,
        submit: submitRequest,
        result,
        reset
    };
};

export default usePostApi;