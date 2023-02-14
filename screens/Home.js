import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Avatar, Button } from 'react-native-paper';
import { colors, defaultStyle } from '../styles/styles';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import SearchModal from '../components/SearchModal';
const Home = () => {
  const navigate = useNavigation()
  const categories = [
    {
      category: 'Nice',
      _id: 'zxc'
    },
    {
      category: 'Man',
      _id: 'asdsadssad'
    },
    {
      category: 'Women',
      _id: '2131'
    },
    {
      category: 'Football',
      _id: '5345'
    },
    {
      category: 'Socket',
      _id: '657324'
    },
    {
      category: 'Baseball',
      _id: '567'
    }
  ]

  const products = [{
    price : 231321,
    name : "Sample",
    _id : "a12121",
    images : [
      {
        url : "https://picsum.photos/100/200"
      },
    ]
  }]

  const [category, setCategory] = useState("")
  const [searchActive, setSearchActive] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const addToCardHanlder = (id) => {
    console.log("Add to card ", id)
  }

  const categoryButtonHandler = (id) => {
    setCategory(id)
  }
  return (
    <>
      {
        searchActive && (
          <SearchModal
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setSearchActive={setSearchActive}
            products={products} />
        )}


      <View style={defaultStyle}>
        <Header />
        {/* Headeing */}

        <View style={{
          paddingTop: 70,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <View>
            <Text style={{ fontSize: 25 }}>Home</Text>
            <Text style={{ fontSize: 25, fontWeight: '900' }}>Products</Text>
          </View>
          {/*Search Bar */}


          <View>
            <TouchableOpacity onPress={() => setSearchActive((prev) => !prev)}>
              <Avatar.Icon icon={'magnify'} color={'gray'} style={{ backgroundColor: colors.color2, elevation: 12 }} size={50}></Avatar.Icon>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{
          flexDirection: 'row',
          height: 80
        }}>
          <ScrollView contentContainerStyle={{
            alignItems: 'center'
          }} horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor: category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  margin: 5
                }}
                onPress={() => categoryButtonHandler(item._id)}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: category === item._id ? colors.color2 : 'gray',
                  }}
                >{item.category}</Text>
              </Button>
            ))}
          </ScrollView>
        </View>

        {/* Product */}
        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              products.map((item, index) => (
                <ProductCard
                  stock={item.stock}
                  name={item.name}
                  price={item.price}
                  image={item.images[0]?.url}
                  id={item._id}
                  addToCardHanlder={addToCardHanlder}
                  key={item._id}
                  i={index}
                  navigate={navigate}
                />
              ))
            }
          </ScrollView>
        </View>
      </View>

      <Footer activeRoute={'home'} />
    </>
  )
}

export default Home