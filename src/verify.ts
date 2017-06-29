import {RestError} from "./RestError";
import {httpStatusCode} from "./httpStatus";
import {RouterEvent} from "./RouterEvent";

export function requireKeys(o: object, keys: string[], part: string = "member"): void {
    const existingKeys = Object.keys(o);
    for (const key of keys) {
        if (existingKeys.indexOf(key) === -1) {
            throw new RestError(httpStatusCode.clientError.UNPROCESSABLE_ENTITY, `missing required ${part} ${key}`)
        }
    }
}

export function blacklistKeys(o: object, keys: string[], part: string = "member"): void {
    for (const key of Object.keys(o)) {
        if (keys.indexOf(key) !== -1) {
            throw new RestError(httpStatusCode.clientError.UNPROCESSABLE_ENTITY, `unexpected ${part} ${key}`)
        }
    }
}

export function whitelistKeys(o: object, keys: string[], part: string = "member"): void {
    for (const key of Object.keys(o)) {
        if (keys.indexOf(key) === -1) {
            throw new RestError(httpStatusCode.clientError.UNPROCESSABLE_ENTITY, `unexpected ${part} ${key}`)
        }
    }
}

export function requireQueryParameters(event: RouterEvent, keys: string[]): void {
    requireKeys(event.queryStringParameters || {}, keys, "query parameter");
}

export function blacklistQueryParameters(event: RouterEvent, keys: string[]): void {
    blacklistKeys(event.queryStringParameters || {}, keys, "query parameter");
}

export function whitelistQueryParameters(event: RouterEvent, keys: string[]): void {
    whitelistKeys(event.queryStringParameters || {}, keys, "query parameter");
}