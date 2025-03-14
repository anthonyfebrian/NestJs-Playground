import { BadRequestException } from "@nestjs/common";
import { ValidationError } from "class-validator";

/**
 * A utility class for creating custom BadRequestExceptions from validation errors.
 */
export class ValidationExceptionFactory {
    /**
     * Creates a BadRequestException with formatted validation errors.
     *
     * @param {ValidationError[]} validationErrors - An array of ValidationError objects.
     * @returns {BadRequestException} A BadRequestException with formatted error messages.
     */
    static createBadRequestException(
      validationErrors: ValidationError[] = [],
    ): BadRequestException {
      const errors = this.getPrettyClassValidatorErrors(validationErrors);
  
      return new BadRequestException({
        message: 'validation error',
        errors: errors,
      });
    }
  
    /**
     * Formats validation errors into a more readable structure.
     *
     * @private
     * @static
     * @param {ValidationError[]} validationErrors - An array of ValidationError objects.
     * @param {string} parentProperty - The parent property path (used for nested errors).
     * @returns {Array<{ property: string; errors: string[] }>} An array of formatted error objects.
     */
    private static getPrettyClassValidatorErrors(
      validationErrors: ValidationError[],
      parentProperty = '',
    ): Array<{ property: string; errors: string[] }> {
      const errors: Array<{ property: string; errors: string[] }> = [];
  
      const getValidationErrorsRecursively = (
        validationErrors: ValidationError[],
        parentProperty = '',
      ) => {
        for (const error of validationErrors) {
          const propertyPath = parentProperty
            ? `${parentProperty}.${error.property}`
            : error.property;
  
          if (error.constraints) {
            errors.push({
              property: propertyPath,
              errors: Object.values(error.constraints),
            });
          }
  
          if (error.children?.length) {
            getValidationErrorsRecursively(error.children, propertyPath);
          }
        }
      };
  
      getValidationErrorsRecursively(validationErrors, parentProperty);
  
      return errors;
    }
  }