/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

import React from 'react';
import { View, Text } from 'react-native';
import TodoList from '../TodoList';
import styles from './styles';

const TodoBlock = ({ todoData, title, setTaskCompleted }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TodoList todoData={todoData} setTaskCompleted={setTaskCompleted} />
        </View>
    );
};

export default TodoBlock;