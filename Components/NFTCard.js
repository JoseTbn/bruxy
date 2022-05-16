import { View, Image,Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';


import{COLORS, SIZES, SHADOWS, assets}from '../constants';
import {CircleButton,RectButton} from './Button'
import{SubInfo, EthPrice, NFTTitlte} from './SubInfo'



const NFTCard = ({data}) => {
    const navigation = useNavigation();
    return (
    <View styles={{
        backgroundColor:COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark
    }}>
        <View style={{width: "100%", height: 250}}>
            <Image
             source={data.image}
             resizeMode="cover"
             style={{
                 width: "100%",
                 height: "100%",
                 borderTopLeftRadius: SIZES.font,
                 borderTopRightRadius: SIZES.font
             }}
             />
             <CircleButton imgUrl={assets.heart} right={10} top={10} />
        </View> 
        <SubInfo   />
    </View>
  )
}

export default NFTCard