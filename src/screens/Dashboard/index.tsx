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
    IconPower
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

            <HighlightCard />
        </Container>
    )
}

