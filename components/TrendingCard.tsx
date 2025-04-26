import { View, Text, TouchableOpacity, Image } from 'react-native'
import MaskedView from '@react-native-masked-view/masked-view';
import React from 'react'
import { Link } from 'expo-router'
import { images } from '@/constants/images';

const TrendingCard = ({ movie: { movie_id, title, poster_url }, index }: TrendingCardProps) => {
    return (
        <Link href={`/movies/${movie_id}`} asChild>
            <TouchableOpacity className='relative w-32 pl-5'>
                <Image
                    source={{ uri: poster_url }}
                    resizeMode='cover'
                    className='w-32 h-48 rounded-lg'
                />
                <View className='absolute bottom-9 -left-3.5 px-2 py-1 rounded-full'>
                    <MaskedView maskElement={
                        <Text className='text-6xl font-bold text-white'>
                            {index + 1}
                        </Text>
                    }
                    >
                        <Image
                            source={images.rankingGradient}
                            className='size-14'
                            resizeMode='cover'
                        />
                    </MaskedView>
                </View>
                <Text className='mt-2 text-sm font-bold text-light-200' numberOfLines={2}>
                    {title}
                </Text>
            </TouchableOpacity>
        </Link>
    )
}

export default TrendingCard