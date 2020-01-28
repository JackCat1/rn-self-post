import React from 'react'
import {View,StyleSheet,FlatList} from 'react-native'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'

import {DATA} from '../data'
import { Post } from '../components/Post'
import {AppHeaderIcon} from '../components/AppHeaderIcon'

export const MainScr = ({navigation})=>{
    const goPost=post=>navigation.navigate('Post',{postId:post.id,booked:post.booked})
    return (
        <View style={style.wrap}>
            <FlatList 
                data={DATA} 
                keyExtractor={post =>post.id.toString()} 
                renderItem={({item})=><Post post={item} onOpen={goPost}/>}
            />
        </View>
    )
}

MainScr.navigationOptions = {
    headerTitle:'Мой блог',
    headerRight:()=>(
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title='Take foto' iconName="ios-camera" onPress={()=>console.log('Press photo')}/>
        </HeaderButtons>
    ),
    headerLeft:()=>(
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title='Take menu' iconName="ios-menu" onPress={()=>console.log('Press menu')}/>
        </HeaderButtons>
    )
}

const style = StyleSheet.create({
    wrap:{
        padding:10
    }
})