export type BaseApiResponse = {
  success: boolean
  message: string
}

export type BaseErrorResponse = {
  success: false
  error: string
}
