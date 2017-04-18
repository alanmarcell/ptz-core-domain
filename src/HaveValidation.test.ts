import { contains, containsNTimes, emptyArray, equal, notEmptyString, notOk, ok, throws } from 'ptz-assert';
import { HaveValidation } from './index';

describe('HaveValidation', () => {

    describe('addError', () => {
        it('do not throw error when args.errors is null', () => {
            const errorKey = 'ERROR_';
            var entity = new HaveValidation({ errors: null });
            entity.addError(errorKey);
            contains(entity.errors, errorKey);
        });

        it('add errors from args.errors', () => {
            const errorKey = 'ERROR_';
            const errorArgsKey = 'ERROR_ANOTHER_ERROR';
            var entity = new HaveValidation({ errors: [errorArgsKey] });
            entity.addError(errorKey);
            contains(entity.errors, errorArgsKey);
            contains(entity.errors, errorKey);
        });

        it('does not duplicate errors', () => {
            const errorKey = 'ERROR_';
            var entity = new HaveValidation({ errors: [errorKey] });
            entity.addError(errorKey);
            containsNTimes(entity.errors, errorKey, 1);
        });
    });

    describe('addErrors', () => {
        it('add 2 errors', () => {
            const error1 = 'ERROR_1';
            const error2 = 'ERROR_2';

            var entity = new HaveValidation({});
            entity.addErrors([error1, error2]);
            contains(entity.errors, error1);
            contains(entity.errors, error2);
        });

        it('add no errors', () => {
            var entity = new HaveValidation({});
            entity.addErrors(null);
            emptyArray(entity.errors);
        });
    });

    describe('IsValid', () => {
        it('should return true when errors is null', () => {
            var entity = new HaveValidation({ errors: null });
            ok(entity.isValid());
        });

        it('should return true when error is empty', () => {
            var entity = new HaveValidation({ errors: [] });
            ok(entity.isValid());
        });

        it('should return false when there are errors', () => {
            var entity = new HaveValidation({ errors: ['ERROR_ANOTHER_ERROR'] });
            notOk(entity.isValid());
        });
    });

    describe('throwErrorIfIsInvalid', () => {
        it('should not throw error when errors is null', () => {
            var entity = new HaveValidation({ errors: null });
            entity.throwErrorIfIsInvalid();
        });

        it('should not throw error when errors is empty', () => {
            var entity = new HaveValidation({ errors: [] });
            entity.throwErrorIfIsInvalid();
        });

        it('should throw error when there are errors', () => {
            var entity = new HaveValidation({ errors: ['ERROR_ANOTHER_ERROR'] });
            throws(() => {
                entity.throwErrorIfIsInvalid();
            });
        });
    });
});
