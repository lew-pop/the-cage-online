import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
    return (
        <Spinner
            animation='grow'
            size="sm"
            role='status'
            style={{
                height: '100px',
                width: '100px',
                margin: 'auto',
                display: 'block',
                backgroundColor: '#7c65a9'
            }}
        >
            <span className='sr-only'>Loading...</span>
        </Spinner>
    )
}

export default Loader
