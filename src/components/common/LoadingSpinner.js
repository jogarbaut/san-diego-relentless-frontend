import { BarLoader } from "react-spinners"

const LoadingSpinner = () => {
  const color = "#c7b358"

  return (
    <div className="loading-spinner-container">
      <BarLoader 
        color={color}
        aria-label="Loading Spinner"
        speedMultiplier={.75}
      />
    </div>
  )
}

export default LoadingSpinner