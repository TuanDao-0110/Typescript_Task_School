"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = exports.SuccessMessage = void 0;
var SuccessMessage;
(function (SuccessMessage) {
    SuccessMessage["CREATE_TODO"] = "created todo success";
    SuccessMessage["UPDATED_TODO"] = "updated success";
    SuccessMessage["REMOVE_TODO"] = "remove success";
    SuccessMessage["GET_ALL_TODO"] = "data success";
})(SuccessMessage = exports.SuccessMessage || (exports.SuccessMessage = {}));
var ErrorMessage;
(function (ErrorMessage) {
    ErrorMessage["UPDATED_ERROR"] = "could not find todo";
})(ErrorMessage = exports.ErrorMessage || (exports.ErrorMessage = {}));
