interface Props {
  isValid: boolean
  label: string
  disabledLabel: string
  loading: boolean
}

const Button = ({ disabledLabel, isValid, label, loading }: Props) => {
  return (
    <button
      disabled={!isValid || loading}
      className="w-full rounded-md bg-mu-blue px-3 py-3 text-center font-kanit text-xl font-bold transition-shadow hover:shadow-xl disabled:bg-slate-300 disabled:hover:shadow-none"
    >
      {isValid ? label : disabledLabel}
    </button>
  )
}

export default Button
