import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import URI from "../../context/uri";
import { useSelector } from "react-redux";
import axios from "axios";
import CountDown from "react-native-countdown-component";
import { ActivityIndicator } from "react-native-paper";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const StudentQuizScreen = ({ navigation, route }) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [totalquestions, settotalquestions] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [complete, setComplete] = useState(false);

  const state = useSelector((state) => state);
  const stateData = { ...state };
  const Token = stateData.userReducer.token;
  const AuthStr = "Bearer ".concat(Token);
  const { quiz_id } = route.params;
  const { quizDate } = route.params;
  const { time } = route.params;
  const { title } = route.params;
  const { subject } = route.params;
  const { current_date } = route.params;
  console.log("in quiz ");

  const getQuiz = async () => {
    setIsLoading(true);
    axios
      .get(`${URI.uri}/Quiz/${quiz_id}`, {
        headers: { Authorization: AuthStr },
      })
      .then((response) => {
        const data = response.data;
        setQuestions(data.allquestions);
        settotalquestions(data.allquestions.length);
        setOptions(generateOptionsAndShuffle(data.allquestions[0]));
        setIsLoading(false);
      })
      .catch((error) => {
        Alert.alert("Error", "Network Error");
      });
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const handleNextPress = () => {
    const totel = questions.length;
    settotalquestions(totel);
    if (ques !== totel - 1) {
      setQues(ques + 1);
      setOptions(generateOptionsAndShuffle(questions[ques + 1]));
    }
    if (ques === totel - 1) {
      setComplete(true);
    }
  };

  const generateOptionsAndShuffle = (_question) => {
    const arr = [..._question.incorrect_answers];
    const g = arr.map((x) => x.content);
    const options = [...g];
    options.push(_question.correct_answer);
    shuffleArray(options);

    return options;
  };

  const handlSelectedOption = (_option) => {
    if (_option === questions[ques].correct_answer) {
      setScore(score + 1);
    }
    const totel = questions.length;
    settotalquestions(totel);
    if (ques !== totel - 1) {
      setQues(ques + 1);
      setOptions(generateOptionsAndShuffle(questions[ques + 1]));
    }

    if (ques === totel - 1) {
      setComplete(true);
    }
  };

  const handleShowResult = () => {
    console.log("in the handleshow result");
    const totel = questions.length;
    settotalquestions(totel);
    navigation.replace("Quiz Result", {
      score: score,
      quiz_id: quiz_id,
      quizDate: quizDate,
      time: time,
      title: title,
      subject: subject,
      current_date: current_date,
      outofnumber: totalquestions,
    });
  };
  if (complete) {
    setComplete(false);
    handleShowResult();
  }
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <ActivityIndicator animating={true} size={40} />
        </View>
      ) : (
        questions && (
          <View style={styles.parent}>
            <CountDown
              size={30}
              until={time}
              onFinish={() =>
                navigation.replace("Quiz Result", {
                  score: score,
                  quiz_id: quiz_id,
                  quizDate: quizDate,
                  time: time,
                  title: title,
                  subject: subject,
                  current_date: current_date,
                  outofnumber: totalquestions,
                })
              }
              digitStyle={{
                backgroundColor: "#FFF",
                borderWidth: 2,
                borderColor: "#1CC625",
              }}
              digitTxtStyle={{ color: "#1CC625" }}
              timeLabelStyle={{ color: "red", fontWeight: "bold" }}
              separatorStyle={{ color: "#1CC625" }}
              timeToShow={["H", "M", "S"]}
              timeLabels={{ m: null, s: null }}
              showSeparator
            />
            <View style={styles.top}>
              <Text style={styles.question}>
                Q. {decodeURIComponent(questions[ques].question)}
              </Text>
            </View>
            <View style={styles.options}>
              <TouchableOpacity
                style={styles.optionButtom}
                onPress={() => handlSelectedOption(options[0])}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(options[0])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButtom}
                onPress={() => handlSelectedOption(options[1])}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(options[1])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButtom}
                onPress={() => handlSelectedOption(options[2])}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(options[2])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButtom}
                onPress={() => handlSelectedOption(options[3])}
              >
                <Text style={styles.option}>
                  {decodeURIComponent(options[3])}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
              {/* <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>PREV</Text>
            </TouchableOpacity> */}

              {ques !== totalquestions - 1 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleNextPress}
                >
                  <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
              )}

              {ques === totalquestions - 1 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleShowResult}
                >
                  <Text style={styles.buttonText}>Submit and view Result</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )
      )}
    </View>
  );
};

export default StudentQuizScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#1A759F",
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  optionButtom: {
    paddingVertical: 12,
    marginVertical: 6,
    backgroundColor: "#34A0A4",
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  parent: {
    height: "100%",
  },
});
