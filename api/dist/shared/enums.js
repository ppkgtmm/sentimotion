"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeRange = exports.Emotion = exports.Polarity = void 0;
var Polarity;
(function (Polarity) {
    Polarity["POSITIVE"] = "positive";
    Polarity["NEGATIVE"] = "negative";
})(Polarity = exports.Polarity || (exports.Polarity = {}));
var Emotion;
(function (Emotion) {
    Emotion["HAPPY"] = "happy";
    Emotion["ANGRY"] = "angry";
    Emotion["SAD"] = "sad";
    Emotion["OTHER"] = "other";
    Emotion["FEAR"] = "fear";
    Emotion["SURPRISED"] = "surprised";
})(Emotion = exports.Emotion || (exports.Emotion = {}));
var TimeRange;
(function (TimeRange) {
    TimeRange["LAST_MONTH"] = "last_month";
    TimeRange["LAST_WEEK"] = "last_week";
    TimeRange["LAST_3MONTH"] = "last_3_month";
    TimeRange["LAST_6MONTH"] = "last_6_month";
    TimeRange["LAST_YEAR"] = "last_year";
})(TimeRange = exports.TimeRange || (exports.TimeRange = {}));
//# sourceMappingURL=enums.js.map