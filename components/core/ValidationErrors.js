export default {
  name: 'ValidationErrors',
  props: {
    errors: { type: Array, default: () => [] },
  },
  functional: true,
  render(h, context) {
    const { errors } = context.props

    const errorTemplate = (error) =>
      h('div', { attrs: { class: 'invalid-feedback' } }, error)

    const renderErrors = errors.length
      ? errors.map((error) => errorTemplate(error))
      : h('div')

    return renderErrors
  },
}
