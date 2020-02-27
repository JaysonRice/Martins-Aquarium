import initializeDetailButtonEvents from './dialogs.js'
import { useFish } from './FishDataProvider.js'
import FishList from './FishList.js'

// initializeDetailButtonEvents()

const arrayOfTheFishObjects = useFish()

FishList()
