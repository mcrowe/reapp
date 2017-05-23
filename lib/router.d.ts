/// <reference types="react" />
import React = require('react');
export declare type IGetProps<T> = (params: object, session: T) => object;
export declare type IComponent = React.ComponentClass<any>;
export interface IHandler<T> {
    component: IComponent;
    getProps?: IGetProps<T>;
}
export interface IHandlerMap<T> {
    [path: string]: IHandler<T>;
}
export interface IRoute {
    path: string;
    params: object;
}
export default class Router<T> {
    handlers: IHandlerMap<T>;
    routes: IRoute[];
    constructor(initialRoute: IRoute);
    route(path: string, component: IComponent, getProps?: IGetProps<T>): this;
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
    private resolve(route);
}
