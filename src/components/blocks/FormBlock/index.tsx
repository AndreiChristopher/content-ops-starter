/*"use client";

import * as React from 'react';
import classNames from 'classnames';

import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import SubmitButtonFormControl from './SubmitButtonFormControl';

export default function FormBlock(props) {
    const formRef = React.useRef<HTMLFormElement>(null);
    const { fields = [], elementId, submitButton, className, styles = {}, 'data-sb-field-path': fieldPath } = props;
    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Formulário enviado!");
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const params = new URLSearchParams();
        formData.forEach((value, key) => {
            if (typeof value === 'string') {
                params.append(key, value);
            }
        }
        const response = await fetch("/_forms.html", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: params.toString(),
            });
    }

    return (
        <div>
            <form
                className={classNames(
                    'sb-component',
                    'sb-component-block',
                    'sb-component-form-block',
                    className,
                    styles?.self?.margin ? mapStyles({ margin: styles?.self?.margin }) : undefined,
                    styles?.self?.padding ? mapStyles({ padding: styles?.self?.padding }) : undefined,
                    styles?.self?.borderWidth && styles?.self?.borderWidth !== 0 && styles?.self?.borderStyle !== 'none'
                        ? mapStyles({
                              borderWidth: styles?.self?.borderWidth,
                              borderStyle: styles?.self?.borderStyle,
                              borderColor: styles?.self?.borderColor ?? 'border-primary'
                          })
                        : undefined,
                    styles?.self?.borderRadius ? mapStyles({ borderRadius: styles?.self?.borderRadius }) : undefined
                )}
                id={elementId}
                    ref={formRef}
                    data-sb-field-path={fieldPath}
                >
                    <input type="hidden" name="Contato" value="Contato" />
                    <div
                        className={classNames('w-full', 'flex', 'flex-wrap', 'gap-8', mapStyles({ justifyContent: styles?.self?.justifyContent ?? 'flex-start' }))}
                    {...(fieldPath && { 'data-sb-field-path': '.fields' })}
                >
                    {fields.map((field, index) => {
                        const modelName = field.__metadata.modelName;
                        if (!modelName) {
                            throw new Error(`form field does not have the 'modelName' property`);
                        }
                        const FormControl = getComponent(modelName);
                        if (!FormControl) {
                            throw new Error(`no component matching the form field model name: ${modelName}`);
                        }
                        return <FormControl key={index} {...field} {...(fieldPath && { 'data-sb-field-path': `.${index}` })} />;
                    })}
                </div>
                {submitButton && (
                    <div className={classNames('mt-8', 'flex', mapStyles({ justifyContent: styles?.self?.justifyContent ?? 'flex-start' }))}>
                        <SubmitButtonFormControl {...submitButton} {...(fieldPath && { 'data-sb-field-path': '.submitButton' })} />
                    </div>
                )}*/

/*"use client";

import * as React from 'react';
import classNames from 'classnames';

import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import SubmitButtonFormControl from './SubmitButtonFormControl';

export default function FormBlock(props) {
    const formRef = React.useRef<HTMLFormElement>(null);
    const { fields = [], elementId, submitButton, className, styles = {}, 'data-sb-field-path': fieldPath } = props;

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Formulário enviado!");
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const params = new URLSearchParams();
        formData.forEach((value, key) => {
            if (typeof value === 'string') {
                params.append(key, value);
            }
        });

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            },
            body: JSON.stringify({
                access_key: "a928d100-8d19-4549-9a51-1aee6a908c5a"
            }),
        });
        }
        catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form
                className={classNames(
                    'sb-component',
                    'sb-component-block',
                    'sb-component-form-block',
                    className,
                    styles?.self?.margin ? mapStyles({ margin: styles?.self?.margin }) : undefined,
                    styles?.self?.padding ? mapStyles({ padding: styles?.self?.padding }) : undefined,
                    styles?.self?.borderWidth && styles?.self?.borderWidth !== 0 && styles?.self?.borderStyle !== 'none'
                        ? mapStyles({
                              borderWidth: styles?.self?.borderWidth,
                              borderStyle: styles?.self?.borderStyle,
                              borderColor: styles?.self?.borderColor ?? 'border-primary'
                          })
                        : undefined,
                    styles?.self?.borderRadius ? mapStyles({ borderRadius: styles?.self?.borderRadius }) : undefined
                )}
                id={elementId}
                ref={formRef}
                data-sb-field-path={fieldPath}
                onSubmit={handleFormSubmit}
            >
                <div
                    className={classNames('w-full', 'flex', 'flex-wrap', 'gap-8', mapStyles({ justifyContent: styles?.self?.justifyContent ?? 'flex-start' }))}
                    {...(fieldPath && { 'data-sb-field-path': '.fields' })}
                >
                    {fields.map((field, index) => {
                        const modelName = field.__metadata.modelName;
                        if (!modelName) {
                            throw new Error(`form field does not have the 'modelName' property`);
                        }
                        const FormControl = getComponent(modelName);
                        if (!FormControl) {
                            throw new Error(`no component matching the form field model name: ${modelName}`);
                        }
                        return <FormControl key={index} {...field} {...(fieldPath && { 'data-sb-field-path': `.${index}` })} />;
                    })}
                </div>
                {submitButton && (
                    <div className={classNames('mt-8', 'flex', mapStyles({ justifyContent: styles?.self?.justifyContent ?? 'flex-start' }))}>
                        <SubmitButtonFormControl {...submitButton} {...(fieldPath && { 'data-sb-field-path': '.submitButton' })} />
                    </div>
                )}
            </form>
        </div>
    );
}*/

"use client";

import * as React from 'react';
import classNames from 'classnames';

import { getComponent } from '../../components-registry';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import SubmitButtonFormControl from './SubmitButtonFormControl';

export default function FormBlock(props) {
    const formRef = React.useRef<HTMLFormElement>(null);
    const { fields = [], elementId, submitButton, className, styles = {}, 'data-sb-field-path': fieldPath } = props;
    const [message, setMessage] = React.useState<string | null>(null); //feedback
    const [isSuccess, setIsSuccess] = React.useState<boolean | null>(null); //feedback
    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Formulário enviado!");
        
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);
        const formValues: { [key: string]: string } = {};

        // Preenche um objeto com os dados do formulário
        formData.forEach((value, key) => {
            if (typeof value === 'string') {
                formValues[key] = value;
            }
        });

            try {
                // Envia os dados para o Web3Forms
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        access_key: "a928d100-8d19-4549-9a51-1aee6a908c5a",
                        name: formValues.name,        // Supondo que 'name' seja um campo no seu formulário
                        email: formValues.email,      // Supondo que 'email' seja um campo no seu formulário
                        message: formValues.message,  // Supondo que 'message' seja um campo no seu formulário
                    }),
                });
    
                if (response.ok) {
            setIsSuccess(true);
            setMessage("Formulário enviado com sucesso!");
            form.reset(); // Limpa os campos do formulário
                } else {
                    throw new Error('Falha ao enviar o formulário');
                }
            }
            catch (error) {
        console.error('Erro:', error);
        setIsSuccess(false);
        setMessage("Ocorreu um erro ao enviar o formulário. Tente novamente.");
    }
        }
        };

    return (
        <div>
            {message && (
    <div className={classNames(
        "p-4 rounded-md text-center mb-4",
        isSuccess ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
    )}>
        {message}
    </div>
)}
            <form
                className={classNames(
                    'sb-component',
                    'sb-component-block',
                    'sb-component-form-block',
                    className,
                    styles?.self?.margin ? mapStyles({ margin: styles?.self?.margin }) : undefined,
                    styles?.self?.padding ? mapStyles({ padding: styles?.self?.padding }) : undefined,
                    styles?.self?.borderWidth && styles?.self?.borderWidth !== 0 && styles?.self?.borderStyle !== 'none'
                        ? mapStyles({
                              borderWidth: styles?.self?.borderWidth,
                              borderStyle: styles?.self?.borderStyle,
                              borderColor: styles?.self?.borderColor ?? 'border-primary'
                          })
                        : undefined,
                    styles?.self?.borderRadius ? mapStyles({ borderRadius: styles?.self?.borderRadius }) : undefined
                )}
                id={elementId}
                ref={formRef}
                data-sb-field-path={fieldPath}
                onSubmit={handleFormSubmit} // Attach the form submit handler here
            >
                <input type="hidden" name="Contato" value="Contato" />
                <div
                    className={classNames('w-full', 'flex', 'flex-wrap', 'gap-8', mapStyles({ justifyContent: styles?.self?.justifyContent ?? 'flex-start' }))}
                    {...(fieldPath && { 'data-sb-field-path': '.fields' })}
                >
                    {fields.map((field, index) => {
                        const modelName = field.__metadata.modelName;
                        if (!modelName) {
                            throw new Error(`form field does not have the 'modelName' property`);
                        }
                        const FormControl = getComponent(modelName);
                        if (!FormControl) {
                            throw new Error(`no component matching the form field model name: ${modelName}`);
                        }
                        return <FormControl key={index} {...field} {...(fieldPath && { 'data-sb-field-path': `.${index}` })} />;
                    })}
                </div>
                {submitButton && (
                    <div className={classNames('mt-8', 'flex', mapStyles({ justifyContent: styles?.self?.justifyContent ?? 'flex-start' }))}>
                        <SubmitButtonFormControl {...submitButton} {...(fieldPath && { 'data-sb-field-path': '.submitButton' })} />
                    </div>
                )}
            </form>
        </div>
    );
}
