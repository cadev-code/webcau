import { CircularProgress } from '@mui/material'

export const SpinLoader = () => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'grid',
      placeItems: 'center',
      
    }}>
      <CircularProgress />
    </div>
  )
}
