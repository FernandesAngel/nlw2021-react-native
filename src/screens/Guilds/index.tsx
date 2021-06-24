import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    Text,
    View,
    FlatList
} from 'react-native';
import { styles } from './styles';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

type Props = {
    handleGuildSelected: (guild: GuildProps) => void;
}

export function Guilds( { handleGuildSelected }: Props){
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Galera do Game',
            icon: 'image.png',
            owner: true
        },
        {
            id: '3',
            name: 'Galera do Game',
            icon: 'image.png',
            owner: true
        },
        {
            id: '4',
            name: 'Galera do Game',
            icon: 'image.png',
            owner: true
        },
    ]
    return(
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild
                        data={item}
                        onPress={() => handleGuildSelected(item)}
                     />
                )}
                ItemSeparatorComponent={() => <ListDivider isCentered />}
                ListHeaderComponent={() => <ListDivider isCentered />}
                showsVerticalScrollIndicator={false}
                style={styles.guilds}
                contentContainerStyle={{ paddingBottom: 68, paddingTop: 60 }}
            />
        </View>
    )
}