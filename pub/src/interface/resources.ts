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

export type CreateHTTPSResource_Data = {
    hostName: string,
    contextPath: Path,
}

export type CreateHTTPSResource_Algorithms = {
    onError: ($: HTTPSError) => void
}

type Creator<DATA, ALGORITHMS, INTERFACE> = ($: DATA, $a: ALGORITHMS) => INTERFACE;


export type CreateHTTPSResource = Creator<
    CreateHTTPSResource_Data,
    CreateHTTPSResource_Algorithms,
    HTTPSResource 
>