import React from 'react'

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1
    return (
        <div>
            <h1>{qty} </h1>
            <h1>{productId} </h1>
        </div>
    )
}
