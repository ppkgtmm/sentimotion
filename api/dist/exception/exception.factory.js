"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exceptionFactory = void 0;
const exceptions_1 = require("@nestjs/common/exceptions");
function exceptionFactory(errors) {
    const errorMessages = {};
    errors.forEach((error) => {
        errorMessages[error.property] = Object.values(error.constraints);
    });
    throw new exceptions_1.BadRequestException(errorMessages);
}
exports.exceptionFactory = exceptionFactory;
//# sourceMappingURL=exception.factory.js.map