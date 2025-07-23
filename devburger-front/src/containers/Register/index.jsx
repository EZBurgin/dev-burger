import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import * as S from './styles.js'
import { Button } from '../../components/Button/index.jsx'
import { LeftContainer } from '../../components/LeftContainer/index.jsx'

import { api } from '../../services/api.js'

export function Register() {

    const navigate = useNavigate()

    const schema = Yup.object({
        name: Yup.string().required('Digite um nome'),
        email: Yup.string().email('Digite um email válido').required('Digite um email'),
        password: Yup.string().min(6, 'A senha deve conter pelo menos 6 caracteres').required('Digite uma senha'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'As senhas devem ser iguais').required('Confirme sua senha')
    }).required()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    console.log(errors)

    const onSubmit = async (data) => {

        try {
            const { status } = await api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password,
            },
                {
                    validateStatus: () => true,
                }
            )

            if (status  === 200 || status === 201){
                setTimeout(() => {
                    navigate('/login')
                }, 2000);
                toast.success('🎊Conta criada com sucesso')
            } else if (status === 409) {
                toast.error('👀Email ja cadastrado!') 
            } else {
                throw new Error()
            }

        } catch (err) {
            toast.error('😥 Falha no sistema! Tente novamente.')
        }
    }

    return (
        <S.Container>
            <LeftContainer></LeftContainer>

            <S.RightContainer>
                <S.Title>Criar Conta</S.Title>
                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <S.InputContainer>
                        <label>Nome</label>
                        <input type="text" {...register('name')} />
                        <p>{errors?.name?.message}</p>
                    </S.InputContainer>
                    <S.InputContainer>
                        <label>Email</label>
                        <input type="email" {...register('email')} />
                        <p>{errors?.email?.message}</p>
                    </S.InputContainer>
                    <S.InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register('password')} />
                        <p>{errors?.password?.message}</p>
                    </S.InputContainer>
                    <S.InputContainer>
                        <label>Confirmar Senha</label>
                        <input type="password" {...register('confirmPassword')} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </S.InputContainer>
                    <Button>Confirmar Cadastro</Button>
                </S.Form>
                <p>
                    Ja possui conta? <S.Link to='/login'>Clique Aqui.</S.Link>
                </p>
            </S.RightContainer>
        </S.Container >
    )
}
