import * as React from 'react';
import Navigator from './navigator';
import { IRoute, ISubscribable, IComponentMap } from './types';
export default class Router implements ISubscribable {
    private map;
    private navigator;
    constructor(initialRoute: IRoute);
    getNavigator(): Navigator;
    register(map: IComponentMap): void;
    renderScene(props: object): React.ReactElement<any>;
    subscribe(fn: () => void): () => void;
    private resolve;
}
