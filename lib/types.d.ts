export interface IRoute {
    path: string;
    params: object;
}
export interface ISubscribable {
    subscribe(fn: () => void): () => void;
}
export declare type ICallable = () => void;
