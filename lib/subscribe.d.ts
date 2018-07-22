import * as React from 'react';
import { ISubscribable, ICallable } from './types';
export default function subscribe(...subscriptions: ISubscribable[]): <T>(WrappedComponent: React.ComponentType<T>) => {
    new (props: Readonly<T>): {
        unsubscribes: ICallable[];
        componentWillMount(): void;
        componentWillUnmount(): void;
        reload: () => void;
        render(): React.ReactElement<T>;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<T>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<T>;
        state: Readonly<{}>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<T>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<T>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<T>, prevState: Readonly<{}>, snapshot?: any): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<T>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<T>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<T>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<T>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: T, context?: any): {
        unsubscribes: ICallable[];
        componentWillMount(): void;
        componentWillUnmount(): void;
        reload: () => void;
        render(): React.ReactElement<T>;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<T>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<T>;
        state: Readonly<{}>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<T>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<T>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<T>, prevState: Readonly<{}>, snapshot?: any): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<T>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<T>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<T>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<T>, nextState: Readonly<{}>, nextContext: any): void;
    };
};
