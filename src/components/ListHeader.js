import React from 'react'

function ListHeader(props) {
    return (
        <div>
            <h1 className="text-2xl font-semibold text-white">{props.heading}</h1>
        </div>
    )
}

export default ListHeader
