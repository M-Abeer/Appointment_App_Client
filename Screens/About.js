import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const About = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayPress = (day) => {
    setSelectedDay(day);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Appointment</Text>
        </View>
        <View style={styles.profile}>
          <Image
            source={require("../assets/Abeer3.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.doctorName}>Muhammad Abeer</Text>
          <Text style={styles.doctorSpeciality}>
            <Image
              style={styles.abc}
              source={require("../assets/diamond.png")}
            ></Image>
            Web & App Expert
          </Text>
        </View>
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statNumber1}>150+</Text>
            <Text style={styles.statLabel}>Projects</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber2}>02+</Text>
            <Text style={styles.statLabel}>Exp. years</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber3}>284+</Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>
        </View>
        <View style={styles.about}>
          <Text style={styles.aboutTitle}>About Developer</Text>
          <Text style={styles.aboutText}>
            Muhammad Abeer is the top most Web specialist. He is available for
            private consultation.He got many awards in Web Competitions and also
            Google Certified.
          </Text>
        </View>
        <View style={styles.schedules}>
          <Text style={styles.schedulesTitle}>Schedules</Text>
          <View style={styles.days}>
            <TouchableOpacity
              style={styles.day}
              onPress={() => handleDayPress(7)}
            >
              <Text style={styles.dayNumber}>7</Text>
              <Text style={styles.dayLabel}>Sun</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.day}
              onPress={() => handleDayPress(8)}
            >
              <Text style={styles.dayNumber}>8</Text>
              <Text style={styles.dayLabel}>Mon</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.day, selectedDay === 9 && styles.selectedDay]}
              onPress={() => handleDayPress(9)}
            >
              <Text style={styles.dayNumber}>9</Text>
              <Text style={styles.dayLabel}>Tue</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.day}
              onPress={() => handleDayPress(10)}
            >
              <Text style={styles.dayNumber}>10</Text>
              <Text style={styles.dayLabel}>Wed</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.day}
              onPress={() => handleDayPress(11)}
            >
              <Text style={styles.dayNumber}>11</Text>
              <Text style={styles.dayLabel}>Thu</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.visitHour}>
          <Text style={styles.visitHourTitle}>Visit Hour</Text>
          <View style={styles.timeSlots}>
            <TouchableOpacity style={styles.timeSlot}>
              <Text style={styles.timeSlotText}>11:00AM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeSlot}>
              <Text style={styles.timeSlotText}>12:00AM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeSlot}>
              <Text style={styles.timeSlotText}>01:00AM</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.timeSlot}>
              <Text style={styles.timeSlotText}>02:00AM</Text>
            </TouchableOpacity> */}
          </View>
          <View style={styles.timeSlots}>
            <TouchableOpacity style={styles.timeSlot}>
              <Text style={styles.timeSlotText}>03:00AM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeSlot}>
              <Text style={styles.timeSlotText}>04:00AM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeSlot}>
              <Text style={styles.timeSlotText}>05:00AM</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styles.timeSlot}>
              <Text style={styles.timeSlotText}>06:00AM</Text>
            </TouchableOpacity> */}
          </View>
        </View>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  header: {
    // marginTop: 10,
    padding: 30,
    backgroundColor: "#FFFFFF",
  },
  headerText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  // header: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   marginBottom: 20,
  // },

  backArrow: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
  },
  profile: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  doctorName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  doctorSpeciality: {
    fontSize: 16,
    color: "#888888",
    marginTop: 5,
  },
  stats: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    backgroundColor: "#48cae4",
    borderRadius: 10,
  },
  abc: {
    height: 20,
    width: 20,
    marginRight: 6,
  },
  stat: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    margin: 5,
  },
  statNumber1: {
    color: "#48cae4",
    fontSize: 24,
    fontWeight: "bold",
  },
  statNumber2: {
    color: "#9d4edd",
    fontSize: 24,
    fontWeight: "bold",
  },
  statNumber3: {
    color: "#ffb5a7",
    fontSize: 24,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 14,
    color: "#888888",
  },
  about: {
    marginBottom: 20,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    color: "#888888",
  },
  schedules: {
    marginBottom: 20,
  },
  schedulesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  days: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  day: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    margin: 5,
  },
  selectedDay: {
    backgroundColor: "#48cae4",
  },
  dayNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dayLabel: {
    fontSize: 14,
    color: "#888888",
  },
  visitHour: {
    marginBottom: 20,
  },
  visitHourTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  timeSlots: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeSlot: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    flex: 1,
    padding: 16,
    alignItems: "center",
    margin: 5,
  },
  timeSlotText: {
    fontSize: 16,
  },
  bookButton: {
    backgroundColor: "#48cae4",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  bookButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default About;
