import { useEffect, useState } from "react";
import { makeRq } from "@/utils/makeRq";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await makeRq.get(url);
                const apiData = res.data.results;
                const elementShow = [apiData[1], apiData[2]]; 
                setData(elementShow);
            } catch (err) {
                setError(true);
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
};

export const useFetchTwo = (url) => {
    const [movie, setMovie] = useState(null);
    const [loadingt, setLoadingt] = useState(false);
    const [errort, setErrort] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoadingt(true);
                const res = await makeRq.get(url);
                const apiDatat = res.data.results;
                const elementShow = [apiDatat[3]]; 
                setMovie(elementShow);
            } catch (err) {
                setErrort(true);
            }
            setLoadingt(false);
        };
        fetchData();
    }, [url]);

    return {  movie, loadingt, errort };
};

export const useFetchTh = (url) => {
    const [movs, setMovs] = useState(null);
    const [loadings, setLoadings] = useState(false);
    const [errors, setErrors] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoadings(true);
                const res = await makeRq.get(url);
                const apiDatat = res.data.results;
                const elementShow = [apiDatat[4]]; 
                setMovs(elementShow);
            } catch (err) {
                setErrors(true);
            }
            setLoadings(false);
        };
        fetchData();
    }, [url]);

    return {  movs, loadings, errors };
};

export const useFetchF = (url) => {
    const [movsf, setMovsf] = useState(null);
    const [loadingr, setLoadingr] = useState(false);
    const [errorr, setErrorr] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoadingr(true);
                const res = await makeRq.get(url);
                const apiDatat = res.data.results;
                const elementShow = [apiDatat[6]]; 
                setMovsf(elementShow);
            } catch (err) {
                setErrorr(true);
            }
            setLoadingr(false);
        };
        fetchData();
    }, [url]);

    return {  movsf, loadingr, errorr };
};

export const useFetchV = (url) => {
    const [movsv, setMovsv] = useState(null);
    const [loadingv, setLoadingv] = useState(false);
    const [errorv, setErrorv] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoadingv(true);
                const res = await makeRq.get(url);
                const apiDatat = res.data.results;
                const elementShow = [apiDatat[7], apiDatat[8], apiDatat[9]]; 
                setMovsv(elementShow);
            } catch (err) {
                setErrorv(true);
            }
            setLoadingv(false);
        };
        fetchData();
    }, [url]);

    return {  movsv, loadingv, errorv };
};