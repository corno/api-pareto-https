
export type IStreamConsumer<DATA> = {
    readonly onData: ($: DATA) => void;
    readonly onEnd: () => void;
}