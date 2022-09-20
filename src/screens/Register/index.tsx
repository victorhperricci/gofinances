import React from 'react'
import { Input } from '../../components/Form/Input'

import { 
    Container,
    Header,
    Title,
    Form
} from './style'

export const Register = () => {
    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Input />
            </Form>
        </Container>
    )
}