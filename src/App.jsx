import {useState} from 'react'
import PropTypes from 'prop-types';


export const App = ({value}) =>{
    const [counter, setCounter] = useState(value)

    const increase = () => setCounter( counter + 1)

    const decrease = () => setCounter( counter - 1)

    const reset = (set) => setCounter( set )
    
    return(
        
        <>
            <h1>Contador</h1>

            <p>{counter}</p>

            <button onClick={ increase }>
                Increase
            </button>
        
            <button onClick={ decrease }>
                Decrease
            </button>

            <button onClick={ () => reset(value) }>
                Reset
            </button>
            
        </>
    )   
}

App.propTypes = {
    value: PropTypes.number.isRequired,
}