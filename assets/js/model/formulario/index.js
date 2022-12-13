import Allsteps from './allSteps/index.js'
import FormFinishing from './formFinishing.js'
import FormPersonalInfo from './formPersonalInfo.js'
import FormPickAddons from './formPickAddons.js'
import FormPlans from './formPlans.js'

export default [
  FormPersonalInfo.create(Allsteps[0]),
  FormPlans.create(Allsteps[1]),
  FormPickAddons.create(Allsteps[2]),
  FormFinishing.create(Allsteps[3])
]