import { Form } from '@remix-run/react'

type LoginProps = {
    id: number
    email: string
    password: string
    webtoken: string
}

const Login = ({ email, password }: LoginProps) => {
    return (
        <Form className="w-full max-w-xs bg-[#f1eae4] shadow-sm rounded-sm px-8 pt-6 mb-4">
            <label
                htmlFor={email}
                className="block text-[#010401] text-sm mb-2"
            >
                e-Mail
            </label>
            <input
                type="email"
                name={email}
                id="email-input-field"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />

            <label
                htmlFor={password}
                className="block text-[#010401] text-sm mb-2"
            >
                Password
            </label>
            <input
                type="password"
                name={password}
                id="password-input-field"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />

            <button
                type="submit"
                className="g-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Sign me in
            </button>
        </Form>
    )
}

export default Login
