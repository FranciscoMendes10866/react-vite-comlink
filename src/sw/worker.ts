/// <reference lib="webworker" />
declare const self: DedicatedWorkerGlobalScope;

import { blockingFunc } from "../utils";

export const someRPCFunc = () => {
  blockingFunc();
};
