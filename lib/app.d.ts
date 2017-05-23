/// <reference types="react" />
import React = require('react');
import Store from './store';
import Router from './router';
export interface IProps<T> {
    router: Router<T>;
    store: Store<T>;
}
export default class App<T> extends React.Component<IProps<T>, T> {
    constructor(props: any);
    render(): React.ComponentElement<any, React.Component<any, React.ComponentState>>;
}
