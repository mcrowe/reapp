/// <reference types="react" />
import React = require('react');
import { IRoute } from './types';
export declare type IGetProps<T> = (params: any, session: T) => object;
export declare type IComponent = React.ComponentClass<any>;
export interface IComponentMap<T> {
    [path: string]: IComponent;
}
export default class Router<T> {
    map: IComponentMap<T>;
    routes: IRoute[];
    private channel;
    constructor(initialRoute: IRoute);
    route(path: string, component: IComponent): this;
    renderScene(session: T): React.ComponentElement<any, React.Component<any, React.ComponentState>>;
    push(path: string, params: object): void;
    replace(path: string, params: object): void;
    pop(): void;
    pusher(path: string, params: object): () => void;
    popper(): () => void;
    getCurrentRoute(): IRoute;
    makeRoute(path: string, params: object): {
        path: string;
        params: object;
    };
    subscribe(fn: Function): () => void;
    private resolve(route);
    private broadcast();
}
