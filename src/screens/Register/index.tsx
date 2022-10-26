import React, { useState } from 'react'
import { TouchableWithoutFeedback, Modal, Alert } from 'react-native'
import { useForm } from 'react-hook-form'
import { Control, FieldValues, SubmitHandler } from 'react-hook-form/dist/types'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { Button } from '../../components/Form/Button'
import { CategorySelectButton } from '../../components/Form/CategorySelectButton'
import { InputForm } from '../../components/Form/InputForm'
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton'

import { closeKeyboard } from '../../utils/functions'
 
import { CategorySelect } from '../CategorySelect'

import { 
    Container,
    Header,
    Fields,
    Title,
    Form,
    TransactionTypes
} from './style'

const schema = yup.object().shape({
    name: yup
        .string()
        .required('Nome é obrigatório'),
    amount: yup
        .number()
        .typeError('Informe um valor numérico')
        .positive('O valor não pode ser negativo')
        .required('O valor é obrigatório')
})

interface FormData {
    name: string;
    amount: string;
}

export const Register = () => {
    const [transactionTypeSelected, setTransactionTypeSelected] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    });

    const { 
        control, 
        handleSubmit,
        formState: { errors } 
    } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    const formControll = control as unknown as Control<FieldValues, any>


    const handleTransactionTypeSelect = (type: 'up' | 'down') => {

        if (transactionTypeSelected === type) {
            setTransactionTypeSelected('');
            return;
        }

        setTransactionTypeSelected(type);

    }

    const handleCloseSelectCategoryModal = () => {
        setCategoryModalOpen(false);
    }

    const handleOpenSelectCategoryModal = () => {
        setCategoryModalOpen(true);
    }

    const handleRegister: SubmitHandler<FormData> = (form) => {

        if (!transactionTypeSelected) {
            return Alert.alert('Selecione o tipo da transação');
        }

        if (category.key === 'category') {
            return Alert.alert('Selecione a categoria');
        } 

        const data = {
            name: form.name,
            amount: form.amount,
            transactionType: transactionTypeSelected,
            category: category.key,
        }
    }

    return (
        <TouchableWithoutFeedback onPress={closeKeyboard} >
            <Container>
                <Header>
                    <Title>Cadastro</Title>
                </Header>

                <Form>
                    <Fields>
                        <InputForm 
                            control={formControll}
                            name='name'
                            placeholder='Nome'
                            placeholderTextColor={'#969CB2'}
                            autoCapitalize='words'
                            autoCorrect={false} 
                            error={errors.name && errors?.name.message}
                        />

                        <InputForm
                            control={formControll}
                            name='amount'
                            placeholder='Preço'
                            placeholderTextColor={'#969CB2'} 
                            keyboardType='numeric'
                            error={errors.amount && errors?.amount.message}
                        />
                        
                        <TransactionTypes>
                            <TransactionTypeButton
                                title='Income'
                                type='up'
                                onPress={() => handleTransactionTypeSelect('up')}
                                isActive={transactionTypeSelected === 'up'}
                            />

                            <TransactionTypeButton
                                title='Outcome'
                                type='down'
                                onPress={() => handleTransactionTypeSelect('down')}
                                isActive={transactionTypeSelected === 'down'}
                            />
                        </TransactionTypes>

                        <CategorySelectButton 
                            title={category.name}
                            onPress={handleOpenSelectCategoryModal}
                            activeOpacity={0.7}  
                        />
                    </Fields>

                    <Button 
                        title='Enviar' 
                        onPress={handleSubmit(handleRegister)}
                    />
                </Form>

                <Modal 
                    visible={categoryModalOpen} 
                    animationType='slide'
                
                >
                    <CategorySelect
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseSelectCategoryModal}
                    />
                </Modal>

            </Container>
        </TouchableWithoutFeedback>
    )
}