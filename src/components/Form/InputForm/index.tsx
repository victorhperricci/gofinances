import React from 'react'
import { TextInputProps } from 'react-native'
import { Control, Controller } from 'react-hook-form';
import { FieldError } from 'react-hook-form/dist/types/errors';

import { Input } from '../Input';

import { Container, Error } from './style'

type Props = TextInputProps & {
    control: Control;
    name: string;
    error?: string;
};

export const InputForm = ({
    control,
    name,
    error,
    ...rest
}: Props) => {
    return (
        <Container>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value } }) => ( 
                    <Input 
                        onChangeText={onChange}
                        value={value}
                        {...rest}
                    />
                )}
            />
            {error && <Error>{error}</Error>}
        </Container>
    )
}