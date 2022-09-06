import * as pt from "pareto-core-types"
import { IStreamConsumer } from "../interfaces/x";
import { THTTPSError } from "../types/HTTPSError"
import { TPath } from "../types/x";




export type PHTTPSResource = (
    $: {
        readonly "id": TPath;
    },
    $i: {
        readonly "onNotExists": () => void
        readonly "onFailed": () => void
        readonly "init": () => IStreamConsumer<string>
    },
    $a: pt.ProcessAsyncValue
) => void

export type FCreateHTTPSResource = (
    $: {
        readonly "hostName": string,
        readonly "contextPath": TPath,
    },
    $i: {
        readonly "onError": ($: THTTPSError) => void
    },
) => PHTTPSResource

