import * as S from './styles.js'
import { Button } from '../../components/Button/index.jsx'

import logo2 from '../../assets/logo2.svg'

export default function Login() {

    return (
        <S.Container>

            <S.LeftContainer>
                <img src={logo2} alt='devburger-logo' />
            </S.LeftContainer>

            <S.RightContainer>
                <S.Title>Olá, seja bem vindo ao <span>Dev Burguer!</span> <br/>
                    Acesse com seu <span>Login e senha.</span></S.Title>

                <S.Form>
                    <S.InputContainer>
                        <label>Email</label>
                        <input type="email" />
                    </S.InputContainer>
                    <S.InputContainer>
                        <label>Password</label>
                        <input type="password" />
                    </S.InputContainer>
                    <Button>Entrar</Button>
                </S.Form>
                <p>
                    Não possui  conta? <a>Clique aqui.</a>
                </p>
            </S.RightContainer>

        </S.Container>
    )
}