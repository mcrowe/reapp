import { ISubscribable } from './types';
export default class Store<T> implements ISubscribable {
    private value;
    private channel;
    constructor(initialValue: T);
    get(): T;
    set(value?: T): void;
    update(fn: (value: T) => void): void;
    subscribe: (fn: () => void) => () => void;
}
