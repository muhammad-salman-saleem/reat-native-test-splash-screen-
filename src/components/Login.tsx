import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

interface formData {
    name: string; 
    email: string; 
    password: string;
};

const Login = () => {
    const navigation = useNavigation<any>();
    const [formData, setFormData] = useState<formData>({
        name: '',
        email: '',
        password: '',
    });

    const handleInputChange = (name: string, value: any) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        // Handle form submission logic here
        // navigation.navigate('Main', { formData })
        console.log('Form submitted:', formData);
        Alert.alert('Form submitted:');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login Text</Text>
            <View style={styles.container}>
                <Text style={styles.text}>Name</Text>
                <TextInput
                    style={{ ...styles.input, color: 'black' }}
                    onChangeText={(text) => handleInputChange('name', text)}
                    value={formData.name}
                    placeholder='Enter your name'
                />

                <Text style={styles.text}>Email</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => handleInputChange('email', text)}
                    value={formData.email}
                    placeholder='Enter your email'
                />

                <Text style={styles.text}>Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => handleInputChange('password', text)}
                    secureTextEntry
                    value={formData.password}
                    placeholder='Enter your password'
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: 'column',
        textAlign: "center",
        justifyContent: "center",
        padding: 20
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: "center",
        color: "black",
        marginTop: "25%"
    },
    text: {
        fontWeight: "bold",
        marginLeft: 15,
        color: "black",
        fontSize: 15,
    },
    input: {
        height: 40,
        marginTop: 8,
        marginBottom: 10,
        borderWidth: 1,
        paddingLeft: 20,
        borderRadius: 20,
        color: "black"
    },
    buttonContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        marginTop: 20,
        gap: 20
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'gray',
        color: "white",
        padding: 10,
        borderRadius: 15,
        width: "40%",

    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center"
    }
});

export default Login
