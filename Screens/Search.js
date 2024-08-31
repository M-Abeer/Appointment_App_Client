import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Search = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Top Developers</Text>
        </View>
        <View style={styles.searchContainer}>
          <Image
            source={require("../assets/search.png")}
            style={styles.profileImage}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Developers..."
          />
        </View>
        <View style={styles.doctorList}>
          <DoctorCard
            name="Muhammad Areeb"
            specialty="ML Engineer"
            location="London, England"
            rating="4.8"
            image={require("../assets/Abeer2.jpg")}
          />
          <DoctorCard
            name="Muhammad Asad"
            specialty="UI|UX Designer"
            location="Lahore, Pakistan"
            rating="4.8"
            image={require("../assets/Abeer1.jpg")}
          />
          <DoctorCard
            name="Muhammad Ahmad"
            specialty="SQA Engineer"
            location="Islamabad,Pakistan"
            rating="4.8"
            image={require("../assets/Abeer5.jpg")}
          />
          <DoctorCard
            name="Muhammad Ali"
            specialty="Game Developer"
            location="Dubai, UAE"
            rating="4.8"
            image={require("../assets/Abeer4.jpg")}
          />
          <DoctorCard
            name="Muhammad Abeer"
            specialty="Web & App Dev"
            location="Multan, Pakistan"
            rating="4.8 "
            image={require("../assets/Abeer3.jpg")}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const DoctorCard = ({ name, specialty, location, rating, image }) => {
  return (
    <View style={styles.doctorCard}>
      <View style={styles.doctorInfo}>
        <Image source={image} style={styles.doctorImage} />
        <View style={styles.doctorDetails}>
          <Text style={styles.doctorName}>{name}</Text>
          <Text style={styles.doctorSpecialty}>{specialty}</Text>
          {location && <Text style={styles.doctorLocation}>{location}</Text>}
        </View>
      </View>
      <View style={styles.doctorActions}>
        <View>
          <Text style={styles.doctorRating}>
            {rating}
            <Image
              style={styles.img}
              source={require("../assets/star.png")}
            ></Image>
          </Text>
          {/* <Image
            source={require("../assets/home.png")}
            style={styles.chatIcon}
          /> */}
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Appointment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btns}>
          <Image
            source={require("../assets/heart.png")}
            style={styles.chatIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btns}>
          <Image
            source={require("../assets/heart.png")}
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
    backgroundColor: "#F7F8FA",
  },
  header: {
    marginTop: 10,
    padding: 30,
    backgroundColor: "#FFFFFF",
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  img: {
    width: 16,
    height: 16,
  },
  searchContainer: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    paddingHorizontal: 20,
    elevation: 3,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: "auto",
    gap: 10,
  },

  searchPlaceholder: {
    fontSize: 16,
    color: "#B0B0B0",
  },
  doctorList: {
    marginTop: 20,
  },
  doctorCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 10,
    elevation: 3,
  },
  doctorInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 20,
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
    color: "#666666",
  },
  doctorLocation: {
    fontSize: 12,
    color: "#999999",
  },
  doctorActions: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingLeft: 16,
  },
  doctorRating: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 12,
  },
  button: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#48cae4",
    marginRight: 10,
  },
  btns: {
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  chatIcon: {
    width: 20,
    height: 20,
  },
  heartIcon: {
    width: 20,
    height: 20,
  },
});

export default Search;
