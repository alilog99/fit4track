import React, { useState } from 'react';
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
  Search,
  Filter,
  Play,
  Clock,
  Flame,
  Zap,
  Heart,
  Dumbbell,
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function WorkoutsScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { id: 'All', name: 'All', icon: Zap },
    { id: 'Strength', name: 'Strength', icon: Dumbbell },
    { id: 'Cardio', name: 'Cardio', icon: Heart },
    { id: 'HIIT', name: 'HIIT', icon: Zap },
    { id: 'Yoga', name: 'Yoga', icon: Heart },
  ];

  const workouts = [
    {
      id: 1,
      title: 'Full Body HIIT',
      instructor: 'Sarah Johnson',
      duration: '25 min',
      calories: '320 cal',
      difficulty: 'Intermediate',
      category: 'HIIT',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg',
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Upper Body Strength',
      instructor: 'Mike Chen',
      duration: '35 min',
      calories: '280 cal',
      difficulty: 'Advanced',
      category: 'Strength',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg',
      rating: 4.9,
    },
    {
      id: 3,
      title: 'Morning Yoga Flow',
      instructor: 'Emma Wilson',
      duration: '30 min',
      calories: '150 cal',
      difficulty: 'Beginner',
      category: 'Yoga',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg',
      rating: 4.7,
    },
    {
      id: 4,
      title: 'Cardio Blast',
      instructor: 'David Rodriguez',
      duration: '20 min',
      calories: '250 cal',
      difficulty: 'Intermediate',
      category: 'Cardio',
      image: 'https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg',
      rating: 4.6,
    },
    {
      id: 5,
      title: 'Core Crusher',
      instructor: 'Lisa Park',
      duration: '15 min',
      calories: '180 cal',
      difficulty: 'Intermediate',
      category: 'Strength',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg',
      rating: 4.8,
    },
  ];

  const filteredWorkouts = selectedCategory === 'All' 
    ? workouts 
    : workouts.filter(workout => workout.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return '#10b981';
      case 'Intermediate': return '#f59e0b';
      case 'Advanced': return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Workouts</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Search size={20} color="#6366f1" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Filter size={20} color="#6366f1" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Featured Workout */}
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Today</Text>
          <TouchableOpacity style={styles.featuredCard}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg' }} 
              style={styles.featuredImage} 
            />
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.8)']}
              style={styles.featuredOverlay}>
              <View style={styles.featuredContent}>
                <View style={styles.featuredBadge}>
                  <Text style={styles.featuredBadgeText}>NEW</Text>
                </View>
                <Text style={styles.featuredTitle}>30-Day Fitness Challenge</Text>
                <Text style={styles.featuredSubtitle}>Transform your body in 30 days</Text>
                <TouchableOpacity style={styles.startButton}>
                  <Play size={16} color="#ffffff" fill="#ffffff" />
                  <Text style={styles.startButtonText}>Start Challenge</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={styles.categoriesSection}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesList}>
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <TouchableOpacity
                  key={category.id}
                  style={[styles.categoryItem, isSelected && styles.categoryItemSelected]}
                  onPress={() => setSelectedCategory(category.id)}>
                  <IconComponent 
                    size={20} 
                    color={isSelected ? '#ffffff' : '#6b7280'} 
                  />
                  <Text style={[
                    styles.categoryText, 
                    isSelected && styles.categoryTextSelected
                  ]}>
                    {category.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Workouts List */}
        <View style={styles.workoutsSection}>
          <Text style={styles.sectionTitle}>
            {selectedCategory === 'All' ? 'All Workouts' : `${selectedCategory} Workouts`}
          </Text>
          {filteredWorkouts.map((workout) => (
            <TouchableOpacity key={workout.id} style={styles.workoutCard}>
              <Image source={{ uri: workout.image }} style={styles.workoutCardImage} />
              <View style={styles.workoutCardContent}>
                <View style={styles.workoutCardHeader}>
                  <Text style={styles.workoutCardTitle}>{workout.title}</Text>
                  <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>⭐ {workout.rating}</Text>
                  </View>
                </View>
                <Text style={styles.instructor}>with {workout.instructor}</Text>
                <View style={styles.workoutMeta}>
                  <View style={styles.metaItem}>
                    <Clock size={14} color="#6b7280" />
                    <Text style={styles.metaText}>{workout.duration}</Text>
                  </View>
                  <View style={styles.metaItem}>
                    <Flame size={14} color="#6b7280" />
                    <Text style={styles.metaText}>{workout.calories}</Text>
                  </View>
                  <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(workout.difficulty) }]}>
                    <Text style={styles.difficultyText}>{workout.difficulty}</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.playButton}>
                <Play size={16} color="#6366f1" fill="#6366f1" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Poppins-Bold',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featuredSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  featuredCard: {
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    padding: 20,
  },
  featuredContent: {
    alignItems: 'flex-start',
  },
  featuredBadge: {
    backgroundColor: '#ef4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  featuredBadgeText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
    fontFamily: 'Poppins-Bold',
  },
  featuredSubtitle: {
    fontSize: 14,
    color: '#e2e8f0',
    marginBottom: 16,
    fontFamily: 'Inter-Regular',
  },
  startButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6366f1',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    gap: 8,
  },
  startButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
  },
  categoriesSection: {
    marginBottom: 24,
  },
  categoriesList: {
    paddingLeft: 20,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 12,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  categoryItemSelected: {
    backgroundColor: '#6366f1',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
    fontFamily: 'Inter-Medium',
  },
  categoryTextSelected: {
    color: '#ffffff',
  },
  workoutsSection: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  workoutCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  workoutCardImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  workoutCardContent: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  workoutCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  workoutCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    flex: 1,
    fontFamily: 'Poppins-SemiBold',
  },
  ratingContainer: {
    marginLeft: 8,
  },
  rating: {
    fontSize: 12,
    color: '#6b7280',
    fontFamily: 'Inter-Medium',
  },
  instructor: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
    fontFamily: 'Inter-Regular',
  },
  workoutMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#6b7280',
    fontFamily: 'Inter-Medium',
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  difficultyText: {
    fontSize: 10,
    color: '#ffffff',
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});