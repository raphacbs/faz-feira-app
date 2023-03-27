import * as yup from 'yup';

export const getValidationErrors = async (
  data: object,
  validationSchema: yup.ObjectSchema,
) => {
  try {
    await validationSchema.validate(data, {abortEarly: false});
    return {};
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      const validationErrors: Record<string, string> = {};
      err.inner.forEach(error => {
        validationErrors[error.path as string] = error.message;
      });
      return validationErrors;
    }

    throw err;
  }
};
