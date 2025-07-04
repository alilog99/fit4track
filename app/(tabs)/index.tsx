import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Calendar,
  Target,
  Flame,
  Clock,
  ChevronRight,
  Play,
  Trophy,
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const todayStats = {
    calories: 1247,
    caloriesGoal: 2000,
    steps: 8432,
    stepsGoal: 10000,
    workouts: 1,
    workoutsGoal: 1,
    water: 6,
    waterGoal: 8,
  };

  const quickWorkouts = [
    {
      id: 1,
      title: 'Morning HIIT',
      duration: '15 min',
      calories: '180 cal',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg',
    },
    {
      id: 2,
      title: 'Core Strength',
      duration: '20 min',
      calories: '120 cal',
      image: 'https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg',
    },
    {
      id: 3,
      title: 'Yoga Flow',
      duration: '30 min',
      calories: '150 cal',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg',
    },
  ];

  const achievements = [
    { id: 1, title: '7-Day Streak', icon: '🔥', unlocked: true },
    { id: 2, title: 'First 5K', icon: '🏃‍♂️', unlocked: true },
    { id: 3, title: 'Strength Master', icon: '💪', unlocked: false },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning,</Text>
            <Text style={styles.name}>Alex!</Text>
          </View>
          <TouchableOpacity style={styles.calendarButton}>
            <Calendar size={24} color="#6366f1" />
          </TouchableOpacity>
        </View>

        {/* Daily Progress Card */}
        <LinearGradient
          colors={['#6366f1', '#8b5cf6']}
          style={styles.progressCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}>
          <Text style={styles.progressTitle}>Today's Progress</Text>
          <View style={styles.progressGrid}>
            <View style={styles.progressItem}>
              <Flame size={20} color="#ffffff" />
              <Text style={styles.progressValue}>
                {todayStats.calories}/{todayStats.caloriesGoal}
              </Text>
              <Text style={styles.progressLabel}>Calories</Text>
            </View>
            <View style={styles.progressItem}>
              <Target size={20} color="#ffffff" />
              <Text style={styles.progressValue}>
                {todayStats.steps.toLocaleString()}
              </Text>
              <Text style={styles.progressLabel}>Steps</Text>
            </View>
            <View style={styles.progressItem}>
              <Clock size={20} color="#ffffff" />
              <Text style={styles.progressValue}>
                {todayStats.workouts}/{todayStats.workoutsGoal}
              </Text>
              <Text style={styles.progressLabel}>Workouts</Text>
            </View>
          </View>
        </LinearGradient>

        {/* Quick Start Workouts */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Quick Start</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.workoutsList}>
            {quickWorkouts.map((workout) => (
              <TouchableOpacity key={workout.id} style={styles.workoutCard}>
                <Image source={{ uri: workout.image }} style={styles.workoutImage} />
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.8)']}
                  style={styles.workoutOverlay}>
                  <View style={styles.playButton}>
                    <Play size={16} color="#ffffff" fill="#ffffff" />
                  </View>
                  <View style={styles.workoutInfo}>
                    <Text style={styles.workoutTitle}>{workout.title}</Text>
                    <View style={styles.workoutMeta}>
                      <Text style={styles.workoutDuration}>{workout.duration}</Text>
                      <Text style={styles.workoutCalories}>{workout.calories}</Text>
                    </View>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Recent Achievements */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Achievements</Text>
            <TouchableOpacity>
              <ChevronRight size={20} color="#9ca3af" />
            </TouchableOpacity>
          </View>
          <View style={styles.achievementsList}>
            {achievements.map((achievement) => (
              <View key={achievement.id} style={styles.achievementItem}>
                <View style={styles.achievementIcon}>
                  <Text style={styles.achievementEmoji}>{achievement.icon}</Text>
                </View>
                <Text style={styles.achievementTitle}>{achievement.title}</Text>
                {achievement.unlocked && (
                  <View style={styles.unlockedBadge}>
                    <Trophy size={12} color="#f59e0b" />
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Weekly Challenge */}
        <View style={styles.challengeCard}>
          <View style={styles.challengeHeader}>
            <Text style={styles.challengeTitle}>Weekly Challenge</Text>
            <Text style={styles.challengeProgress}>3/7 days</Text>
          </View>
          <Text style={styles.challengeDescription}>
            Complete 30 minutes of exercise daily
          </Text>
          <View style={styles.challengeProgressBar}>
            <View style={[styles.challengeProgressFill, { width: '43%' }]} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  greeting: {
    fontSize: 16,
    color: '#64748b',
    fontFamily: 'Inter-Regular',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Poppins-Bold',
  },
  calendarButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  progressCard: {
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  progressGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressItem: {
    alignItems: 'center',
    flex: 1,
  },
  progressValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 8,
    marginBottom: 4,
    fontFamily: 'Inter-Bold',
  },
  progressLabel: {
    fontSize: 12,
    color: '#e2e8f0',
    fontFamily: 'Inter-Medium',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Poppins-SemiBold',
  },
  seeAll: {
    fontSize: 14,
    color: '#6366f1',
    fontFamily: 'Inter-Medium',
  },
  workoutsList: {
    paddingLeft: 20,
  },
  workoutCard: {
    width: width * 0.7,
    height: 200,
    marginRight: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  workoutImage: {
    width: '100%',
    height: '100%',
  },
  workoutOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    padding: 16,
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  workoutInfo: {
    alignSelf: 'flex-start',
  },
  workoutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
    fontFamily: 'Poppins-SemiBold',
  },
  workoutMeta: {
    flexDirection: 'row',
    gap: 12,
  },
  workoutDuration: {
    fontSize: 14,
    color: '#e2e8f0',
    fontFamily: 'Inter-Medium',
  },
  workoutCalories: {
    fontSize: 14,
    color: '#e2e8f0',
    fontFamily: 'Inter-Medium',
  },
  achievementsList: {
    paddingHorizontal: 20,
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  achievementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  achievementEmoji: {
    fontSize: 20,
  },
  achievementTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#1e293b',
    fontFamily: 'Inter-Medium',
  },
  unlockedBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#fef3c7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  challengeCard: {
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  challengeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Poppins-SemiBold',
  },
  challengeProgress: {
    fontSize: 14,
    color: '#6366f1',
    fontFamily: 'Inter-SemiBold',
  },
  challengeDescription: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 16,
    fontFamily: 'Inter-Regular',
  },
  challengeProgressBar: {
    height: 8,
    backgroundColor: '#f1f5f9',
    borderRadius: 4,
    overflow: 'hidden',
  },
  challengeProgressFill: {
    height: '100%',
    backgroundColor: '#6366f1',
    borderRadius: 4,
  },
});