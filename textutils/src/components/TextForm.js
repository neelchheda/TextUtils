import React from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    return (
        <div>
            <div className="mb-3">
                <h3>{
                    props.heading
                }</h3>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                <button type="button" className="btn btn-outline-success my-3">Convert</button>
            </div>
        </div>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string
}
TextForm.defaultProps = {
    heading: "Enter text to analyze"
}
