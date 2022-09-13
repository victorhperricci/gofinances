import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import { RFValue } from "react-native-responsive-fontsize";

interface TransactionProps {
    type: "positive" | "negative";
}

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;
    padding: 17px 24px;
    margin-bottom: 16px;
`;

export const Header = styled.View`   
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`

export const Amount = styled.Text<TransactionProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(20)}px;
    margin-top: 2px;
    color: ${({ theme, type }) => {
       return type === "positive"
        ? theme.colors.success
        : theme.colors.attention
    }};
`

export const Icon = styled(Feather as any)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
`

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 19px;
`

export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`

export const CategoryName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    margin-left: 12px;
    color: ${({ theme }) => theme.colors.text};
`

export const Date = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`
