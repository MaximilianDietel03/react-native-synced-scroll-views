import { createContext } from 'react'
import { Animated } from 'react-native';

// ------------------------------------------------------------

export const syncedScrollViewState = {
  activeScrollView: new Animated.Value(0),
  offsetPercent: new Animated.Value(0)
}

export const SyncedScrollViewContext = createContext(syncedScrollViewState)
