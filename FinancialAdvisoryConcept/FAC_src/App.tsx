import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [showSmiley, setShowSmiley] = useState(false);
  const [showAccounts, setShowAccounts] = useState(false);

  const handleAdvisorPress = () => {
    // Handle Talk to Advisor button press logic here
    setShowSmiley(true);
  };

  const handleHistoryPress = () => {
    // Handle History button press logic here
    setShowHistory(true);
  };

  const handleAccountsPress = () => {
    // Handle Accounts button press logic here
    setShowAccounts(true);
  };

  const handleBackPress = () => {
    setShowHistory(false);
    setShowSmiley(false);
    setShowAccounts(false);
  };

  if (showHistory) {
    return (
      <View style={styles.container}>
        <Text style={styles.historyText}>
          Show previous consultation sessions, notes, balances
        </Text>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (showSmiley) {
    return (
      <View style={styles.container}>
        <Text style={styles.smileyText}>😊</Text>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (showAccounts) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.accountButton} onPress={handleBackPress}>
          <Text style={styles.buttonText}>Chase</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.accountButton} onPress={handleBackPress}>
          <Text style={styles.buttonText}>Charles Schwab</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.accountButton} onPress={handleBackPress}>
          <Text style={styles.buttonText}>Wells Fargo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.accountButton} onPress={handleBackPress}>
          <Text style={styles.buttonText}>BofA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleAdvisorPress}>
        <Text style={styles.buttonText}>Talk to Advisor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleHistoryPress}>
        <Text style={styles.buttonText}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleAccountsPress}>
        <Text style={styles.buttonText}>Accounts</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightcyan',
  },
  button: {
    width: 150,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  buttonText: {
    fontSize: 18,
    color: 'grey',
  },
  historyText: {
   fontSize: 24,
fontWeight: 'bold',
marginBottom: 20,
},
smileyText: {
fontSize: 60,
},
accountButton: {
width: 150,
height: 40,
borderRadius: 20,
backgroundColor: 'white',
justifyContent: 'center',
alignItems: 'center',
marginVertical: 10,
},
backButton: {
width: 100,
height: 40,
borderRadius: 20,
backgroundColor: 'white',
justifyContent: 'center',
alignItems: 'center',
marginTop: 20,
},
});

export default App;
