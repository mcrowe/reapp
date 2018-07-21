/// <reference types="react" />
export interface IRoute {
    path: string;
    params: object;
}
export interface ISubscribable {
    subscribe(fn: () => void): () => void;
}
export declare type ICallable = () => void;
export declare type IComponent = React.ComponentType<any>;
export interface IComponentMap {
    [path: string]: IComponent;
}
