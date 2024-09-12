import {Stack, useRouter} from 'expo-router'

const StackLayout = () =>{
    const router = useRouter()

    return(
        <Stack>
            <Stack.Screen
                name='profil'
            />
        </Stack>
    )
}
export default StackLayout