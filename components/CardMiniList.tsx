import { AnimatePresence, motion } from 'framer-motion'
import { minisContext } from '../context/MinisContext'
import Mini from './Mini'

const CardMiniList = () => {
  const { minis } = minisContext()

  return (
    <div className="my-5 self-stretch rounded-xl bg-white bg-opacity-30 py-5 px-4 md:my-0 md:flex-1">
      <p className="text-xl font-bold md:text-2xl">Your minis</p>
      <div className="hide-scroll max-h-96 min-h-fit overflow-hidden overflow-y-scroll">
        {minis.length !== 0 ? (
          <AnimatePresence>
            {minis.map((mini) => (
              <motion.div
                key={mini.ID}
                layout
                initial={{ y: 150, x: 0, opacity: 0 }}
                animate={{ y: 0, x: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Mini mini={mini} />
              </motion.div>
            ))}
          </AnimatePresence>
        ) : (
          <p className="mt-3 text-xl">
            You don't have any{' '}
            <span className="font-kanit font-bold">minis</span> yet
          </p>
        )}
      </div>
    </div>
  )
}

export default CardMiniList
