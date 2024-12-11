import useAPI from "../hooks/useAPI"
export default function Quote(){
    
    const {quote, fetchQuote} = useAPI()
    
    
    const handleNextQuote = () => {
        fetchQuote()
    }

   if(!quote) return <h1>Cargando quote</h1>

    return(
        <section id="quote-box" className="rounded-md bg-emerald-600 w-9/12 m-auto p-5 mt-10 h-3/5 grid grid-rows-2">
            <article className="row-span-4 h-full grid items-center">
                <p id="text" className="text-2xl text-center">{quote.quote}</p>
                <p id="author" className="text-right font-bold">By: {quote.author}</p>
            </article>
            <article className="flex justify-between items-center">
                <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text=${quote.quote} by ${quote.author}`} className="bg-slate-50 rounded-lg"target="_blank" >
                <img className="w-10 h-10 object-cover rounded-md" alt="Post it in X" src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png" />
                </a>
                <button id="new-quote" className="bg-black h-10 text-slate-50 p-2 rounded-md hover:bg-slate-500" onClick={handleNextQuote} >Next quote</button>
            </article>

        </section>
    )
}