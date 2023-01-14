import AsyncStorage from '@react-native-async-storage/async-storage'

const GRUPOS_KEY = '@grupos:key'


async function saveGrupos(grupos:any){
    try {
        await AsyncStorage.setItem(GRUPOS_KEY, JSON.stringify(grupos))
        return JSON.stringify(grupos)
    } catch (error) {
        //Error
        console.log('error al guardar: ' + error.message)
        return 'Error de sintaxis'
    }
}

async function getGrupos(){
    try {
        const item:any = await AsyncStorage.getItem(GRUPOS_KEY)
        return JSON.parse(item)
    } catch (error) {
        // Error retrieving data
        console.log("Error al recuperar:" + error.message)
        return null
    }
}

async function deleteGrupos(){
    try {
        await AsyncStorage.removeItem(GRUPOS_KEY)
        const item:any = await AsyncStorage.getItem(GRUPOS_KEY)
        return (item == null?"usuario removido":"usuario no removido")
    } catch (error) {
        console.log("Error al eliminar" + error.message)
        return "Error de sintaxis"
    }
}

export {saveGrupos, getGrupos, deleteGrupos}