import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter(); // la desestructuración la hago con llaves ya que retorno un objeto


  return (
    <>
        <h1>Counter with Hook: { counter }</h1>
        <hr />

        <button className="btn btn-primary" onClick={() => increment(2)}>+1</button>
        <button className="btn btn-primary" onClick={reset}>Reset</button>
        <button className="btn btn-primary" onClick={() => decrement(2)}>-1</button>
    </>
  )
}

// onClick={reset}
// onClick={decrement}