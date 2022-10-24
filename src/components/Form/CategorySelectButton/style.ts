import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 18px 16px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.shape};

`

export const Category = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    color: ${({ theme }) => theme.colors.text};
`

export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
    
`