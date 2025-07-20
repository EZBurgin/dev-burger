import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import * as S from './styles.js'
import { Button } from '../../components/Button/index.jsx'
import logo2 from '../../assets/logo2.svg'

import { api } from '../../services/api.js'

export default function Login() {

    const schema = Yup.object({
        email: Yup.string().email('Digite um Email válido').required('Digite um Email'),
        password: Yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('Digite uma senha')
    }).required()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = async (data) => {
        const response = await api.post('/session', {
            email: data.email,
            password: data.password
        })
        console.log(response)
    }
    
    return (
        <S.Container>

            <S.LeftContainer>
                <img src={logo2} alt='devburger-logo' />
            </S.LeftContainer>

            <S.RightContainer>
                <S.Title>Olá, seja bem vindo ao <span>Dev Burguer!</span> <br />
                    Acesse com seu <span>Login e senha.</span></S.Title>

                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <S.InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")}/>
                        <p>{errors?.email?.message}</p>
                    </S.InputContainer>
                    <S.InputContainer>
                        <label>Password</label>
                        <input type="password" {...register("password")}/>
                        <p>{errors?.password?.message}</p>
                    </S.InputContainer>
                    <Button type="submit">Entrar</Button>
                </S.Form>
                <p>
                    Não possui  conta? <a>Clique aqui.</a>
                </p>
            </S.RightContainer>

        </S.Container>
    )
}