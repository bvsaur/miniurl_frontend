interface Props {
  count: number
}

const ProgressBar = ({ count }: Props) => {
  return (
    <div className="mt-5 h-3 w-full rounded-full bg-white">
      <div
        className="h-3 rounded-full bg-mu-blue transition-width duration-300 ease-in-out"
        style={{ width: (count / 10) * 100 + '%' }}
      ></div>
    </div>
  )
}

export default ProgressBar
