"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unknownEnpoint = void 0;
const unknownEnpoint = (req, res) => {
    return res.status(404).send("unknown endpoint");
};
exports.unknownEnpoint = unknownEnpoint;
