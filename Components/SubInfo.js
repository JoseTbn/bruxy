import{View, Text,Image}from 'react-native'
import React from 'react'
import tw from 'twrnc';

import {SIZES,FONTS,COLORS,SHADOWS,assets} from '../constants'

export const NFTTitle = () =>{
  return(
    <View>
      <Text>SubInfo</Text>
    </View>
    )
}

export const EthPrice = () =>{
    return(
      <View>
        <Text>NFTTitle</Text>
      </View>
      )
  }
export const ImageCmp = ({imgUrl,index}) =>{
    return(
     <Image
     source={imgUrl}
     resizeMode='contain'
     style={tw` w-[24] h-[24] `,
    { marginLeft: index === 0 ? 0 : -SIZES.font }

    
    }
     />
      )
  }
export const People = () =>{
    return(
      <View style={tw`flex flex-row   `}>
        {[assets.person02,assets.person03,assets.person04].map((imgUrl,index)=>(
            <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`}  />
        ))}
      </View>
      )
  }
export const EndDate = () =>{
    return(
      <View>
        <Text>NFTTitle</Text>
      </View>
      )
  }
export const SubInfo = () =>{
    return(
      <View style={tw` w-[100%] mt-2 px-5 flex flex-row justify-between  `}  >
        <People/>
        <EndDate/>
      </View>
      )
  }

  