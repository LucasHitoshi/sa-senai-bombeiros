import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
// import { Entypo } from '@expo/vector-icons'

type InputProps = {
  title: string
  size?: 'small' | 'regular' | 'big'
  isCalendar?: boolean
  isBig?: boolean
  value?: string
  placeholder?: string
  onChangeText?: (text: string) => void
}

export default function InputFull(props: InputProps) {
  const [inputValue, setInputValue] = useState(props.value)

  const handleTextChange = (text: string) => {
    setInputValue(text)

    if (props.onChangeText) {
      props.onChangeText(text)
    }
  }

  const handleWidth = () => {
    if (props.size === 'small') {
      return 1
    } else if (props.size === 'regular') {
      return 2
    }
    return 3
  }
  return (
    <View
      style={{
        flexGrow: handleWidth(),
      }}
      className="justfy-between m-auto my-2 w-full flex-1 items-center"
    >
      <Text className="text-lg font-medium">{props.title}</Text>
      <View className="mb-4 mt-2 w-5/6 rounded-lg border">
        <TextInput
          multiline={true}
          numberOfLines={100}
          style={{
            height: props.isBig ? 100 : 38,
            textAlignVertical: 'top',
            paddingVertical: 6,
            paddingHorizontal: 10,
          }}
          value={props.value}
          onChangeText={handleTextChange}
          placeholder={props.placeholder}
        ></TextInput>
      </View>
    </View>
  )
}
