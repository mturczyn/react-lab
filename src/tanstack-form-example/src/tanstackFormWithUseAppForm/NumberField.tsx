import { useFieldContext } from './formHookContexts'

export function NumberField({ label }: { label: string }) {
    // The `Field` infers that it should have a `value` type of `string`
    const field = useFieldContext<number>()
    return (
        <div>
            <label>
                <span>{label}</span>
                <input
                    value={field.state.value}
                    onChange={(e) => field.handleChange(Number(e.target.value))}
                />
                <div>
                    {field.state.meta.errors.map((e) => e.message).join(', ')}
                </div>
            </label>
        </div>
    )
}
