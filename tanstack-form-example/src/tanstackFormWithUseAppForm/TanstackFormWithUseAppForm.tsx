import { createFormHook, createFormHookContexts } from '@tanstack/react-form'
import z from 'zod'
import { fieldContext, formContext } from './formHookContexts'
import { TextField } from './TextField'
import { NumberField } from './NumberField'
import { ErrorMessage } from './errors/ErrorMessage'

const schema = z.object({
    firstName: z.string().min(1, { message: 'First name is required' }),
    lastName: z.string().min(1, { message: 'Last name is required' }),
    age: z.number().min(18, { message: 'You must be at least 18 years old' }),
})

const { useAppForm } = createFormHook({
    fieldContext,
    formContext,
    // ErrorMessage - just for educational purposes.
    // Different approach is to define error displays directly in the field
    // components.
    fieldComponents: { TextField, NumberField, ErrorMessage },
    formComponents: {},
})

export const TanstackFormWithUseAppForm = () => {
    const form = useAppForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            age: 0,
        },
        validators: { onChange: schema },
        onSubmit: async ({ value }) =>
            console.log('Form submitted with values:', value),
    })

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()
                form.handleSubmit()
            }}
        >
            <form.AppForm>
                <form.AppField
                    name="firstName"
                    children={(field) => <field.TextField label="First Name" />}
                />
                <form.AppField
                    name="lastName"
                    children={(field) => <field.TextField label="Last Name" />}
                />
                <form.AppField
                    name="age"
                    children={(field) => (
                        <>
                            <field.NumberField label="Age" />
                            <ErrorMessage />
                        </>
                    )}
                />
                <button type="submit">Submit</button>
            </form.AppForm>
        </form>
    )
}
