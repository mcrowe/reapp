declare class Channel {
    listeners: Function[];
    constructor();
    subscribe(fn: Function): () => void;
    broadcast(val?: any): void;
}
export default Channel;
