"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTaskAdapter = void 0;
class GetTaskAdapter {
    constructor(getTaskController) {
        this.getTaskController = getTaskController;
    }
    async getTasks(req, res) {
        await this.getTaskController.getTasks(req, res);
    }
}
exports.GetTaskAdapter = GetTaskAdapter;
//# sourceMappingURL=GetTaskAdapter.js.map