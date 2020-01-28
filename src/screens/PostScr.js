import React,{useEffect} from 'react'
import {View,StyleSheet,Text,Image,Button,ScrollView,Alert} from 'react-native'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import { DATA } from '../data'
import { THEME } from '../utils/theme'
import {AppHeaderIcon} from '../components/AppHeaderIcon'

export const PostScr = ({navigation})=>{
    const postId = navigation.getParam('postId')
    const post = DATA.find(p=>p.id===postId)
    const removeHandler = ()=>{
        Alert.alert(
            'Удаление поста',
            'Вы точно хотите удалить пост?',
            [
              {
                text: 'Отмена',
                style: 'cancel',
              },
              {text: 'Удалить', style:'destructive', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
    }
    // useEffect(()=>{navigation.setParams({booked:post.booked})},[])
    return (
        <ScrollView>
            <Image source={{uri:post.img}} style={style.image}/>
            <View style={style.textWrap}>
                <Text style={style.title}>{post.text}</Text>
            </View>
            <Button title='Удалить' color={THEME.DANGER_COLOR} onPress={removeHandler}/>
        </ScrollView>
    )
}

PostScr.navigationOptions = ({navigation})=>{
    const postId = navigation.getParam('postId')
    const iconName = navigation.getParam('booked')?'ios-star':'ios-star-outline'
    return {
        headerTitle:'Пост '+postId,
        headerRight:()=>(
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title='Take foto' iconName={iconName} onPress={()=>console.log('Press photo')}/>
            </HeaderButtons>
        ),
    }
}

const style = StyleSheet.create({
    image:{
        width:'100%',
        height:200
    },
    textWrap:{
        padding:10
    },
    title:{
        fontFamily:'open-regular'
    }
})