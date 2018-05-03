export function jsonSerializer(body: any): string {
    return JSON.stringify(body);
}

export function textSerializer(body: any): string {
    return typeof body === "string" ? body : JSON.stringify(body);
}
