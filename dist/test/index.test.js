"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../lib/index");
const ava_1 = __importDefault(require("ava"));
(0, ava_1.default)("sum should add two numbers", (t) => {
    t.is((0, index_1.sum)(1, 2), 3);
});
