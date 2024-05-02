import React from "react";

import { View,StyleSheet,Text, SafeAreaView, ScrollView } from "react-native";
import FlatCards from "./component/FlatCards";
import ElevetedCards from "./component/ElevetedCards";
import FancyCards from "./component/FancyCards";
import ActionCard from "./component/ActionCard";
import ContactList from "./component/ContactList";

const  App= () =>{
  return(
    <SafeAreaView>
      <ScrollView>
       
        <FlatCards/>
        <ElevetedCards/>
        <FancyCards/>
        <ContactList/>
        <ActionCard/>
  

      </ScrollView>
    </SafeAreaView>

  )
}

export default App;