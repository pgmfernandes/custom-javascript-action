import { NucleiConfig } from "./nuclei-config";

export function parseScanObject(payload: NucleiConfig[]) {
    return new Promise((resolve) => {
      for(let i=0; i< payload.length; i++){
        console.log(payload[i].domain);
      }
      resolve("done!")
    });
  };