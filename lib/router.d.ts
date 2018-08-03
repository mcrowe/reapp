import * as React from 'react';
import { INavigator, IRoute, IRouteMap } from './types';
interface IProps<T extends IRouteMap> {
    initialRoute: IRoute;
    routes: T;
    getSceneProps: (nav: any) => object;
}
interface IState {
    currentRoute: IRoute;
}
export default class Router<T extends IRouteMap> extends React.Component<IProps<T>, IState> {
    constructor(props: IProps<T>);
    go: (path: string, params?: object) => void;
    makeRoute(path: string, params: object): IRoute;
    getNavigator(): INavigator;
    render(): React.ReactElement<{}>;
}
export {};
