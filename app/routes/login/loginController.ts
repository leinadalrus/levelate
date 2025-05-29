import { Member } from '../members/memberSchema'
import { validateAccessToken } from './authentication'

// JWT-based login authentication
export class LoginController {
    email = (request: Request, response: Response) => {
        const email = request.json()

        const user = Member.findOne({
            email
        })
        if (!user) response.json()

        response.json()

        return user.toString()
    }

    password = (request: Request, response: Response) => {
        const password = request.json()

        const data = Member.findOne({
            password
        })
        if (!data) response.json()

        response.json()

        return data.toString()
    }

    authenticate = async (request: Request, response: Response) => {
        try {
            const headers = request.headers
                .get('authorization')
                ?.replace('Bearer', '')

            const user = await Member.findOne({
                headers
            })
            if (!user) response.json()

            response.json()
        } catch (err) {
            response.json()
            console.table(err)
        }
    }

    login = async (request: Request, response: Response) => {
        this.authenticate(request, response)
        validateAccessToken(request, response)
    }
}
