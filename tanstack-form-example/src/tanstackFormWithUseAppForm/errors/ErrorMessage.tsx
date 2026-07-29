import { useFieldContext } from '../formHookContexts'

export function ErrorMessage() {
    const field = useFieldContext()
    const anyErrors = !!field.state.meta.errors?.length

    return (
        anyErrors && (
            <div
                style={{
                    color: anyErrors ? 'red' : 'black',
                }}
            >
                {field.state.meta.errors.map(
                    (e) => `Error at ${e.path}: ${e.message}`
                )}
            </div>
        )
    )
}
