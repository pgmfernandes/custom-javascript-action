import {describe, expect, test} from '@jest/globals';
import { parseScanObject } from "../src/nuclei-scan";

test('Parse object to scan', () => {
  var list_of_object = [
    {
      domain : "www.pudim.com.br",
      authors:[],
      tags:[]
    }
  ]
  parseScanObject(list_of_object);
})

export {};