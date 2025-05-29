import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

export function regenerateAccessToken(username: string): string {
    return jwt.sign(username, `${process.env['SECRET_KEY']}`, {
        expiresIn: '3000s'
    })
}

export function isAccessTokenExpired(accessToken: string): boolean {
    const { expiry } = jwt.decode(accessToken) as {
        expiry: number
    }

    return Date.now() >= expiry
}

export function validateAccessToken(
    request: Request,
    response: Response
): number {
    const header = request.headers.get('authorization')
    const token = header && header.split(' ')[1]

    if (token == null) return response.status

    jwt.verify(token, process.env['SECRET_KEY'], (err: unknown) => {
        console.table(err)

        if (err) return response.status
    })

    return response.status
}
