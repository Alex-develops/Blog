import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null)
  

    useEffect(() =>{

        const abortController = new AbortController();
        setTimeout(()=> {
         fetch (url, {signal: abortController.signal})
         .then(res => {
             if (!res.ok){
                 throw Error ('Could not fecth the data for')
 
             }
             return res.json();
         })
         .then(data => {
             setData(data);
             setIsLoading(false);
             setError(null);
         })
         .catch(err => {
             if (error.name==='AbortError'){
                 console.log('fetch aborted');
             } else {
                setIsLoading(false);
                setError(err.message);
              
             }
            })
        }, 1000);
     return () => abortController.abort();
        
     }, [url]);

return {data, isLoading, error}
    }
export default useFetch