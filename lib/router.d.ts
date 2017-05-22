/// <reference types="react" />
import React = require('react');
export declare type IGetProps<T> = (session: T) => object;
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
    constructor();
    route(path: string, component: IComponent, getProps?: IGetProps<T>): void;
    renderScene(session: T): React.ComponentElement<any, React.Component<any, React.ComponentState>>;
    push(route: IRoute): void;
    replace(route: IRoute): void;
    pop(): void;
    getCurrentRoute(): IRoute;
    private resolve(route);
}
