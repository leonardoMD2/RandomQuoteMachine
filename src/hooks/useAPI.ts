import { useEffect, useState } from "react";

export interface QuoteInterface{
    quote:string
    author:string
}

export default function useAPI():{ quote: QuoteInterface | undefined; fetchQuote: () => void }{

    const url = "https://quotes-api-self.vercel.app/quote"
    const[quote, setQuote] = useState<QuoteInterface | undefined>(undefined)

    const fetchQuote = () => {
           fetch(url)
           .then(data => data.json())
           .then((data:QuoteInterface) => setQuote(data))
        }
    
    //actualizamos en el render inicial
    useEffect(() => {
        fetchQuote();
    }, []);

    return {quote, fetchQuote}
}