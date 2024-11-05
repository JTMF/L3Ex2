import React, {useState} from 'react';
import {View, Text, Button, Alert, ScrollView, Image} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
const MyApp = () => {
    const [type1, setType1] = useState("");
    const [type2, setType2] = useState("");
    const [type3, setType3] = useState("");
    const answer1 = "Owl";
    const answer2 = "Tiger";
    const answer3 = "Rabbit";
    const total = () => {
        let score = 0;
        if (type1 === answer1) score += 1;
        if (type2 === answer2) score += 1;
        if (type3 === answer3) score += 1;
        Alert.alert(`You have ${score} correct answers!`,"",[{ text: "OK" }]);
    };
    return (
        <ScrollView contentContainerStyle={{paddingBottom: 20}}>
            <View style={{paddingTop: 50}}>
                <Text style={{fontSize:50, fontWeight: "bold", textAlign:"center"}}>Animal Quiz</Text>
                <Image source={require("./img/owl.jpg")} style={{width:"100%", height:300}}/>
                <Text>What animal is this?</Text>
                <RNPickerSelect
                    onValueChange={(value) => setType1(value)}
                    items={[
                        {label:"Owl", value:"Owl"},
                        {label:"Hummingbird", value:"Hummingbird"},
                        {label:"Peacock", value:"Peacock"}
                    ]}
                />
                <Image source={require("./img/tiger.jpg")} style={{width:"100%", height:300}}/>
                <Text>What animal is this?</Text>
                <RNPickerSelect
                    onValueChange={(value) => setType2(value)}
                    items={[
                        {label:"Leopard", value:"Leopard"},
                        {label:"Tiger", value:"Tiger"},
                        {label:"Zebra", value:"Zebra"}
                    ]}
                />
                <Image source={require("./img/rabbit.jpg")} style={{width:"100%", height:300}}/>
                <Text>What animal is this?</Text>
                <RNPickerSelect
                    onValueChange={(value) => setType3(value)}
                    items={[
                        {label:"Penguin", value:"Penguin"},
                        {label:"Rabbit", value:"Rabbit"},
                        {label:"Squirrel", value:"Squirrel"}
                    ]}
                />
                <Button
                    title="SUBMIT ANSWERS"
                    onPress={() => {
                        total();
                    }}
                />
            </View>
        </ScrollView>
    );
};

export default MyApp;
