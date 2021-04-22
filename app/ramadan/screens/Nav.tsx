import React,{FC} from 'react'
import { View,Button } from 'react-native'

// export default function Nav(props:any) {
//     const {navigation} = props
//     return (
//         <View>
//             <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('RamadanMap')
//       }
//       />
//     </View>
//     )
// }
interface Props {
    navigation: any
  }
const App : FC<Props> = (props) => {
        


    return (
        <View>
                        <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('RamadanMap')
      }
      />
    </View>
    )
}

export default App;
