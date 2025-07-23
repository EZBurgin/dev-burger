import { ContainerLeft } from './style'
import logo from '../../assets/logo.svg'

export function LeftContainer() {

    return (
        <ContainerLeft> 
            <img src={logo} alt="logo-devburger" />
        </ContainerLeft>
    )
}