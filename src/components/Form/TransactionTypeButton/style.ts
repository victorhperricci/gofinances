import styled, { css } from "styled-components/native";
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";

type ContainerProps = {
    isActive: boolean;
    type: 'up' | 'down';
}

type IconProps = {
    type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 1.5px solid ${({ theme }) => theme.colors.text};
    border-radius: 5px;

    padding: 16px;
    width: 48%;

    ${({ isActive, type, theme }) => isActive && css`
        background-color: ${type === 'up' ? theme.colors.success_light : theme.colors.attention_light};
        border: none;
    `}
    
`

export const Icon = styled(Feather)<IconProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;

    ${({ type }) => type === 'up' && css`
        color: ${({ theme }) => theme.colors.success};
    `}

    ${({ type }) => type === 'down' && css`
        color: ${({ theme }) => theme.colors.attention};
    `}
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    color:  ${({ theme }) => theme.colors.text_dark};
`