import EntityMinBase from './EntityMinBase';
export default class EntityBase extends EntityMinBase {
    constructor(entity) {
        if (!entity)
            entity = {};
        super(entity);
        this.createdBy = entity.createdBy;
        this.dtChanged = entity.dtChanged;
    }
}
//# sourceMappingURL=EntityBase.js.map