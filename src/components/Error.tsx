export interface Error {
    message: string;
}

interface ErrorProps {
    error: Error|null;
}

export const ErrorComponent = ({error}: ErrorProps) =>{
    return (
            <div>Erreur : {error?.message}</div>
    )
}