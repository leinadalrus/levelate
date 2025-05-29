import { model, Model, Schema } from 'mongoose'

interface ILoginUser {
    username: string
    email: string
    password: string
}

type MemberType = Model<ILoginUser>

const MemberSchema = new Schema<ILoginUser, MemberType>(
    {
        username: {
            type: String,
            minLength: 8,
            maxLength: 16,
            trim: true,
            required: true
        },
        email: {
            type: String,
            minLength: 8,
            maxLength: 16,
            trim: true,
            required: true
        },
        password: {
            type: String,
            minLength: 8,
            maxLength: 32,
            trim: true,
            required: true
        }
    },
    { collection: 'users' }
)

export const Member = model('user', MemberSchema)
