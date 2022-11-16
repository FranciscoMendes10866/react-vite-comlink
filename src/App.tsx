import { useCallback, useState } from "react";

import { workerInstance, blockingFunc, randomIntFromInterval } from "./utils";

export const App = () => {
  const [random, setRandom] = useState<number>(0);

  const workerCall = useCallback(async () => {
    await workerInstance.someRPCFunc();
  }, []);

  const normalFuncCall = useCallback(() => {
    blockingFunc();
  }, []);

  const randomIntHandler = useCallback(() => {
    setRandom(randomIntFromInterval(1, 100));
  }, []);

  return (
    <section>
      <button onClick={workerCall}>Worker Call</button>
      <button onClick={normalFuncCall}>Main Thread Call</button>
      <button onClick={randomIntHandler}>Random Int {random}</button>
    </section>
  );
};
