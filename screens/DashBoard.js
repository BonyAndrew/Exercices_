import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Image, StatusBar, Pressable } from 'react-native';

import orange from '../assets/assets/orange.png'
import coeur from '../assets/assets/coeur.png'
import raisin from '../assets/assets/raisain.png'
import ananas from '../assets/assets/ananas.png'
import fraise from '../assets/assets/fraise.png'
import boutique from '../assets/assets/boutique.png'
import boutique2 from '../assets/assets/boutique2.png'
import poubelle from '../assets/assets/poubelle.png'

const DashBoard = ({ navigation }) => {
    return (
        <View>
            <View style={styl.headerText}>
                <Text style={styl.Text}>My Order</Text>
            </View>

            <View style={styl.partfint}>
                <View style={styl.part}>

                    <Image source={orange}
                        style={{
                            width: 40, height: 40,
                        }}
                    />
                </View>
                <View style={{
                    width: 180, height: 60, display: 'flex', flexDirection: 'row', borderRadius: 10,
                }}>
                    <View style={{
                        width: 60, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 10
                    }}>
                        <View style={styl.bloccc}>
                            <Text style={{ fontWeight: 'bold' }}>1X</Text>
                        </View>
                    </View>
                    <View style={{
                        justifyContent: 'space-between', display: 'flex', flexDirection: 'column', borderRadius: 10,
                    }}>
                        <View style={styl.bloccc}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Orange</Text>
                        </View>
                        <View style={styl.bloccc}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>$10</Text>
                        </View>

                    </View>
                </View>

                <View style={{
                    width: 45, height: 45, backgroundColor: '#b8b8b8', justifyContent: 'center', alignItems: 'center', borderRadius: 10
                }}>
                    <Image source={poubelle}
                        style={{
                            width: 25, height: 25,
                        }}
                    />
                </View>
            </View>
            <View style={styl.partfint}>
                <View style={styl.partf}>

                    <Image source={fraise}
                        style={{
                            width: 50, height: 40,
                        }}
                    />
                </View>
                <View style={{
                    width: 180, height: 60, display: 'flex', flexDirection: 'row', borderRadius: 10,
                }}>
                    <View style={{
                        width: 60, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 10
                    }}>
                        <View style={styl.bloccc}>
                            <Text style={{ fontWeight: 'bold' }}>1X</Text>
                        </View>
                    </View>
                    <View style={{
                        justifyContent: 'space-between', display: 'flex', flexDirection: 'column', borderRadius: 10,
                    }}>
                        <View style={styl.bloccc}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Fraise</Text>
                        </View>
                        <View style={styl.bloccc}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>$10</Text>
                        </View>

                    </View>
                </View>

                <View style={{
                    width: 45, height: 45, backgroundColor: '#b8b8b8', justifyContent: 'center', alignItems: 'center', borderRadius: 10
                }}>
                    <Image source={poubelle}
                        style={{
                            width: 25, height: 25,
                        }}
                    />
                </View>
            </View>
            
            <View style={styl.partfint}>
                <View style={styl.partr}>

                    <Image source={raisin}
                        style={{
                            width: 55, height: 40,
                        }}
                    />
                </View>
                <View style={{
                    width: 180, height: 60, display: 'flex', flexDirection: 'row', borderRadius: 10,
                }}>
                    <View style={{
                        width: 60, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 10
                    }}>
                        <View style={styl.bloccc}>
                            <Text style={{ fontWeight: 'bold' }}>1X</Text>
                        </View>
                    </View>
                    <View style={{
                        justifyContent: 'space-between', display: 'flex', flexDirection: 'column', borderRadius: 10,
                    }}>
                        <View style={styl.bloccc}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Grape</Text>
                        </View>
                        <View style={styl.bloccc}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>$10</Text>
                        </View>

                    </View>
                </View>

                <View style={{
                    width: 45, height: 45, backgroundColor: '#b8b8b8', justifyContent: 'center', alignItems: 'center', borderRadius: 10
                }}>
                    <Image source={poubelle}
                        style={{
                            width: 25, height: 25,
                        }}
                    />
                </View>
            </View>
            <View style={{ width: 320, height: 2, backgroundColor: '#b8b8b8', marginTop: 30, }}>

            </View>

            <View style={{ width: 10, height: 2, marginTop: 30, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', grap: 99,}}>
                <View style={styl.bloccc}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Total Pice</Text>
                </View>
                <View style={styl.bloccc}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>$50</Text>
                </View>
            </View>


            <View style={{
                width: 200, height: 45, backgroundColor: 'rgb(255 136 204)', justifyContent: 'center', alignItems: 'center', borderRadius: 10,
                margin: 70, marginTop: 20
            }}>
                <View style={styl.bloccc}>
                    <Text style={{ color: '#fff', fontSize: 20, }}>Payment</Text>

                </View>
            </View>




            <StatusBar style="auto" />
        </View>

    );
}
const styl = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        paddingTop: 50,
        display: 'flex',
    },
    header: {
        marginTop: '30px',
        height: '6px',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    img: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    headerText: {
        padding: 15,
        top:-10,
        height: '6px',
        width: '500px',
        flexDirection: 'column',
    },
    Text: {
        height: '6px',
        width: 80,
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
        borderRadius: 50, // Arrondir les bordures du bouton
        padding: 8,
        width: 100,
        marginTop: 20
    },
    txta: {
        color: '#FFE200', // Changer la couleur du texte
        fontSize: 16,
    },

    txtf: {
        color: '#F70505', // Changer la couleur du texte
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
        borderRadius: 50, // Arrondir les bordures du bouton
        padding: 8,
        width: 100,
        marginTop: 20
    },
    txtm: {
        color: '#FFA500', // Changer la couleur du texte
        fontSize: 16,
    },
    bloc: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 370,
        height: 350,
        marginTop: -150,
        marginLeft: -23,
        backgroundColor: '#fff',
        zIndex: -1,
        borderRadius: 50,
        padding: 40,
        paddingTop: 140
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
        width: 70,
        height: 60,
        backgroundColor: '#F8D7A6',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    partr: {
        display: 'flex',
        flexDirection: 'row',
        width: 70,
        height: 60,
        backgroundColor: '#BCC8FF',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    partf: {
        display: 'flex',
        flexDirection: 'row',
        width: 70,
        height: 60,
        backgroundColor: '#FCA0A0',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },


    partfint: {
        display: 'flex',
        flexDirection: 'row',
        width: 340,
        height: 70,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
    },
    bloccc: {
        marginLeft: 10,
        width: 'auto'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 90,
        bottom: -330,
        left: 0,
        right: 0,

    },

});

export default DashBoard;