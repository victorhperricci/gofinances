import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'

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
    HighlightCards
} from './style'

export const Dashboard = () => {
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


            <HighlightCards 
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 24 }}
            >
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </HighlightCards>
        </Container>
    )
}

