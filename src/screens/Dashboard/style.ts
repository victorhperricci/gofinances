import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"; 
import { Feather } from '@expo/vector-icons'
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'


export const Container = styled(View)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled(View)`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    height: ${RFPercentage(42)}px;

    justify-content: flex-start;
    align-items: center;   
`

export const UserWrapper = styled(View)`
    width: 100%;
    padding: 0 24px;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const UserInfo = styled(View)`
    flex-direction: row;
    align-items: center;
` 

export const Photo = styled(Image)`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`

export const User = styled(View)`
    margin-left: 17px;
`

export const UserGreeting = styled(Text)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`

export const UserName = styled(Text)`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
`

export const IconPower = styled(Feather as any)`
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled(ScrollView).attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 24 }
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`

export const Transactions = styled.View`
    margin-top: ${RFValue(84)}px;
    padding: 0 24px;
    flex: 1;
`

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-bottom: 16px;
`

export const TransactionList = styled(FlatList).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: { 
        paddingBottom: getBottomSpace() 
    }
})`
    flex: 1;
    /* margin-top: 8px; */
    
`