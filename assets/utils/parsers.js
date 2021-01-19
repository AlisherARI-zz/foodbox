export const parseErrorsFromResponse = (error) => {
  let responseErrors = []

  if (error.response && error.response.data.errors) {
    const errors = error.response && error.response.data.errors
    responseErrors = errors
  } else {
    responseErrors.push(
      (error.response && error.response.data.message) || 'Что то пошло не так'
    )
  }

  return responseErrors
}
