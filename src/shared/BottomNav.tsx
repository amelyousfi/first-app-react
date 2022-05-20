//avant l ajout de props
// import * as UI from './ui'

// export default function BottomNav() {
//   return (
//     <UI.BottomNav>
//       <UI.BottomNavAction>
//         <UI.BottomNavShare>
//           <i className="fa-solid fa-share"></i>
//         </UI.BottomNavShare>
//         <UI.BottomNavDelete>
//           <i className="fa-solid fa-trash"></i>
//         </UI.BottomNavDelete>
//       </UI.BottomNavAction>

//       <UI.BottomNavMenu>
//         <UI.BottomNavItem className="fa-solid fa-bars"></UI.BottomNavItem>
//         <UI.BottomNavItem className="fa-solid fa-user"></UI.BottomNavItem>
//       </UI.BottomNavMenu>
//     </UI.BottomNav>
//   )
// }

//apres l ajour de props
// import * as UI from './ui'

// export type BottomNavProps = {
//   topBar?: JSX.Element
// }

// export default function BottomNav({ topBar }: BottomNavProps) {
//   return (
//     <UI.BottomNav>
//       {topBar}

//       <UI.BottomNavMenu>
//         <UI.BottomNavItem className="fa-solid fa-bars"></UI.BottomNavItem>
//         <UI.BottomNavItem className="fa-solid fa-user"></UI.BottomNavItem>
//       </UI.BottomNavMenu>
//     </UI.BottomNav>
//   )
// }
//ajout un 2 props
// import Profile from '../profile/Profile'
// import * as UI from './ui'
// import { useState } from 'react'

// export type BottomNavProps = {
//   topBar?: JSX.Element
// }

// export default function BottomNav({ topBar }: BottomNavProps) {
//   const [profileOpen, setProfileOpen] = useState<boolean>(false)

//   const toggleProfile = () => {
//     setProfileOpen(!profileOpen)
//   }

//   return (
//     <UI.BottomNav>
//       {topBar}

//       <UI.BottomNavMenu>
//         <UI.BottomNavItem className="fa-solid fa-bars"></UI.BottomNavItem>
//         <UI.BottomNavItem
//           className="fa-solid fa-user"
//           onClick={toggleProfile}
//         ></UI.BottomNavItem>
//       </UI.BottomNavMenu>
//       <Profile open={profileOpen} />
//     </UI.BottomNav>
//   )
// }
import Profile from '../profile/Profile'
import * as UI from './ui'
import { useState } from 'react'

export type BottomNavProps = {
  topBar?: JSX.Element
}

export default function BottomNav({ topBar }: BottomNavProps) {
  const [profileOpen, setProfileOpen] = useState<boolean>(false)

  // const openProfile = () => setProfileOpen(true)
  // const closeProfile = () => setProfileOpen(false)

  const toggleProfile = () => setProfileOpen(!profileOpen)

  return (
    <UI.BottomNav>
      {topBar}

      <UI.BottomNavMenu>
        <UI.BottomNavItem className="fa-solid fa-bars"></UI.BottomNavItem>
        <UI.BottomNavItem
          className="fa-solid fa-user"
          onClick={toggleProfile}
        ></UI.BottomNavItem>
      </UI.BottomNavMenu>
      <Profile open={profileOpen} onClose={toggleProfile} />
    </UI.BottomNav>
  )
}
