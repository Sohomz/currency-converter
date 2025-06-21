import {useState,useEffect} from 'react'



function useCurrencyFetch()
{
    const [currencies,setCurrencies]=useState([]);

    const fetchCurrencies=async ()=>{
        try {
        const res=await fetch(`https://api.frankfurter.app/currencies`)
        const data=await res.json()
        setCurrencies(Object.keys(data))
        } catch (error) {
        console.log(error)
        }
        
    }
        //console.log(currencies);
    useEffect(
        ()=>{
            fetchCurrencies()
        }
        ,[setCurrencies])
    
    return {currencies};
}

export default useCurrencyFetch;