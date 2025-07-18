import PropTypes from 'prop-types'

import { ContainerButton } from "./style"

export function Button({ children }) {

    return (
        <ContainerButton>{children}</ContainerButton>
    )
}

Button.protoTypes = {
    children: PropTypes.string
}