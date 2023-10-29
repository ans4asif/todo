import React from 'react';

interface Option {
    value: string;
    name: string;
};
interface FieldProps {
    type: 'select' | 'text';
    onChange?: (event: React.ChangeEvent<any>) => void;
    options?: Option[];
    value?: string;
    placeholder: string;
}


function Field({ type, onChange = () => { }, options, value, placeholder }: FieldProps) {
    if (type === 'select') {
        return (
            <select onChange={onChange} value={value} placeholder={placeholder} className='field'>
                {options?.map((option: any) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        );
    } else if (type === 'text') {
        return (
            <input type="text" onChange={onChange} value={value} placeholder={placeholder} className='field' />
        );
    } else {
        return null; // Handle other types or provide a default behavior
    }
}

export default Field;
