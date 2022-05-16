import { StatusBar, statusBar} from 'react-native'
import {useIsFocused} from '@react-navigation/native'


const FocusTab = (props) => {
  const isFocused = useIsFocused();
  
    return isFocused ? <StatusBar animated={true} {...props}/> : null;
    
  
}

export default FocusTab