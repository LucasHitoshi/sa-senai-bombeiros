import { Platform, TextInput, Pressable, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import DateTimePickerAndroid from '@react-native-community/datetimepicker'

type InputClockProps = {
  title?: string
  initialValue?: string
  // eslint-disable-next-line no-unused-vars
  onChange: (newValue: string) => void
}

const InputClock = (props: InputClockProps) => {
  const [date, setDate] = useState(new Date())
  const [showPicker, setShowPicker] = useState(false)
  const [timeMedication, setTimeMedication] = useState<string | undefined>('')

  const toggleDatePicker = () => {
    setShowPicker(!showPicker)
  }

  const onTimeChange = (event: any, selectedDate: Date | undefined) => {
    setShowPicker(Platform.OS === 'ios')
    if (selectedDate) {
      setDate(selectedDate)
      const formattedTime = selectedDate.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
      })
      props.onChange(formattedTime)
    }
  }

  useEffect(() => {
    setTimeMedication(props.initialValue)
  }, [props.initialValue])

  return (
    <View className=" my-2 items-center">
      <Text className="text-lg font-medium">{props.title}</Text>
      {showPicker && (
        <>
          <DateTimePickerAndroid
            value={date}
            mode="time"
            display="clock"
            onChange={onTimeChange}
          />
        </>
      )}
      <View className="mt-2 w-full">
        <Pressable onPress={toggleDatePicker}>
          <TextInput
            className="mx-7 rounded-lg border"
            placeholder="00:00"
            editable={false}
            value={timeMedication}
            style={{
              textAlignVertical: 'center',
              paddingVertical: 6,
              paddingHorizontal: 10,
            }}
          ></TextInput>
        </Pressable>
      </View>
    </View>
  )
}

export default InputClock
