declare global {
    namespace NodeJS {
        interface ProcessEnv {
            EXPIRATION_TIME: number
            NODE_ENV: 'development' | 'production'
            NOSQL_PW: string
            NOSQL_USR: string
            SALT_ROUNDS: number
            SECRET_KEY: string
            SECRET_HASH: string
        }
    }
}

export {}
