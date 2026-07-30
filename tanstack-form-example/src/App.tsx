import './App.css'
import { TanstackForm } from './TanstackForm'
import { TanstackFormWithUseAppForm } from './tanstackFormWithUseAppForm/TanstackFormWithUseAppForm'

function App() {
    return (
        <div>
            <section style={{ border: '1px solid red', padding: '1rem' }}>
                <p style={{margin: '1rem', textAlign:'left'}}>Simple form using TanStack Form with useForm hook</p>
                <TanstackForm />
            </section>
            <section style={{ border: '1px solid red', padding: '1rem' }}>
                <p style={{margin: '1rem', textAlign:'left'}}>
                    Simple form using TanStack Form with createFormHook and
                    useAppForm.
                </p>
                <TanstackFormWithUseAppForm />
            </section>
        </div>
    )
}

export default App
