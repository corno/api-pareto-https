import * as pt from "pareto-core-types"
import { IStreamConsumer } from "../interfaces/x";
import { THTTPSError } from "../types/HTTPSError"
import { TPath } from "../types/x";



export type XResource<ID, DATA> = {
    get: ($: {
        id: ID;
    }, $i: {
        onNotExists: () => void
        onFailed: () => void
        init: () => IStreamConsumer<DATA>
    }) => pt.AsyncNonValue
};

export type XHTTPSResource = XResource<TPath, string>

export type XCreator<DATA, ALGORITHMS, INTERFACE> = ($: DATA, $a: ALGORITHMS) => INTERFACE;


export type XCreateHTTPSResource = XCreator<
    {
        hostName: string,
        contextPath: TPath,
    },
    {
        onError: ($: THTTPSError) => void
    },
    XHTTPSResource
>