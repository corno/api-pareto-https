import * as pt from "pareto-core-types"
import { HTTPSError } from "./types/HTTPSError"


export type Path = pt.Nested<string>

type StreamConsumer<DATA> = {
    onData: ($: DATA) => void;
    onEnd: () => void;
}

type Resource<ID, DATA> = {
    get: ($: {
        id: ID;
    }, $i: {
        onNotExists: () => void
        onFailed: () => void
        init: () => StreamConsumer<DATA>
    }) => pt.AsyncNonValue
};

export type HTTPSResource = Resource<Path, string>

type Creator<DATA, ALGORITHMS, INTERFACE> = ($: DATA, $a: ALGORITHMS) => INTERFACE;


export type CreateHTTPSResource = Creator<
    {
        hostName: string,
        contextPath: Path,
    },
    {
        onError: ($: HTTPSError) => void
    },
    HTTPSResource
>