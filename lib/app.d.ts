/// <reference types="react" />
import React = require('react');
import { IRoute } from './types';
import Store from './store';
import Router from './router';
export interface IProps<T> {
    router: Router<T>;
    store: Store<T>;
}
export interface IState<T> {
    session: T;
    routes: IRoute[];
}
export default class App<T> extends React.Component<IProps<T>, IState<T>> {
    constructor(props: IProps<T>);
    render(): React.ComponentElement<any, React.Component<any, React.ComponentState>>;
}
