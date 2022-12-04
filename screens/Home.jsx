import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, FlatList, ActivityIndicator, RefreshControl, TouchableOpacity } from "react-native"
import { Post } from "../components/Post"
import axios from "axios"
import { useEffect, useState } from "react"

export const Home = ({navigation}) =>{
    const [isLoadind, setIsLoading] = useState(false)
    const [items, setItems] = useState([])
    const getData = async () => {
        setIsLoading(true)
        const { data } = await axios("https://api.jsonbin.io/v3/b/638cc385a3c728450edf63a4")
        const { record } = data
        setItems(record)
        setIsLoading(false)
    }
    useEffect(() => {
        getData()
    }, [])
    /* useEffect(()=>{
    axios.get('https://api.jsonbin.io/v3/b/638cc385a3c728450edf63a4')
    .then(({record})=>{
      setItems(record)
    }).catch(err=>{
      console.log(err)
      alert('Mistakes detected')
    })
  },[]) */
    if (isLoadind) {
        return (
            <View style={{
              flex: 1,
              justifyContent:'center',
              alignItems:'center'
            }}>
                <ActivityIndicator size="large" />
                <Text>Loading ...</Text>
            </View>
        )
    }
    return (
        <View>
            <FlatList
                refreshControl={<RefreshControl refreshing={isLoadind} onRefresh={getData}/>}
                data={items}
                renderItem={({ item }) =>(
                  <TouchableOpacity onPress={()=>navigation.navigate('FullPost',{title:item.text,imageUrl:item.imageUrl})}>
                    <Post title={item.title} createdAt={item.createdAt} imageUrl={item.imageUrl}/>
                  </TouchableOpacity>
                ) }
            />
            {/*   {
            [...items,...items].map(obj=>(
              <Post
                title={obj.title}
                createdAt={obj.createdAt}
                imageUrl={obj.imageUrl}
              />
            ))
           } */}
        </View>
    )
}
