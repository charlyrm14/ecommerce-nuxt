export interface UserLogin {
    id: number
    name: string
    email: string
    role: string
    created_at: string
    updated_at: string
}

export interface Login {
    user: UserLogin
    token: string
    token_type: string
    expires_at: string
}