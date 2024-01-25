import React,{useState,useEffect,useContext} from "react";
import axios from "axios";
import {ethers} from "ethers";
import toast from "react-hot-toast";

// Internal Import
import {Header,Footer,Search,MovingSubmenu,Preloader,SideBar,Home,TradeTokens,TopExchangeTokens
,Networks,AddNetwork,Price,Login,Signup,Profile,Setting,AddTokenPair,Trading,Loader,} from "../components/index"
import {CONTEXT} from "../context/context"

const index = () => {
  const { TRADING_BOT } = useContext(CONTEXT)

  // State Variable
  return (
    <div>
      <MovingSubmenu/>
      <Preloader/>
    </div>
  )
};

export default index;
