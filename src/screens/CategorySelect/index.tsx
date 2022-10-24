import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { categories } from '../../utils/categories';

import { Button } from '../../components/Form/Button';

import { 
    Container,
    Header,
    Title, 
    Category,
    Icon,
    Name,
    Separator,
    Footer
} from './style'

export interface CategorySelectProps {
    name: string;
    key: string;
    icon?: string;
    color?: string;
}

interface Props {
    category: CategorySelectProps;
    setCategory: (category: CategorySelectProps) => void;
    closeSelectCategory: () => void;
}

export const CategorySelect = ({
    category,
    setCategory,
    closeSelectCategory
}: Props) => {

    const handleCategorySelect = (item: CategorySelectProps) => {
        setCategory(item);
    }

    return (
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>

            <FlatList 
                data={categories}
                style={{ flex: 1, width: '100%' }}
                keyExtractor={item => item.key}
                renderItem={({ item }) => (
                    <Category 
                        onPress={() => handleCategorySelect(item)}
                        isActive={category.key === item.key}
                    >
                        <Icon name={item.icon} />
                        <Name>{item.name}</Name>
                    </Category>
                )}
                ItemSeparatorComponent={() => <Separator />}
            />

            <Footer>
                <Button 
                    title='Selecionar' 
                    onPress={closeSelectCategory}  
                />
            </Footer>

        </Container>
    )
}