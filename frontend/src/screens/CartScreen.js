import React, { useEffect } from 'react'
import { addToCart } from '../actions/cartActions';
import { useDispatch } from 'react-redux'

export default function CartScreen(props) {
    const productId = props.match.params.id;
    console.log(productId);
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    console.log(qty);
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])
    return (
        <div>
            <h1>{qty} </h1>
            <h1>{productId} </h1>
        </div>
    )
}
