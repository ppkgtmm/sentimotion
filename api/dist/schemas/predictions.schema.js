"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredictionSchema = exports.Prediction = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const enums_1 = require("../shared/enums");
let Prediction = class Prediction {
};
__decorate([
    mongoose_2.Prop({ required: true, type: mongoose_1.Types.ObjectId }),
    __metadata("design:type", String)
], Prediction.prototype, "space_id", void 0);
__decorate([
    mongoose_2.Prop({ required: true, type: mongoose_1.Types.ObjectId }),
    __metadata("design:type", String)
], Prediction.prototype, "message_id", void 0);
__decorate([
    mongoose_2.Prop({ required: true }),
    __metadata("design:type", String)
], Prediction.prototype, "polarity", void 0);
__decorate([
    mongoose_2.Prop({ required: true }),
    __metadata("design:type", String)
], Prediction.prototype, "emotion", void 0);
Prediction = __decorate([
    mongoose_2.Schema()
], Prediction);
exports.Prediction = Prediction;
exports.PredictionSchema = mongoose_2.SchemaFactory.createForClass(Prediction);
//# sourceMappingURL=predictions.schema.js.map