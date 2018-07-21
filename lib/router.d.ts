import * as React from 'react';
import { IRoute, ISubscribable } from './types';
declare type IComponent = React.ComponentType<any>;
export interface IComponentMap {
    [path: string]: IComponent;
}
export default class Router implements ISubscribable {
    private routes;
    private map;
    private channel;
    constructor(initialRoute: IRoute);
    route(path: string, component: IComponent): this;
    renderScene(): React.ReactElement<any>;
    push(path: string, params?: object): void;
    replace(path: string, params?: object): void;
    go: (path: string, params?: object) => void;
    pop(): void;
    getCurrentRoute(): IRoute;
    subscribe: (fn: () => void) => () => void;
    private resolve;
    private makeRoute;
    private broadcast;
}
export {};
