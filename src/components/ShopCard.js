import React, {useContext} from 'react'
import {Link} from "react-router-dom/cjs/react-router-dom"
//Components
import Card from './shared/Card'

//Context
import { CardContext } from '../context/CardContextProvider'

const ShopCard = () => {

    const {state, dispatch} = useContext(CardContext)

  return (
    <div>
        <div>
            {state.selectedItems.map(item => <Card key={item.id} data={item} />)}
        </div>
        {
            state.itemsCounter > 0 && <div>
                <p><span>Total Items:</span>{state.itemsCounter}</p>
                <p><span>Total Payments:</span>{state.total}</p>
                <div>
                    <button onClick={() => dispatch({type: "CHECKOUT"})} >Check Out</button>
                    <button onClick={() => dispatch({type: "CLEAR"})} >Clear</button>
                </div>
            </div>
        }

        {
            state.checkout && <div>
                <h3>Check Out Successfully</h3>
                <Link to='/products'>Buy More</Link>
            </div>
        }

        {
            !state.checkout&& state.itemsCounter === 0 && <div>
                <h3>Want to Shop again?!</h3>
                <Link to='/products'>Back to Shop</Link>
            </div>
        }
    </div>
  )
}

export default ShopCard