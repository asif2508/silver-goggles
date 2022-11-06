import React from 'react'
import CustomButton from './CustomButton'

const SaveButtonProfile = ({ click }) => {
    return (
        <CustomButton
            styleClass={"mt-2 px-4 py-2"}
            text={"Save"}
            onClick={click}
        />)
}

export default SaveButtonProfile