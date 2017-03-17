import {IEntityMinBase, IEntityMinBaseArgs} from './IEntityMinBase';
import {IEntityBase, IEntityBaseArgs} from './IEntityBase';
import {ICreatedBy} from './ICreatedBy';

declare module ptzCoreDomain {
    class EntityMinBase implements IEntityMinBase {
        constructor(entity?: IEntityMinBaseArgs);

        id: string;
        errors: string[];

        isValid(): boolean;
        throwErrorIfIsInvalid(): void;
    }

    class EntityBase implements IEntityBase {

        createdBy: ICreatedBy;
        dtChanged: Date;

        constructor(entity: IEntityBaseArgs);

        isValid(): boolean;
        throwErrorIfIsInvalid(): void;
    }
    export function validateEmail(email): boolean;
}

declare module "ptz-core-domain"
{
    export = ptzCoreDomain;
}