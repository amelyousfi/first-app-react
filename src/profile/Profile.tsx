// import * as Ui from '../shared/ui'

// type ProfileProps = {
//   open?: boolean
// }

// export default function Profile({ open }: ProfileProps) {
//   return (
//     <Ui.GreenRightFrame open={open}>
//       <Ui.GreenFrameHeader>
//         <Ui.GreenFrameClose className="fa-solid fa-circle-xmark"></Ui.GreenFrameClose>
//         <Ui.GreenFrameTitle>Mon Profil</Ui.GreenFrameTitle>
//       </Ui.GreenFrameHeader>
//     </Ui.GreenRightFrame>
//   )
// }
//ajouter du code pour la fermeture de bottomNav
// import * as Ui from '../shared/ui'

// type ProfileProps = {
//   open?: boolean
//   onClose: () => void
// }

// export default function Profile({ open, onClose }: ProfileProps) {
//   return (
//     <Ui.GreenRightFrame open={open}>
//       <Ui.GreenFrameHeader>
//         <Ui.GreenFrameClose
//           className="fa-solid fa-circle-xmark"
//           onClick={onClose}
//         ></Ui.GreenFrameClose>
//         <Ui.GreenFrameTitle>Mon Profil</Ui.GreenFrameTitle>
//       </Ui.GreenFrameHeader>
//     </Ui.GreenRightFrame>
//   )
// }
//problematique de modification de nom de profile
// import * as Ui from '../shared/ui'
// import { useState, useEffect } from 'react'

// type ProfileProps = {
//   open?: boolean
//   onClose: () => void
// }

// export default function Profile({ open, onClose }: ProfileProps) {
//   const [username, setUsername] = useState<string>('')

//   useEffect(() => {
//     const storeUser = localStorage.getItem('user')

//     console.log('Coucou')

//     if (storeUser) {
//       setUsername(JSON.parse(storeUser).displayName)
//     }
//   }, [])

//   const changeUsername = (e: React.SyntheticEvent<HTMLInputElement>) => {
//     setUsername(e.currentTarget.value)
//   }

//   return (
//     <Ui.GreenRightFrame open={open}>
//       <Ui.GreenFrameHeader>
//         <Ui.GreenFrameClose
//           className="fa-solid fa-circle-xmark"
//           onClick={onClose}
//         ></Ui.GreenFrameClose>
//         <Ui.GreenFrameTitle>Mon Profil</Ui.GreenFrameTitle>
//       </Ui.GreenFrameHeader>
//       <Ui.AppContainer>
//         <Ui.InputContainer display="white">
//           <Ui.Input
//             type="text"
//             display="white"
//             placeholder="Votre nom d'utilisateur"
//             value={username}
//             onChange={changeUsername}
//           ></Ui.Input>
//         </Ui.InputContainer>
//       </Ui.AppContainer>
//     </Ui.GreenRightFrame>
//   )
// }
//utiliser le pubsub

import PubSub from 'pubsub-js'
import * as Ui from '../shared/ui'
import { useState, useEffect } from 'react'

type ProfileProps = {
  open?: boolean
  onClose: () => void
}

export default function Profile({ open, onClose }: ProfileProps) {
  const [username, setUsername] = useState<string>('')

  useEffect(() => {
    const storeUser = localStorage.getItem('user')

    if (storeUser) {
      setUsername(JSON.parse(storeUser).displayName)
    }
  }, [])
  //ajouter un autre usEffecte qui permettre de stocker le user ecris dans le input  username

  useEffect(() => {
    console.log('publication de changeUsername : ' + username)
    PubSub.publish('changeUsername', username)
  }, [username])
  // envoyer le username modier a la page profil

  const changeUsername = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value)
  }

  return (
    <Ui.GreenRightFrame open={open}>
      <Ui.GreenFrameHeader>
        <Ui.GreenFrameClose
          className="fa-solid fa-circle-xmark"
          onClick={onClose}
        ></Ui.GreenFrameClose>
        <Ui.GreenFrameTitle>Mon Profil</Ui.GreenFrameTitle>
      </Ui.GreenFrameHeader>
      <Ui.AppContainer>
        <Ui.InputContainer display="white">
          <Ui.Input
            type="text"
            display="white"
            placeholder="Votre nom d'utilisateur"
            value={username}
            onChange={changeUsername}
          ></Ui.Input>
        </Ui.InputContainer>
      </Ui.AppContainer>
    </Ui.GreenRightFrame>
  )
}
