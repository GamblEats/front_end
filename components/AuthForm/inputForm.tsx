import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Container, StyledIcon, Input } from './styles';

interface Props {
    name: string;
    formik: any;
    type?: string;
    disabled?: boolean;
    placeholder?: any;
    icon?: IconProp;
}

const defaultProps: Partial<Props> = {
    type: 'text',
    disabled: false,
    placeholder: '',
    icon: undefined,
};

export interface inputProps {
    outline: string;
}
const InputForm = ({ icon, name, formik, type, disabled, placeholder }: Props) => {
    return (
        <Container>
            <Input
                placeholder={formik.touched[name] && formik.errors[name] ? formik.errors[name] : placeholder}
                color={formik.touched[name] && formik.errors[name] ? 'red' : '#D9D9D9'}
                disabled={disabled}
                type={type}
                {...formik.getFieldProps(name)}
                outline={formik.touched[name] && formik.errors[name] ? '1px solid red' : '#ffffff'}
            />
            {icon && <StyledIcon icon={icon} />}
        </Container>
    );
};

InputForm.defaultProps = defaultProps;
export default InputForm;
