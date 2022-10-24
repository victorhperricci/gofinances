import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
    background-color: ${props => props.theme.colors.primary};

    width: 100%;
    height: ${RFValue(113)}px;

    align-items: center;
    justify-content: flex-end;
    padding-bottom: 19px;
`

export const Fields = styled.View`
    width: 100%;

`

export const Title = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${props => props.theme.colors.shape};
`

export const Form = styled.View`
    flex: 1;
    padding: 24px;
    width: 100%;

    /* background-color: red; */
    justify-content: space-between;
`

export const TransactionTypes = styled.View`
    flex-direction: row;
    justify-content: space-between;
    
    margin-top: 8px;
    margin-bottom: 16px;
`