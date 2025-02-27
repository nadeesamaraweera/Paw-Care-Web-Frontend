import React, { ChangeEvent } from 'react';

interface SelectProps {
    name: string;
    label: string;
    options: string[];
    optional: boolean;
    id: string;
    onChange: (selectedValue: string) => void; // Callback for selection change
}

class Select extends React.Component<SelectProps, object> {
    handleSelectChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        const selectedValue = e.target.value;
        this.props.onChange(selectedValue);
    };

    render(): React.ReactElement {
        return (
            <div className={'m-2'}>
                <label htmlFor={this.props.id} className={'block'}>
                    {this.props.label} {!this.props.optional ? <span className="text-red-600">*</span> : null}
                </label>
                <select
                    id={this.props.id}
                    name={this.props.name}
                    className={'block border border-gray-200 outline-none focus:border-t-gray-400 p-2 h-10 w-full'}
                    onChange={this.handleSelectChange}
                >
                    {this.props.options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        );
    }
}

export default Select;
