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
        {/* <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Image
              source={require("../assets/icon.png")}
              style={styles.backArrow}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Appointment</Text>
        </View> */}
        <View style={styles.profile}>
          <Image
            source={require("../assets/Abeer2.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.doctorName}>Muhammad Abeer</Text>
          <Text style={styles.doctorSpeciality}>Web & App Expert</Text>
        </View>
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>150+</Text>
            <Text style={styles.statLabel}>Projects</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>02+</Text>
            <Text style={styles.statLabel}>Exp. years</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>284+</Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>
        </View>
        <View style={styles.about}>
          <Text style={styles.aboutTitle}>About Doctor</Text>
          <Text style={styles.aboutText}>
            Dr. Maria Waston is the top most Cardiologist specialist in Nanyang
            Hospotalat London. She is available for private consultation.
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
            <TouchableOpacity style={styles.timeSlot}>
              <Text style={styles.timeSlotText}>02:00AM</Text>
            </TouchableOpacity>
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
            <TouchableOpacity style={styles.timeSlot}>
              <Text style={styles.timeSlotText}>06:00AM</Text>
            </TouchableOpacity>
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
    backgroundColor: "#F2F2F2",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
  },
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  stat: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    margin: 5,
  },
  statNumber: {
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
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    margin: 5,
  },
  selectedDay: {
    backgroundColor: "#E6E6E6",
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
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    margin: 5,
  },
  timeSlotText: {
    fontSize: 16,
  },
  bookButton: {
    backgroundColor: "#800080",
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
