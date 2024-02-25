import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import {Box, Button, Center, FormControl, HStack, Heading, Input, Link, Row, VStack} from "native-base";
import { Fontisto,AntDesign } from '@expo/vector-icons';
export default function Login() {
    return <Center w="100%" >
    <Box safeArea p="2" py="8" w="90%" maxW="290">
      
      <View style={{justifyContent:"center"}}  >
        <View style={{alignItems:"center",flexDirection:"row",gap:"20px",justifyContent:"center"}}>
      <Button style={styles.btnsign} mt="3" colorScheme="FF0340" w="70%" h="50px">
      <Text style={{fontSize:"20px",color:"white"}} >Sign In</Text>
        </Button>
        <Button mt="3" colorScheme="blue" w="70%" h="50px" >
          <Text style={{fontSize:"20px",color:"white"}}>Sign Up</Text>
        </Button>
        </View>
        <View style={{alignItems:"center"}}>
        <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
      color: "warmGray.50"
    }}style={{marginTop:"30%"}}>Welcome
    </Heading>
       <Heading mt="1" _dark={{
      color: "warmGray.200"
    }} color="coolGray.600" fontWeight="medium" size="xs">
        Sign in to continue!
      </Heading>
      </View>
      </View>
        
     
    

      <VStack style={{marginTop:"20%"}} space={3} mt="5">
        <FormControl >
          <FormControl.Label style={{alignItems:"center"}}> <Fontisto name="email" size={24} color="black" />
          <Text>
            Email ID
            </Text>
            </FormControl.Label>
          <Input />
        </FormControl>
        <FormControl style={{justifyContent:"center"}}>
          <FormControl.Label style={{alignItems:"center"}}><AntDesign name="key" size={24} color="black" />
          <Text>
           Password 
          </Text>
</FormControl.Label>
          <Input type="password" />
          <Link _text={{
          fontSize: "xs",
          fontWeight: "500",
          color: "indigo.500"
        }} alignSelf="flex-end" mt="1">
            Forget Password?
          </Link>
        </FormControl>
        
        <HStack mt="6" justifyContent="center">
          <Text fontSize="sm" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }}>
            I'm a new user.{" "}
          </Text>
          <Link _text={{
          color: "indigo.500",
          fontWeight: "medium",
          fontSize: "sm"
        }} href="#">
            Sign Up
          </Link>
        </HStack>
      </VStack>
    </Box>
  </Center>;
};


const styles =StyleSheet.create({
  btnsign:{
    backgroundColor:"#FF0340",
    
  }
  
})


