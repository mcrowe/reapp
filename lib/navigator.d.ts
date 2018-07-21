import { ISubscribable, IRoute } from './types';
export default class Navigator implements ISubscribable {
    private routes;
    private channel;
    constructor(initialRoute: IRoute);
    push(path: string, params?: object): void;
    replace(path: string, params?: object): void;
    go: (path: string, params?: object) => void;
    pop(): void;
    getCurrentRoute(): IRoute;
    subscribe: (fn: () => void) => () => void;
    private makeRoute;
    private broadcast;
}
