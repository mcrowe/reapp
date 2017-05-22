import Channel from './channel';
declare class Store<T> {
    value: T;
    channel: Channel;
    constructor(initialValue: T);
    get(): T;
    set(): void;
    update(fn: (value: T) => void): void;
    subscribe(fn: Function): () => void;
}
export default Store;
