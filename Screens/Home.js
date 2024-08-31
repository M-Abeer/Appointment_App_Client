import React, { useState } from "react";
import { ScrollView } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "AI", title: "AI/ML Dev", icon: require("../assets/AI.png") },

    {
      id: "Web",
      title: "Web Dev",
      icon: require("../assets/web.png"),
    },
    {
      id: "App",
      title: "App Dev",
      icon: require("../assets/mobile.png"),
    },
    { id: "Game", title: "Game Dev", icon: require("../assets/game.png") },
  ];

  const doctors = [
    {
      id: "m-abeer",
      name: "M Abeer Naveed",
      specialty: "Full Stack Dev",
      location: "Multan,Pakistan",
      rating: 4.8,
      avatar: require("../assets/Abeer3.jpg"),
    },
    {
      id: "m-areeb",
      name: "M Areeb Naveed",
      specialty: "ML Engineer",
      location: "London, England",
      rating: 4.5,
      avatar: require("../assets/Abeer2.jpg"),
    },
  ];

  const handleCategoryPress = (categoryId) => {
    // Handle category selection logic here
  };

  const handleDoctorPress = (doctorId) => {
    // Handle doctor selection logic here
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.flex}>
            <Image
              source={require("../assets/hamburger.png")}
              style={styles.iconImage}
            />
            <Image
              source={require("../assets/Abeer3.jpg")}
              style={styles.iconImage}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.headerText}>Welcome Back</Text>
            <Text style={styles.headerText}>
              Let's find your top Developer!
            </Text>
          </View>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search development issue..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            <Image
              source={require("../assets/search.png")}
              style={styles.profileImage}
            />
          </View>
        </View>
        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesTitle}>Categories</Text>
          <View style={styles.categoriesGrid}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryItem}
                onPress={() => handleCategoryPress(category.id)}
              >
                <Image source={category.icon} style={styles.categoryIcon} />
                <Text style={styles.categoryText}>{category.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.doctorsContainer}>
          {doctors.map((doctor) => (
            <View key={doctor.id} style={styles.doctorItem}>
              <TouchableOpacity onPress={() => handleDoctorPress(doctor.id)}>
                <View style={styles.doctorInfo}>
                  <Image source={doctor.avatar} style={styles.doctorAvatar} />
                  <View>
                    <Text style={styles.doctorName}>{doctor.name}</Text>
                    <Text style={styles.doctorSpecialty}>
                      {doctor.specialty}
                    </Text>
                    <Text style={styles.doctorLocation}>{doctor.location}</Text>
                  </View>
                </View>
                <View style={styles.doctorRating}>
                  <Text style={styles.ratingText}>{doctor.rating}</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.appointmentButton}>
                <Text style={styles.appointmentButtonText}>Appointment</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    gap: 250,
    alignItems: "center",
  },
  content: {
    paddingTop: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    // deaaff
    backgroundColor: "#48cae4",
    paddingTop: 50,
    marginBottom: 10,
    padding: 20,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontFamily: "Robbins",
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  profileImage: {
    position: "absolute",
    top: 28,
    marginLeft: 30,
    zIndex: 10,
    width: 25,
    height: 25,
    borderRadius: 10,
  },
  iconImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    width: "100%",
    padding: 15,
  },
  searchInput: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    paddingLeft: 60,
    paddingVertical: 14,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%",
    fontSize: 16,
    marginBottom: 20,
  },
  categoriesContainer: {
    padding: 15,
  },
  categoriesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  categoriesGrid: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingLeft: 5,
  },
  categoryItem: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 14,
  },
  doctorsContainer: {
    padding: 15,
  },
  doctorItem: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 3,
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  doctorInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  doctorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  doctorSpecialty: {
    fontSize: 14,
    color: "#0077b6",
  },
  doctorLocation: {
    fontSize: 12,
    color: "#808080",
  },
  doctorRating: {
    backgroundColor: "#E0E0E0",
    padding: 5,
    borderRadius: 5,
    position: "absolute",
    top: 10,
    right: 10,
  },
  ratingText: {
    fontSize: 12,
  },
  appointmentButton: {
    backgroundColor: "#48cae4",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  appointmentButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 15,
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
  },
  button: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 20,
    elevation: 2,
  },
  addButton: {
    backgroundColor: "#87CEEB",
    padding: 10,
    borderRadius: 20,
    elevation: 2,
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default Home;
