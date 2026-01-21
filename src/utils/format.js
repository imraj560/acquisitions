export const formatValidationError = (errors) => {
  if (!errors || !Array.isArray(errors.issues)) {
    return 'Validation failed';
  }

  return errors.issues.map(issue => issue.message).join(', ');
};