import initializeDetailButtonEvents from './dialogs.js'
import { useFish } from './fish/FishDataProvider.js'
import FishList from './fish/FishList.js'
// initializeDetailButtonEvents()

const arrayOfTheFishObjects = useFish()

FishList()
