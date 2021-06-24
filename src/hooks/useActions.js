import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'
import actions from '../actions'

export function useActions() {
  const dispatch = useDispatch()
  return useMemo(
    () => {
      return bindActionCreators(actions, dispatch)
    },
    [dispatch]
  )
}