import { useEffect } from 'react';
import RouterComponent from './RouterComponent'
import AuthProvider from './components/context/AuthProvider';
import { supabase } from './lib/supabaseClient';

const App = () => {
    const getUsers = async () => {
        const { data } = await supabase.from('Users').select();
        console.log({ data })
    }
    useEffect(() => {
        getUsers()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <AuthProvider>
            <RouterComponent />
        </AuthProvider>
    )
}

export default App