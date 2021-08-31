import React from 'react'

function Wrapper(props) {
    const style = {
        border : '2px soild black',
        padding: '16px',
    }

    return (
        <div style={style}>
            {props.cildren}
        </div>
    )
}

export default Wrapper