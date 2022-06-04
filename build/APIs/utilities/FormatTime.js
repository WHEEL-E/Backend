"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getTimeNowFormatted = () => {
    const nowDate = new Date();
    let nowDateFormatted = `${nowDate.getDay()}-${nowDate.getMonth() + 1}-`;
    nowDateFormatted = ` ${nowDate.getFullYear()} ${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`;
    return nowDateFormatted;
};
exports.default = getTimeNowFormatted;
