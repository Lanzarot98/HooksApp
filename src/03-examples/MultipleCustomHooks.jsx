import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./"; // esto puedo hacerlo gracias al index.js de este mismo directorio


export const MultipleCustomHooks = () => {
  
  const { counter, increment, decrement} = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
  
  const {author, quote} = !!data && data[0];
  // eso aparecerá apenas se cargue la página
  // if(isLoading) {
  //   return (
  //     <h1>Loading...</h1>
  //   )
  // }
  
  

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        (isLoading)
          ? (<LoadingQuote />)
          : ( <Quote author={ author } quote={ quote } />)
      }

      <button 
        className="btn btn-primary"
        disabled={ isLoading } // si loading es true se deshabilita
        onClick={() => increment()}>
        Next quote
      </button>
      <button 
        className="btn btn-primary"
        disabled={ isLoading } // si loading es true se deshabilita
        onClick={() => decrement()}>
        previous quote
      </button>
    </>
  )
}
