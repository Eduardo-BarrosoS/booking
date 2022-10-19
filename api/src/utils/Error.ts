interface Error {
    status?: number,
    message?: string
}

export function CreateError(status: number, message: string) {
    const err: Error = new Error()
    err.status = status
    err.message = message
    return err
}