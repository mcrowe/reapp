import { ISubscribable, ICallable } from './types';
export default class Channel implements ISubscribable {
    listeners: ICallable[];
    subscribe: (fn: () => void) => () => void;
    broadcast: () => void;
}
