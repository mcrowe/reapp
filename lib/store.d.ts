declare class Store<T> {
    private value;
    private channel;
    constructor(initialValue: T);
    get(): T;
    set(): void;
    update(fn: (value: T) => void): void;
    subscribe(fn: Function): () => void;
}
export default Store;
