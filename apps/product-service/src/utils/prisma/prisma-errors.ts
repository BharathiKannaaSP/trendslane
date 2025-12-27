/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prisma } from '@workspace/product-db'; 

export function mapPrismaError(err: any) {
  // Prisma Client Known Request Errors
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    const model = err.meta?.modelName;
    const target = err.meta?.target;
    const cause = err.meta?.cause || null;
    const fieldValue = err.meta?.field_value || null;

    switch (err.code) {
      /**
       * Unique constraint failed
       */
      case 'P2002':
        return {
          status: 409,
          message: `Duplicate value error in "${model}" must be unique.`,
          details: {
            model,
            target,
            cause,
            providedValue: fieldValue,
            explanation: `Another "${model}" already exists with the same "${target}".`,
          },
        };

      /**
       * Record not found
       */
      case 'P2025':
        return {
          status: 404,
          message: `Record not found in "${model}".`,
          details: {
            model,
            cause,
            operation: err.meta?.operation || undefined,
            explanation: 'The record you are trying to read/update/delete does not exist.',
          },
        };

      /**
       * Foreign key constraint failed
       */
      case 'P2003':
        return {
          status: 409,
          message: `Foreign key constraint failed on "${target}" in "${model}".`,
          details: {
            model,
            target,
            cause,
            explanation:
              'You are referencing a related record that does not exist or deleting a record that is still referenced.',
          },
        };

      /**
       * Value too long for column
       */
      case 'P2000':
        return {
          status: 400,
          message: `Invalid data format for field "${target}" in "${model}".`,
          details: {
            model,
            target,
            cause,
            explanation: 'The provided value exceeds allowed size or format.',
          },
        };

      /**
       * Required field missing
       */
      case 'P2011':
        return {
          status: 400,
          message: `Missing required field "${target}" in "${model}".`,
          details: {
            model,
            target,
            cause,
            explanation: 'A required field was not provided.',
          },
        };

      /**
       * Data validation failed
       */
      case 'P2005':
        return {
          status: 400,
          message: `Value validation error for "${target}" in "${model}".`,
          details: {
            model,
            target,
            cause,
            explanation: 'Prisma rejected the provided value due to invalid type or format.',
          },
        };

      /**
       * Record already exists with conflicting data (general)
       */
      case 'P2014':
        return {
          status: 400,
          message: `Invalid relational operation on "${model}" for field "${target}".`,
          details: {
            model,
            target,
            cause,
            explanation:
              'You may be nesting writes incorrectly or referencing invalid relation data.',
          },
        };

      default:
        return {
          status: 500,
          message: `Unhandled Prisma error: ${err.code}`,
          details: err.meta || {},
        };
    }
  }

  // Prisma Validation Error (schema mismatch)
  if (err instanceof Prisma.PrismaClientValidationError) {
    return {
      status: 400,
      message: 'Validation error: Incorrect or missing fields.',
      details: {
        explanation:
          'You passed invalid data to Prisma. Check if your input fields exist in the schema and match the types.',
      },
    };
  }

  // Prisma Initialization Error
  if (err instanceof Prisma.PrismaClientInitializationError) {
    return {
      status: 500,
      message: 'Database initialization failed.',
      details: {
        explanation: 'The Prisma client was unable to connect to the database.',
        cause: err.message,
      },
    };
  }

  // Prisma Rust Panic Error (rare)
  if (err instanceof Prisma.PrismaClientRustPanicError) {
    return {
      status: 500,
      message: 'Critical Prisma engine error.',
      details: {
        explanation:
          'Prisma engine panicked. This is usually caused by schema corruption or invalid binary.',
      },
    };
  }

  // Prisma Unknown Error
  if (err instanceof Prisma.PrismaClientUnknownRequestError) {
    return {
      status: 500,
      message: 'Unknown Prisma error occurred.',
      details: {
        explanation: 'An unknown request error occurred inside Prisma.',
        cause: err.message,
      },
    };
  }

  // Not a Prisma error → return generic error
  return {
    status: err.status || 500,
    message: err.message || 'Internal server error',
    details: {
      explanation: 'This is a non-Prisma error thrown somewhere in your application.',
    },
  };
}
