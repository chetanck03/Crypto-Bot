import React ,{useState,useEffect} from "react"
import {ethers} from "ethers"
import axios from "axios"

// Internal Import
export const CONTEXT = React.createContext()

export const PROVIDER =({children}) =>{
    const TRADING_BOT ="Trading Bot"
    // Load
    const LOAD_INITIAL_DATA = async () =>{
        try {
            
        } catch (error) {
            console.log(error)
            
        }
    }

    // Buy
    const buyTokens = async () =>{
        try {
            
        } catch (error) {
            console.log(error)
            
        }
    }

    // sellTokens
    const sellTokens = async () =>{
        try {
            
        } catch (error) {
            console.log(error)
            
        }
    }

    // Trading
    const trading = async () =>{
        try {
            
        } catch (error) {
            console.log(error)
            
        }
    }

    return(<CONTEXT.Provider
    value={{TRADING_BOT,trading,}}
    >{children}</CONTEXT.Provider>)
    
}