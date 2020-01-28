import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {Ionicons} from '@expo/vector-icons'

import {MainScr} from '../screens/MainScr'
import {PostScr} from '../screens/PostScr'
import {BookmarkScr} from '../screens/BookmarkScr'
import { THEME } from '../utils/theme'
import { Platform } from '@unimodules/core';

const PostNavig = createStackNavigator({
    Main: MainScr,
    Post: {
        screen: PostScr
    }
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:THEME.MAIN_COLOR
        },
        headerTintColor:'#fff'
    }
})

const BookedNavig = createStackNavigator({
    Booked:BookmarkScr,
    Post: {
        screen: PostScr
    }
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:THEME.MAIN_COLOR
        },
        headerTintColor:'#fff'
    }
})

const boottomTabConfig = {
    Post:{
        screen:PostNavig,
        navigationOptions:{
            tabBarLabel:'Все',
            tabBarIcon:info=><Ionicons name='ios-albums' size={25} color={info.tintColor}/>
        }
    },
    Booked:{
        screen:BookedNavig,
        navigationOptions:{
            tabBarLabel:'Избранные',
            tabBarIcon:info=><Ionicons name='ios-star' size={25} color={info.tintColor}/>
        }
    }
}

const BottomNavig =Platform.OS==="android"?
    createMaterialBottomTabNavigator(boottomTabConfig,{
        activeTintColor:'#fff',
        shifting:true,
        barStyle:{
            backgroundColor:THEME.MAIN_COLOR
        }
    }) 
    :createBottomTabNavigator(boottomTabConfig,{
    tabBarOptions:{
        activeTintColor:THEME.MAIN_COLOR
    }
})

export const AppNavig = createAppContainer(BottomNavig)