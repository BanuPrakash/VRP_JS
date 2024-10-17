import React, { useContext, Component } from 'react'
import { UserContext } from './Parent'

// export default function Second() {
//     let userContext = useContext(UserContext); // subscribe or Consumer

//   return (
//     <div>
//         Second Child <br />
//         Avatar : {userContext.avatar} <br />
//         Name : {userContext.name}
//     </div>
//   )
// }



export default class Second extends Component {
    render() {
        return (
            <div>
                <UserContext.Consumer>
                    {
                        value => {
                            return <div>
                                Avatar : {value.avatar} <br />
                                Name : {value.name}
                            </div>
                        }
                    }
                </UserContext.Consumer>
            </div>
        )
    }
}
