function Loader({ big }) {
  const bigLoader = big === true
  return <div className={bigLoader ? 'loader big' : 'loader'}></div>
}

export default Loader
