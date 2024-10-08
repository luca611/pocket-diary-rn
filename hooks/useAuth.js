import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';

const useAuth = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            console.log(user);
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return unsub;
    }, []);
    return { user };
};
