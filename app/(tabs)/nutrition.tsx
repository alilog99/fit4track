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
  Plus,
  Search,
  Camera,
  Target,
  Droplets,
  Zap,
  Apple,
  Coffee,
  Utensils,
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function NutritionScreen() {
  const [selectedMeal, setSelectedMeal] = useState('breakfast');

  const dailyGoals = {
    calories: { current: 1247, target: 2000 },
    protein: { current: 65, target: 120 },
    carbs: { current: 140, target: 250 },
    fat: { current: 45, target: 67 },
    water: { current: 6, target: 8 },
  };

  const meals = [
    { id: 'breakfast', name: 'Breakfast', icon: Coffee, calories: 420 },
    { id: 'lunch', name: 'Lunch', icon: Utensils, calories: 580 },
    { id: 'dinner', name: 'Dinner', icon: Apple, calories: 247 },
    { id: 'snacks', name: 'Snacks', icon: Zap, calories: 0 },
  ];

  const recentFoods = [
    {
      id: 1,
      name: 'Greek Yogurt with Berries',
      calories: 180,
      protein: 15,
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg',
      meal: 'breakfast',
    },
    {
      id: 2,
      name: 'Grilled Chicken Salad',
      calories: 320,
      protein: 35,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      meal: 'lunch',
    },
    {
      id: 3,
      name: 'Avocado Toast',
      calories: 240,
      protein: 8,
      image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg',
      meal: 'breakfast',
    },
  ];

  const quickAdd = [
    { id: 1, name: 'Banana', calories: 105, icon: '🍌' },
    { id: 2, name: 'Apple', calories: 95, icon: '🍎' },
    { id: 3, name: 'Almonds (1oz)', calories: 164, icon: '🥜' },
    { id: 4, name: 'Water (8oz)', calories: 0, icon: '💧' },
  ];

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 100) return '#10b981';
    if (percentage >= 75) return '#f59e0b';
    return '#6366f1';
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Nutrition</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Search size={20} color="#6366f1" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Camera size={20} color="#6366f1" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Daily Summary */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryHeader}>
            <Text style={styles.summaryTitle}>Today's Summary</Text>
            <Text style={styles.summaryDate}>March 15, 2024</Text>
          </View>
          
          <View style={styles.caloriesSection}>
            <View style={styles.caloriesInfo}>
              <Text style={styles.caloriesConsumed}>{dailyGoals.calories.current}</Text>
              <Text style={styles.caloriesLabel}>consumed</Text>
            </View>
            <View style={styles.caloriesProgress}>
              <View style={styles.caloriesProgressBar}>
                <View 
                  style={[
                    styles.caloriesProgressFill, 
                    { width: `${getProgressPercentage(dailyGoals.calories.current, dailyGoals.calories.target)}%` }
                  ]} 
                />
              </View>
              <Text style={styles.caloriesRemaining}>
                {dailyGoals.calories.target - dailyGoals.calories.current} remaining
              </Text>
            </View>
            <View style={styles.caloriesInfo}>
              <Text style={styles.caloriesTarget}>{dailyGoals.calories.target}</Text>
              <Text style={styles.caloriesLabel}>goal</Text>
            </View>
          </View>

          <View style={styles.macrosGrid}>
            <View style={styles.macroItem}>
              <Text style={styles.macroValue}>{dailyGoals.protein.current}g</Text>
              <Text style={styles.macroLabel}>Protein</Text>
              <View style={styles.macroProgress}>
                <View 
                  style={[
                    styles.macroProgressFill, 
                    { 
                      width: `${getProgressPercentage(dailyGoals.protein.current, dailyGoals.protein.target)}%`,
                      backgroundColor: '#ef4444'
                    }
                  ]} 
                />
              </View>
            </View>
            <View style={styles.macroItem}>
              <Text style={styles.macroValue}>{dailyGoals.carbs.current}g</Text>
              <Text style={styles.macroLabel}>Carbs</Text>
              <View style={styles.macroProgress}>
                <View 
                  style={[
                    styles.macroProgressFill, 
                    { 
                      width: `${getProgressPercentage(dailyGoals.carbs.current, dailyGoals.carbs.target)}%`,
                      backgroundColor: '#f59e0b'
                    }
                  ]} 
                />
              </View>
            </View>
            <View style={styles.macroItem}>
              <Text style={styles.macroValue}>{dailyGoals.fat.current}g</Text>
              <Text style={styles.macroLabel}>Fat</Text>
              <View style={styles.macroProgress}>
                <View 
                  style={[
                    styles.macroProgressFill, 
                    { 
                      width: `${getProgressPercentage(dailyGoals.fat.current, dailyGoals.fat.target)}%`,
                      backgroundColor: '#8b5cf6'
                    }
                  ]} 
                />
              </View>
            </View>
          </View>
        </View>

        {/* Water Intake */}
        <View style={styles.waterCard}>
          <View style={styles.waterHeader}>
            <Droplets size={24} color="#3b82f6" />
            <Text style={styles.waterTitle}>Water Intake</Text>
          </View>
          <View style={styles.waterProgress}>
            <Text style={styles.waterCount}>{dailyGoals.water.current}/{dailyGoals.water.target} glasses</Text>
            <TouchableOpacity style={styles.addWaterButton}>
              <Plus size={16} color="#3b82f6" />
            </TouchableOpacity>
          </View>
          <View style={styles.waterGlasses}>
            {Array.from({ length: dailyGoals.water.target }, (_, i) => (
              <View 
                key={i} 
                style={[
                  styles.waterGlass, 
                  i < dailyGoals.water.current && styles.waterGlassFilled
                ]} 
              />
            ))}
          </View>
        </View>

        {/* Meals */}
        <View style={styles.mealsSection}>
          <Text style={styles.sectionTitle}>Meals</Text>
          <View style={styles.mealTabs}>
            {meals.map((meal) => {
              const IconComponent = meal.icon;
              const isSelected = selectedMeal === meal.id;
              return (
                <TouchableOpacity
                  key={meal.id}
                  style={[styles.mealTab, isSelected && styles.mealTabSelected]}
                  onPress={() => setSelectedMeal(meal.id)}>
                  <IconComponent 
                    size={20} 
                    color={isSelected ? '#ffffff' : '#6b7280'} 
                  />
                  <Text style={[
                    styles.mealTabText, 
                    isSelected && styles.mealTabTextSelected
                  ]}>
                    {meal.name}
                  </Text>
                  <Text style={[
                    styles.mealCalories,
                    isSelected && styles.mealCaloriesSelected
                  ]}>
                    {meal.calories} cal
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <TouchableOpacity style={styles.addFoodButton}>
            <Plus size={20} color="#6366f1" />
            <Text style={styles.addFoodText}>Add Food</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Foods */}
        <View style={styles.recentSection}>
          <Text style={styles.sectionTitle}>Recent Foods</Text>
          {recentFoods.map((food) => (
            <TouchableOpacity key={food.id} style={styles.foodItem}>
              <Image source={{ uri: food.image }} style={styles.foodImage} />
              <View style={styles.foodInfo}>
                <Text style={styles.foodName}>{food.name}</Text>
                <Text style={styles.foodMeta}>{food.calories} cal • {food.protein}g protein</Text>
              </View>
              <TouchableOpacity style={styles.addButton}>
                <Plus size={16} color="#6366f1" />
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
        </View>

        {/* Quick Add */}
        <View style={styles.quickAddSection}>
          <Text style={styles.sectionTitle}>Quick Add</Text>
          <View style={styles.quickAddGrid}>
            {quickAdd.map((item) => (
              <TouchableOpacity key={item.id} style={styles.quickAddItem}>
                <Text style={styles.quickAddIcon}>{item.icon}</Text>
                <Text style={styles.quickAddName}>{item.name}</Text>
                <Text style={styles.quickAddCalories}>{item.calories} cal</Text>
              </TouchableOpacity>
            ))}
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
  summaryCard: {
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Poppins-SemiBold',
  },
  summaryDate: {
    fontSize: 14,
    color: '#6b7280',
    fontFamily: 'Inter-Medium',
  },
  caloriesSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  caloriesInfo: {
    alignItems: 'center',
  },
  caloriesConsumed: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6366f1',
    fontFamily: 'Poppins-Bold',
  },
  caloriesTarget: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6b7280',
    fontFamily: 'Poppins-Bold',
  },
  caloriesLabel: {
    fontSize: 12,
    color: '#6b7280',
    fontFamily: 'Inter-Medium',
  },
  caloriesProgress: {
    flex: 1,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  caloriesProgressBar: {
    width: '100%',
    height: 8,
    backgroundColor: '#f1f5f9',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  caloriesProgressFill: {
    height: '100%',
    backgroundColor: '#6366f1',
    borderRadius: 4,
  },
  caloriesRemaining: {
    fontSize: 12,
    color: '#6b7280',
    fontFamily: 'Inter-Medium',
  },
  macrosGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  macroItem: {
    alignItems: 'center',
    flex: 1,
  },
  macroValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Inter-Bold',
  },
  macroLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
    marginBottom: 8,
    fontFamily: 'Inter-Medium',
  },
  macroProgress: {
    width: '80%',
    height: 4,
    backgroundColor: '#f1f5f9',
    borderRadius: 2,
    overflow: 'hidden',
  },
  macroProgressFill: {
    height: '100%',
    borderRadius: 2,
  },
  waterCard: {
    marginHorizontal: 20,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  waterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  waterTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginLeft: 8,
    fontFamily: 'Poppins-SemiBold',
  },
  waterProgress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  waterCount: {
    fontSize: 14,
    color: '#6b7280',
    fontFamily: 'Inter-Medium',
  },
  addWaterButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#dbeafe',
    justifyContent: 'center',
    alignItems: 'center',
  },
  waterGlasses: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  waterGlass: {
    width: 24,
    height: 32,
    backgroundColor: '#f1f5f9',
    borderRadius: 4,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  waterGlassFilled: {
    backgroundColor: '#3b82f6',
  },
  mealsSection: {
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
  mealTabs: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 8,
  },
  mealTab: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  mealTabSelected: {
    backgroundColor: '#6366f1',
  },
  mealTabText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6b7280',
    marginTop: 4,
    fontFamily: 'Inter-Medium',
  },
  mealTabTextSelected: {
    color: '#ffffff',
  },
  mealCalories: {
    fontSize: 10,
    color: '#9ca3af',
    marginTop: 2,
    fontFamily: 'Inter-Regular',
  },
  mealCaloriesSelected: {
    color: '#e2e8f0',
  },
  addFoodButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#6366f1',
    borderStyle: 'dashed',
    gap: 8,
  },
  addFoodText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6366f1',
    fontFamily: 'Inter-SemiBold',
  },
  recentSection: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  foodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  foodImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  foodInfo: {
    flex: 1,
    marginLeft: 12,
  },
  foodName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    fontFamily: 'Inter-SemiBold',
  },
  foodMeta: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 2,
    fontFamily: 'Inter-Regular',
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickAddSection: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  quickAddGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickAddItem: {
    width: (width - 56) / 2,
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  quickAddIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  quickAddName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1e293b',
    textAlign: 'center',
    fontFamily: 'Inter-SemiBold',
  },
  quickAddCalories: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
    fontFamily: 'Inter-Regular',
  },
});