declare namespace PromiseEvents {
    export class EventEmitter {
        emit<T = void>(event: string | symbol, ...args: any[]): Promise<T>;
        on<T = void>(event: string | symbol, handler: (...args: any[]) => Promise<T>): void;
    }
}

export = PromiseEvents;
