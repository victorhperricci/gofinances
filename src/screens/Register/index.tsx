import React, { useState } from 'react'
import { TouchableWithoutFeedback, Modal } from 'react-native'

import { Button } from '../../components/Form/Button'
import { CategorySelectButton } from '../../components/Form/CategorySelectButton'
import { Input } from '../../components/Form/Input'
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

export const Register = () => {
    const [transactionTypeSelected, setTransactionTypeSelected] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    });

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

    return (
        <TouchableWithoutFeedback onPress={closeKeyboard} >
            <Container>
                <Header>
                    <Title>Cadastro</Title>
                </Header>

                <Form>
                    <Fields>
                        <Input 
                            placeholder='Nome'
                            placeholderTextColor={'#969CB2'} 
                        />

                        <Input 
                            placeholder='Preço'
                            placeholderTextColor={'#969CB2'} 
                            
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

                    <Button title='Enviar' />
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