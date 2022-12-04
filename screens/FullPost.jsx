import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import styled from "styled-components"
import axios from 'axios'

const PostImage = styled.Image`
    border-radius: 10px;
    width: 100%;
    height: 250px;
    margin-bottom: 20px;
`

const PostText = styled.Text`
    font-size: 18px;
    line-height: 24px;
`

export const FullPost = ({route}) => {
   const {imageUrl,title} = route.params
  return (
    <View style={{padding:20}}>
        <PostImage source={{uri:imageUrl}}/>
        <PostText>
           {title}
        </PostText>
    </View>
  )
}

