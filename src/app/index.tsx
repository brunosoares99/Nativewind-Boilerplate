import { Text, View, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView
      className="flex-1 bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full">
        <Text>Nativewind boilerplate!</Text>
      </View>
    </ScrollView>
  );
}
