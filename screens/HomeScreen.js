import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';

import orange from '../assets/assets/orange.png'
import coeur from '../assets/assets/coeur.png'
import raisin from '../assets/assets/raisain.png'
import ananas from '../assets/assets/ananas.png'
import fraise from '../assets/assets/fraise.png'
import boutique from '../assets/assets/boutique.png'
import boutique2 from '../assets/assets/boutique2.png'
import ProfileScreen from './ProfileScreen';

const HomeScreen = ({ navigation }) => {
   return (
    <ScrollView vertical>
      <View style={style.container}>
        <View style={style.headerText}>
          <Text style={style.Text}>Discover Seasonal
            Fruits and vegitables</Text>
        </View>

        <ScrollView horizontal>
          <View style={style.headerbtn}>
            <TouchableOpacity style={{
              backgroundColor: '#FDCECE',
              borderRadius: 50,
              padding: 5,
              width: 100
            }}>
              <Text style={style.buttonText}>Orange</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              backgroundColor: '#f5f5f500',
              borderRadius: 50,
              padding: 5,
              width: 100
            }}>
              <Text style={{ fontWeight: 'bold', display: 'flex', textAlign: 'center' }}>Grape</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
              backgroundColor: '#f5f5f500',
              borderRadius: 50,
              padding: 5,
              width: 100
            }}><Text style={{ fontWeight: 'bold', display: 'flex', textAlign: 'center' }}>Pineapple</Text></TouchableOpacity>
            <TouchableOpacity style={{
              backgroundColor: '#f5f5f500',
              borderRadius: 50,
              padding: 5,
              width: 100
            }}><Text style={{ fontWeight: 'bold', display: 'flex', textAlign: 'center' }}>Strave</Text></TouchableOpacity>
            <TouchableOpacity style={{
              backgroundColor: '#f5f5f500',
              borderRadius: 50,
              padding: 5,
              width: 100
            }}><Text style={{ fontWeight: 'bold', display: 'flex', textAlign: 'center' }}>mangue</Text></TouchableOpacity>


          </View>
        </ScrollView>

        <ScrollView horizontal>
          <View style={style.bloc}>
            <View style={style.ct}>



              <View style={style.cts}>
                <View style={style.imgct}>
                  <Image source={coeur}
                    style={{
                      width: 20, height: 20,
                    }}
                  />
                </View>
                <StatusBar style="auto" />
              </View>
              <Image source={orange}
                style={{
                  width: 120, height: 120, marginTop: -20,
                }}
              />
              <View style={style.cs}>
                <Text style={style.txt}>Orange</Text>
                <Text style={style.txt}>$10</Text>
              </View>

              <TouchableOpacity style={style.button}>
                <Text style={style.buttonText}
                  onPress={() => navigation.navigate('ProfileScreen')}>ADD</Text>
              </TouchableOpacity>

            </View>

            <View style={style.ctss}>

              <View style={style.cts}>
                <View style={style.imgct}>
                  <Image source={coeur}
                    style={{
                      width: 20, height: 20,
                    }}
                  />
                </View>
                <StatusBar style="auto" />
              </View>
              <Image source={raisin}
                style={{
                  width: 200, height: 130, marginTop: -20,
                }}
              />
              <View style={style.cs}>
                <Text style={style.txtx}>Grape</Text>
                <Text style={style.txtx}>$10</Text>
              </View>

              <TouchableOpacity style={style.buttons} onPress={ProfileScreen}>
                <Text style={style.buttonText}>ADD</Text>
              </TouchableOpacity>

            </View>

            <View style={style.ctx}>

              <View style={style.cts}>
                <View style={style.imgct}>
                  <Image source={coeur}
                    style={{
                      width: 20, height: 20,
                    }}
                  />
                </View>
                <StatusBar style="auto" />
              </View>
              <Image source={ananas}
                style={{
                  width: 150, height: 120, marginTop: -20,
                }}
              />
              <View style={style.cs}>
                <Text style={style.txta}>Orange</Text>
                <Text style={style.txta}>$10</Text>
              </View>

              <TouchableOpacity style={style.buttonx}>
                <Text style={style.buttonText}>ADD</Text>
              </TouchableOpacity>

            </View>
            <View style={style.ctf}>

              <View style={style.cts}>
                <View style={style.imgct}>
                  <Image source={coeur}
                    style={{
                      width: 20, height: 20,
                    }}
                  />
                </View>
                <StatusBar style="auto" />
              </View>
              <Image source={fraise}
                style={{
                  width: 150, height: 120, marginTop: -20,
                }}
              />
              <View style={style.cs}>
                <Text style={style.txtf}>Orange</Text>
                <Text style={style.txtf}>$10</Text>
              </View>

              <TouchableOpacity style={style.buttonf}>
                <Text style={style.buttonText}>ADD</Text>
              </TouchableOpacity>

            </View>
          </View>
        </ScrollView>
        <View style={style.bloccc}>
          <Text style={{ fontWeight: 'bold', fontSize: 17, marginTop: 22 }}>Nearby Shop</Text>
        </View>
        <ScrollView horizontal>
          <View style={style.blocc}>
            <View style={style.part}>
              <View style={{
                width: 80, height: 60, backgroundColor: '#FDCECE', justifyContent: 'center', alignItems: 'center', borderRadius: 20
              }}>
                <Image source={boutique}
                  style={{
                    width: 40, height: 40,
                  }}
                />
              </View>
              <View style={style.bloccc}>
                <Text style={{ fontWeight: 'bold' }}>Xenter Shop</Text>
                <Text style={{ fontWeight: 'bold' }}>2356 toltrican Street</Text>
                <Text style={{ fontWeight: 'bold' }}>9A.M - 7 P.M</Text>
              </View>

            </View>
            <View style={style.part}>
              <View style={{
                width: 80, height: 60, backgroundColor: '#FDCECE', justifyContent: 'center', alignItems: 'center', borderRadius: 20
              }}>
                <Image source={boutique2}
                  style={{
                    width: 40, height: 40,
                  }}
                />
              </View>
              <View style={style.bloccc}>
                <Text style={{ fontWeight: 'bold' }}>Xenter Shop</Text>
                <Text style={{ fontWeight: 'bold' }}>2356 toltrican Street</Text>
                <Text style={{ fontWeight: 'bold' }}>9A.M - 7 P.M</Text>
              </View>

            </View>
            <StatusBar style="auto" />
          </View>
        </ScrollView>

        <StatusBar style="auto" />
      </View>
    </ScrollView >
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    paddingTop: 50,
    display: 'flex',

  },
  // header: {
  //   marginTop: '30px',
  //   height: '6px',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: '100%',
  //   justifyContent: 'space-between',
  //   flexDirection: 'row'
  // },
  // img: {
  //   width: 50,
  //   height: 50,
  //   backgroundColor: '#fff',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 50,
  // },
  headerText: {
    padding: 0,
    top: -20,
    height: '6px',
    width: '500px',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 40
  },
  Text: {
    height: '6px',
    width: 220,
    justifyContent: 'space-between',
    flexDirection: 'row',
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 30,
    color: '#292725'
  },
  headerbtn: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: "space-between",
    width: 420,
    marginTop: 5,
    textAlign: 'center',
    alignItems: 'center'

  },
  btn: {
    backgroundColor: 'red',
    borderBottomColor: '#737373',
  },
  ct: {
    backgroundColor: '#F8D7A6',
    width: 200,
    height: 240,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  imgct: {
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cts: {
    marginLeft: 150,

  },
  cs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 170,
  },
  button: {
    backgroundColor: '#FF9800',
    borderRadius: 50, 
    padding: 8,
    width: 100,
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  txt: {
    color: '#FF8F06',
    fontSize: 16,
  },

  ctss: {
    backgroundColor: '#BCC8FF',
    width: 200,
    height: 240,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttons: {
    backgroundColor: '#0C2492',
    borderRadius: 50,
    padding: 8,
    width: 100,
    marginTop: 20
  },
  txtx: {
    color: '#0C2492', 
    fontSize: 16,
  },

  ctx: {
    backgroundColor: '#FFF07B',
    width: 200,
    height: 240,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonx: {
    backgroundColor: '#FFE200',
    borderRadius: 50,
    padding: 8,
    width: 100,
    marginTop: 20
  },
  txta: {
    color: '#FFE200',
    fontSize: 16,
  },

  ctf: {
    backgroundColor: '#FCA0A0',
    width: 200,
    height: 240,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonf: {
    backgroundColor: '#FF0000',
    borderRadius: 50,
    padding: 8,
    width: 100,
    marginTop: 20
  },
  txtf: {
    color: '#F70505',
    fontSize: 16,
  },
  ctm: {
    backgroundColor: '#FBE09A',
    width: 200,
    height: 240,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonm: {
    backgroundColor: '#FFA500',
    borderRadius: 50,
    padding: 8,
    width: 100,
    marginTop: 20
  },
  txtm: {
    color: '#FFA500',
    fontSize: 16,
  },
  bloc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 1100,
    marginTop: 20
  },
  blocc: {
    display: 'flex',
    flexDirection: 'row',
    width: 540,
    marginTop: 5,
    padding: 20,
    paddingLeft: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  part: {
    display: 'flex',
    flexDirection: 'row',
    width: 250,
    height: 90,
    borderWidth: 1,
    borderColor: '#FDCECE', 
    padding: 10,
    borderRadius: 20,
    alignItems: 'center'
  },
  bloccc: {
    marginLeft: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 90,
    bottom: -30,
    left: 0,
    right: 0,

  },

});

export default HomeScreen;