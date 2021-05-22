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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredictionsController = void 0;
const common_1 = require("@nestjs/common");
const getPredictions_dto_1 = require("../shared/dtos/getPredictions.dto");
let PredictionsController = class PredictionsController {
    getPredictions(params) {
        return 'Hello';
    }
};
__decorate([
    common_1.Get(':time_range'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getPredictions_dto_1.GetPredictionsDto]),
    __metadata("design:returntype", void 0)
], PredictionsController.prototype, "getPredictions", null);
PredictionsController = __decorate([
    common_1.Controller('predictions')
], PredictionsController);
exports.PredictionsController = PredictionsController;
//# sourceMappingURL=predictions.controller.js.map