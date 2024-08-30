import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image
          source={require("../assets/icon.png")}
          style={styles.searchIcon}
        />
        <TextInput style={styles.searchInput} placeholder="Search Doctor" />
      </View>
      <ScrollView style={styles.doctorsList}>
        <DoctorCard
          name="Dr. Rodger Struck"
          specialty="Heart Surgeon, London, England"
          rating={4.8}
          image={require("../assets/icon.png")}
        />
        <DoctorCard
          name="Dr. Kathy Pacheco"
          specialty="Heart Surgeon, London, England"
          rating={4.8}
          image={require("../assets/icon.png")}
        />
        <DoctorCard
          name="Dr. Lorri Warf"
          specialty="General Dentist"
          rating={4.8}
          image={require("../assets/icon.png")}
        />
        <DoctorCard
          name="Dr. Chris Glasser"
          specialty="Heart Surgeon, London, England"
          rating={4.8}
          image={require("../assets/icon.png")}
        />
        <DoctorCard
          name="Dr. Kenneth Allen"
          specialty="General Dentist"
          rating={4.8}
          image={require("../assets/icon.png")}
        />
      </ScrollView>
    </View>
  );
};

const DoctorCard = ({ name, specialty, rating, image }) => {
  return (
    <View style={styles.doctorCard}>
      <View style={styles.doctorInfo}>
        <Image source={image} style={styles.doctorImage} />
        <View style={styles.doctorDetails}>
          <Text style={styles.doctorName}>{name}</Text>
          <Text style={styles.doctorSpecialty}>{specialty}</Text>
        </View>
      </View>
      <View style={styles.doctorActions}>
        <Text style={styles.doctorRating}>{rating}</Text>
        <TouchableOpacity style={styles.appointmentButton}>
          <Text style={styles.appointmentButtonText}>Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chatButton}>
          <Image
            source={require("../assets/icon.png")}
            style={styles.chatIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.heartButton}>
          <Image
            source={require("../assets/icon.png")}
            style={styles.heartIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  doctorsList: {
    padding: 10,
  },
  doctorCard: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  doctorInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  doctorImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 15,
  },
  doctorDetails: {
    flex: 1,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  doctorSpecialty: {
    fontSize: 14,
    color: "#777",
  },
  doctorActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  doctorRating: {
    fontSize: 16,
    fontWeight: "bold",
  },
  appointmentButton: {
    backgroundColor: "#b973d8",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
  },
  appointmentButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  chatButton: {
    padding: 5,
  },
  chatIcon: {
    width: 20,
    height: 20,
  },
  heartButton: {
    padding: 5,
  },
  heartIcon: {
    width: 20,
    height: 20,
  },
});

export default Search;
