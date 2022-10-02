import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const StackUser = props => {
  const {params} = props.route;
  const userIdx = params ? params.userIdx : null;
  const userName = params ? params.userName : null;
  const userLastName = params ? params.userLastName : null;

  // 헤더스타일 커스텀으로 변경
  const headerStyle = () => {
    props.navigation.setOptions({
      title: 'Customizing',
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: 'yellow',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'green',
      },
      headerBackTitle: 'BACK',
      // 오른쪽 헤더 버튼 추가
      headerRight: () => (
        <Button
          title="Go Back"
          onPress={() => props.navigation.navigate('StackHome')}
          color="orange"
        />
      ),
    });
  };
  useEffect(() => {
    headerStyle();
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>User</Text>
      <Button
        title="Go To Home"
        onPress={() => props.navigation.navigate('StackHome')}
      />
      <Text>User idx: {JSON.stringify(userIdx)}</Text>
      <Text>User Name: {JSON.stringify(userName)}</Text>
      <Text>User LastName: {JSON.stringify(userLastName)}</Text>
    </View>
  );
};

export default StackUser;

const styles = StyleSheet.create({});
