import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

export default function Ellipsis({ color, divSizeX, divSizeY, className, style }) {
    const circles = [...Array(4)].map((_, index) => <div key={index} style={{ background: `${color}` }} />)

    return (
        <div className={`lds-ellipsis ${className}`} style={{ ...style, width: divSizeX, height: divSizeY }}>
            {circles}
        </div>
    )
}

Ellipsis.propTypes = {
    /** hex color */
    color: PropTypes.string,
    /** size in pixel */
    divSizeX: PropTypes.number,
    divSizeX: PropTypes.number,
    /** class name  */
    className: PropTypes.string,
    /** style object */
    style: PropTypes.object,
}

Ellipsis.defaultProps = {
    color: '#404E5c',
    divSizeX: 10,
    divSizeY: 10,
    className: '',
    style: {},
}