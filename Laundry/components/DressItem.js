import { View, Text, Pressable ,Image} from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { addToCart } from '../redux/cartReducer'
import { increaseQty } from '../redux/productReducer' 
const DressItem = ({item}) => {
  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch();
  const addItemToCart = () => {
    dispatch(addToCart(item)) // cart
    dispatch(increaseQty(item)) // product
  }
  return (
    <View>
      <Pressable
        style={{
            backgroundColor:"#f8f8f8",
            borderRadius:8,
            padding:7,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            margin:14
        }}
      >
        <View>
            <Image 
            style={{width:70, height:70}}
            source={{uri:item.image}}/>
        </View>

        <View>
            <Text
            style={{
                width:83,fontSize:17,fontWeight:"500",marginBottom:7
            }}
            >{item.name}</Text>
            <Text
            style={{
                width:60,color:'gray',fontSize:15
            }}
            >${item.price}</Text>
        </View>

        {
          cart.some((c)=>c.id===item.id) ?(
              <Pressable 
               style={{
                flexDirection:'row',
                paddingHorizontal:10,
                paddingVertical:5,
               }}
              >

                <Pressable
                  style={{
                    width:26,
                    height:26,
                    borderRadius:13,
                    backgroundColor:'#FF2C2C',
                    alignItems:'center',
                    justifyContent:'center',
                    borderColor:'white'
                  }}
                >
                  <Text 
                  style={{
                      color:'white',
                      fontSize:20,
                      fontWeight:'bold'
                  }}
                  >-</Text>
                </Pressable>

                <Pressable>
                  <Text
                    style={{
                      fontSize:19,
                      color:'#FF2C2C',
                      fontWeight:'bold',
                      marginHorizontal:10
                    }}
                  >{item.quntity}</Text>
                </Pressable>

                <Pressable
                  style={{
                    width:26,
                    height:26,
                    borderRadius:13,
                    backgroundColor:'#FF2C2C',
                    alignItems:'center',
                    justifyContent:'center',
                    borderColor:'white'

                  }}
                >
                  <Text
                    style={{
                      color:'white',
                      fontSize:20,
                      fontWeight:'bold',
                      paddingHorizontal:6
                    }}
                  >+</Text>
                </Pressable>

              </Pressable>
          ):(
            <Pressable style={{width:80}} onPress={addItemToCart}>
            <Text 
            style={{
                borderColor:'#FF2C2C',
                borderRadius:4,
                borderWidth:0.8,
                marginVertical:10,
                color:'#FF2C2C',
                textAlign:'center',
                padding:5,
                fontSize:17,
                fontWeight:'bold'
            }}
            >Add +</Text>
        </Pressable>
          )
        }
        
      </Pressable>
    </View>
  )
}

export default DressItem