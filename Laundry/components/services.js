import { View, Text, ScrollView, Pressable,Image } from 'react-native'
import React from 'react'

const services = () => {

    const services = [
        {
          id: "0",
          image: "https://cdn-icons-png.flaticon.com/128/3003/3003984.png",
          name: "Washing",
         
        },
        {
          id: "11",
          image: "https://cdn-icons-png.flaticon.com/128/2975/2975175.png",
          name: "Laundry"
        },
        {
          id: "12",
          image: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
          name: "Wash & Iron",
         
        },
        {
          id: "13",
          image: "https://cdn-icons-png.flaticon.com/128/995/995016.png",
          name: "Cleaning",
        },
       
      ];
  return (
    <View style={{padding:7}}>
        <Text style={{fontSize:16,fontWeight:'600',marginBottom:5}}>Services Available</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
            services.map((services,index)=>(
                <Pressable style={{margin:5, backgroundColor:'white',padding:10, borderRadius:7}} key={index}>
                    <Image source={{uri:services.image}} style={{width:70,height:70}}/>
                    <Text style={{textAlign:'center',margin:7}}>{services.name}</Text>
                </Pressable>
            ))
        }
      </ScrollView>
    </View>
  )
}

export default services