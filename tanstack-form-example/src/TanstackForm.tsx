import { useForm } from '@tanstack/react-form'
import z from 'zod'

const schema = z.object({
    firstName: z.string().min(1, { message: 'First name is required' }),
    lastName: z.string().min(1, { message: 'Last name is required' }),
    age: z.number().min(18, { message: 'You must be at least 18 years old' }),
})

export const TanstackForm = () => {
    const form = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            age: 0,
        },
        validators: { onChange: schema },
        onSubmit: async ({ value }) =>
            alert('Form submitted with values: ' + JSON.stringify(value))
    })

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()
                form.handleSubmit()
            }}
        >
            <form.Field
                name="firstName"
                children={(field) => (
                    <>
                        <div>
                            <input
                                name={field.name}
                                value={field.state.value}
                                onChange={(e) =>
                                    field.handleChange(e.target.value)
                                }
                            />
                        </div>
                        <FieldError
                            errors={field.state.meta.errors.map((e) => ({
                                message: e?.message,
                            }))}
                        />
                    </>
                )}
            />
            <form.Field
                name="lastName"
                children={(field) => (
                    <>
                        <div>
                            <input
                                name={field.name}
                                value={field.state.value}
                                onChange={(e) =>
                                    field.handleChange(e.target.value)
                                }
                            />
                        </div>
                        <FieldError
                            errors={field.state.meta.errors.map((e) => ({
                                message: e?.message,
                            }))}
                        />
                    </>
                )}
            />
            <form.Field
                name="age"
                children={(field) => {
                    // console.log('age field', field)
                    return (
                        <>
                            <div>
                                <input
                                    name={field.name}
                                    type="number"
                                    value={field.state.value}
                                    onChange={(e) =>
                                        field.handleChange(
                                            Number(e.target.value)
                                        )
                                    }
                                />
                            </div>
                            <FieldError
                                errors={field.state.meta.errors.map((e) => ({
                                    message: e?.message,
                                }))}
                            />
                        </>
                    )
                }}
            />
            <button type="submit">Submit</button>
        </form>
    )
}

const FieldError = ({ errors }: { errors?: { message?: string }[] }) => {
    return (
        <div>
            {errors?.length && errors.map((error) => error?.message).join(', ')}
        </div>
    )
}
