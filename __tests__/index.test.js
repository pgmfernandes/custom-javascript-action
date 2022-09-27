"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const nuclei_scan_1 = require("./src/nuclei-scan");
(0, globals_1.test)('Parse object to scan', () => {
    var list_of_object = [
        {
            domain: "www.pudim.com.br",
            authors: [],
            tags: []
        }
    ];
    (0, nuclei_scan_1.parseScanObject)(list_of_object);
});
