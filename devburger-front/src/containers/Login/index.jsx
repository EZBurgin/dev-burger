import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import * as S from './styles.js'
import { Button } from '../../components/Button/index.jsx'
import { LeftContainer } from '../../components/LeftContainer/index.jsx'

import { api } from '../../services/api.js'

export function Login() {

    const navigate = useNavigate()

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

        const response = await toast.promise(
            api.post('/session', {
                email: data.email,
                password: data.password
            }
            ),
            {
                pending: 'Verificando seus dados',
                success: {
                    render() {
                        setTimeout(() => {
                            navigate('/')
                        }, 2000)
                        return 'Seja Bem Vindo(a) 👌'
                    }
                },
                error: 'Email ou Senha inválidos 🤯'
            }
        )
    }

    return (
        <S.Container>

            <LeftContainer></LeftContainer>

            <S.RightContainer>
                <S.Title>Olá, seja bem vindo ao <span>Dev Burguer!</span> <br />
                    Acesse com seu <span>Login e senha.</span></S.Title>

                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <S.InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </S.InputContainer>
                    <S.InputContainer>
                        <label>Password</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>

                    </S.InputContainer>
                    <Button type="submit" >Entrar</Button>
                </S.Form>
                <p>
                    Não possui  conta? <S.Link to='/cadastro'>Clique aqui.</S.Link>
                </p>
            </S.RightContainer>

        </S.Container>
    )
}