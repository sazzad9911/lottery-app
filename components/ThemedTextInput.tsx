import { TextInput, TextInputProps, View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedViewProps = TextInputProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedTextInput({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const plac = useThemeColor(
    { light: lightColor, dark: darkColor },
    "icon"
  );
  return (
    <TextInput placeholderTextColor={plac}
      style={[
        {
          height: 40,
          borderColor: "#ccc",
          borderWidth: 1,
          marginBottom: 10,
          padding: 8,
          borderRadius: 5,
          width: "100%",
        },
        style,
      ]}
      {...otherProps}
    />
  );
}
