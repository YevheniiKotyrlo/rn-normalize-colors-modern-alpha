import { ScrollView, StyleSheet, Text, View } from 'react-native';

const colours = [
  { testID: 'hsl-slash-alpha', colour: 'hsl(120 100% 25% / 0.5)' },
  { testID: 'hsla-slash-alpha', colour: 'hsla(120 100% 25% / 0.5)' },
  { testID: 'rgb-percentage-alpha', colour: 'rgb(0 128 0 / 50%)' },
  { testID: 'rgb-number-alpha', colour: 'rgb(0 128 0 / 0.5)' },
] as const;

function App() {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      {colours.map(({ testID, colour }) => (
        <View key={testID} style={styles.row}>
          <View testID={testID} style={[styles.box, { backgroundColor: colour }]} />
          <Text style={styles.label}>{colour}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 48,
    gap: 16,
    backgroundColor: '#ffffff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  box: {
    width: 96,
    height: 96,
  },
  label: {
    color: '#000000',
  },
});

export default App;
