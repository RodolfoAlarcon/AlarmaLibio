import React, { memo, useState, useMemo, useEffect, useCallback } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import WS from 'react-native-websocket';
import FastImage from 'react-native-fast-image'

const ImageStream = (props: any) => {
    const [image, setImage] = useState('');
    const [uri, setUri] = useState('');


    return (
        <View>
            <WS
                url="wss://nodemcumicropython.herokuapp.com/ws/stream/ESP320000603A/"
                onMessage={async (e) => { 
                    let dat = JSON.parse(e.data);
                    if (dat.message.length > 200) {
                        setUri({ 
                            uri: `data:image/jpeg;base64,${dat.message}`, 
                            // priority: FastImage.priority.high, 
                        })
                    }
                }}
                onError={(e) => console.log('erro' + e)}
            //onClose={console.log}
            //reconnect // Will try to reconnect onClose
            />
            <Image
            //cambia por image lo que habia de fastimage a ver porfis
            // FastImage 
                source={uri}
                style={{ width: 499, height: 400 }}
                fallback={true}
                resizeMode={FastImage.resizeMode.stretch}
                fadeDuration = {0}
                
            />
        </View>
    )
}

export default memo(ImageStream)