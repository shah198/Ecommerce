"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityBase = void 0;
const typeorm_1 = require("typeorm");
const typeorm_2 = require("typeorm");
let EntityBase = class EntityBase {
    //Id:number;
    constructor() {
        this.Id = 0;
    }
};
__decorate([
    typeorm_2.PrimaryGeneratedColumn({ name: 'id' })
], EntityBase.prototype, "Id", void 0);
EntityBase = __decorate([
    typeorm_1.Entity()
], EntityBase);
exports.EntityBase = EntityBase;
//# sourceMappingURL=EntityBase.js.map