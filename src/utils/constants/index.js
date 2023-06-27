import { Strings } from "./Strings/Strings"

export { Strings }

export const ERROR_CODES = {
    EMAIL_ALREADY_IN_USE: 'auth/email-already-in-use',
    EMAIL_NOT_FOUND: 'auth/invalid-email',
    WRONG_PASSWORD: 'auth/wrong-password',
    PASSWORD_LESS_THAN_SIX_CHARACTERS: 'auth/invalid-password',
    USER_NOT_FOUND: 'auth/user-not-found',
}