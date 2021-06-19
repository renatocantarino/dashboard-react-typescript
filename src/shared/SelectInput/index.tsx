import React from 'react';
import { Container } from "./styles";

declare interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[],
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined,
    defaultValue?: string | number
}


//FC = funcional componente
const SelectInput: React.FC<ISelectInputProps> = ({ options, onChange, defaultValue }) => (
    <Container>
        <select onChange={onChange} defaultValue={defaultValue}>
            {
                options.map((opt, index) => (
                    <option key={index} value={opt.value}>{opt.label}</option>
                ))
            }
        </select>
    </Container >
)

export default SelectInput;