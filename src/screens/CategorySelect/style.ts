import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type CategoryProps = {
    isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
    background-color: ${props => props.theme.colors.primary};
    width: 100%;
    height: ${RFValue(113)}px;

    align-items: center;
    justify-content: flex-end;
`

export const Title = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${RFValue(18)}px;

    color: ${props => props.theme.colors.shape};

    margin-bottom: 19px;
`

export const Category = styled(TouchableOpacity)<CategoryProps>`
    flex-direction: row;
    align-items: center;

    width: 100%;

    padding: ${RFValue(15)}px;

    background-color: ${({ isActive, theme }) => 
        isActive ? theme.colors.secondary_light : theme.colors.background
    };

`

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    margin-right: 16px;

`

export const Name = styled.Text`
    font-family: ${props => props.theme.fonts.regular};
    font-size: ${RFValue(14)}px;

`

export const Separator = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.text};
    
`

export const Footer = styled.View`
    width: 100%;
    padding: 24px;

`
