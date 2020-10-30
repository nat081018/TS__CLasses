export interface HasFormat {
    recipient?: string,
    details?: string,
    amount?: number,
    format(): string
}