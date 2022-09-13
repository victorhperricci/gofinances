import React from 'react'

import { HighlightCard } from '../../components/HighlightCard'
import { 
    ITransactionCardProps, 
    TransactionCard 
} from '../../components/TransactionCard'


import { 
    Container, 
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    IconPower,
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from './style'

interface TransactionListProps extends ITransactionCardProps {
    id: string;
}

export const Dashboard = () => {

    const transactionsData: TransactionListProps[] = [
        {
            id: '1',
            title: "Desenvolvimento de site",
            amount: "R$ 12.000,00",
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date: "13/04/2020",
            type: 'positive'
        },
        {
            id: '2',
            title: "Hamburgueria Pizzy",
            amount: "R$ 59,00",
            category: {
                name: 'Alimentação',
                icon: 'coffee'
            },
            date: "10/04/2020",
            type: 'negative'
        },
        {
            id: '3',
            title: "Aluguel do apartamento",
            amount: "R$ 1.200,00",
            category: {
                name: 'Casa',
                icon: 'shopping-bag'
            },
            date: "27/03/2020",
            type: 'negative'
        },
        {
            id: '4',
            title: "Computador",
            amount: "R$ 5.400,00",
            category: {
                name: 'Vendas',
                icon: 'dollar-sign'
            },
            date: "13/04/2020",
            type: 'positive'
        },
       
    ]

    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://github.com/VictorHAP1603.png' }} />

                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Victor</UserName>
                        </User>
                    </UserInfo>

                    <IconPower name="power" />
                </UserWrapper>  

            </Header>

            <HighlightCards>
                <HighlightCard 
                    title="Entradas" 
                    amount="R$ 17.400,00" 
                    lastTransaction="Última entrada dia 13 de abril" 
                    type="up"
                />

                <HighlightCard 
                    title="Saídas" 
                    amount="R$ 1.260,00" 
                    lastTransaction="Última sáida dia 03 de abril" 
                    type="down"
                />

                <HighlightCard 
                    title="Total" 
                    amount="R$ 16.140,00" 
                    lastTransaction="01 à 16 de abril" 
                    type="total"
                />
            </HighlightCards>

            <Transactions>
                <Title>Listagem</Title>
                
                <TransactionList 
                    data={transactionsData}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />

            </Transactions>
        </Container>
    )
}

