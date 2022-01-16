export interface Error {
    code:    number;
    message: string;
    errors:  ErrorElement[];
}

export interface ErrorElement {
    message: string;
    domain:  string;
    reason:  string;
}
