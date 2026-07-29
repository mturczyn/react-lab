import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { TanstackForm } from './TanstackForm'
import { TanstackFormWithUseAppForm } from './tanstackFormWithUseAppForm/TanstackFormWithUseAppForm'

function App() {
    return (
        <>
            <section style={{ border: '1px solid red', padding: '1rem' }}>
                <h1>Simple form using TanStack Form with useForm hook</h1>
                <TanstackForm />
            </section>
            <section style={{ border: '1px solid red', padding: '1rem' }}>
                <p>
                    Simple form using TanStack Form with createFormHook and
                    useAppForm.
                </p>
                <TanstackFormWithUseAppForm />
            </section>
        </>
    )
}

export default App
