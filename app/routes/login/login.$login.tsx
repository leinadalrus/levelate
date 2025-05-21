import { Form } from '@remix-run/react'

const Login = () => {
    return (
        <>
            <Form>
                <input type="email" name="email" id="email-input-field" />
                <input
                    type="password"
                    name="password"
                    id="password-input-field"
                />

                <button type="submit">Sign in</button>
            </Form>
        </>
    )
}

export default Login
