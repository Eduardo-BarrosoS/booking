interface Error {
    status?: number,
    message?: string
}

export function CreateError({ status, message }: Error) {
    const err: Error = new Error()
    err.status = status
    err.message = message
    return err
}