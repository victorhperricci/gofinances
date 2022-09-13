import React from 'react'

import {
    Container,
    Title,
    Icon,
    Footer,
    Amount,
    Category,
    CategoryName,
    Date,
} from './style'

interface Category {
    name: string;
    icon: string;   
}

export interface ITransactionCardProps {
    title: string;
    amount: string;
    category: Category;
    date: string;
    type: 'positive' | 'negative';
}

interface Props {
    data: ITransactionCardProps;
}

export const TransactionCard = ({ data }: Props) => {

    const { amount, category, date, title, type } = data;

    return (
        <Container>
            <Title>
                {title}
            </Title>
            
            <Amount type={type} >
                {type === 'negative' && '- '}
                {amount}
            </Amount>

            <Footer>
                <Category>
                    <Icon name={category.icon} />
                    <CategoryName>
                        {category.name}
                    </CategoryName>
                </Category>

                <Date>{date}</Date>
            </Footer>

        </Container>
    )
}