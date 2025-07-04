import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Calendar, TrendingUp, TrendingDown, Target, Award, Activity, Flame, Clock, ChartBar as BarChart3 } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function ProgressScreen() {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const periods = [
    { id: 'week', name: 'Week' },
    { id: 'month', name: 'Month' },
    { id: 'year', name: 'Year' },
  ];

  const stats = {
    weight: { current: 68.5, change: -2.3, trend: 'down' },
    bodyFat: { current: 18.2, change: -1.8, trend: 'down' },
    muscle: { current: 55.8, change: 1.2, trend: 'up' },
    bmi: { current: 22.1, change: -0.8, trend: 'down' },
  };

  const weeklyData = [
    { day: 'Mon', workouts: 1, calories: 1850, steps: 8500 },
    { day: 'Tue', workouts: 0, calories: 1920, steps: 6200 },
    { day: 'Wed', workouts: 1, calories: 1780, steps: 9800 },
    { day: 'Thu', workouts: 1, calories: 1650, steps: 7300 },
    { day: 'Fri', workouts: 0, calories: 2100, steps: 5900 },
    { day: 'Sat', workouts: 1, calories: 1950, steps: 12000 },
    { day: 'Sun', workouts: 1, calories: 1800, steps: 8900 },
  ];

  const achievements = [
    {
      id: 1,
      title: 'Consistency Champion',
      description: '7 days workout streak',
      icon: '🔥',
      progress: 100,
      unlocked: true,
    },
    {
      id: 2,
      title: 'Calorie Crusher',
      description: 'Burned 2000+ calories in a day',
      icon: '💪',
      progress: 85,
      unlocked: false,
    },
    {
      id: 3,
      title: 'Step Master',
      description: 'Walked 10,000 steps daily for a week',
      icon: '👟',
      progress: 71,
      unlocked: false,
    },
  ];

  const goals = [
    {
      id: 1,
      title: 'Lose 5kg',
      current: 2.3,
      target: 5,
      unit: 'kg',
      deadline: 'April 30',
      color: '#ef4444',
    },
    {
      id: 2,
      title: 'Run 100km',
      current: 67,
      target: 100,
      unit: 'km',
      deadline: 'March 31',
      color: '#3b82f6',
    },
    {
      id: 3,
      title: 'Workout 20 times',
      current: 14,
      target: 20,
      unit: 'sessions',
      deadline: 'March 31',
      color: '#10b981',
    },
  ];

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? TrendingUp : TrendingDown;
  };

  const getTrendColor = (trend: string) => {
    return trend === 'up' ? '#10b981' : '#ef4444';
  };

  const getMaxValue = (data: any[], key: string) => {
    return Math.max(...data.map(item => item[key]));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Progress</Text>
          <TouchableOpacity style={styles.calendarButton}>
            <Calendar size={20} color="#6366f1" />
          </TouchableOpacity>
        </View>

        {/* Period Selector */}
        <View style={styles.periodSelector}>
          {periods.map((period) => (
            <TouchableOpacity
              key={period.id}
              style={[
                styles.periodButton,
                selectedPeriod === period.id && styles.periodButtonSelected,
              ]}
              onPress={() => setSelectedPeriod(period.id)}>
              <Text
                style={[
                  styles.periodText,
                  selectedPeriod === period.id && styles.periodTextSelected,
                ]}>
                {period.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Body Metrics */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Body Metrics</Text>
          <View style={styles.metricsGrid}>
            <View style={styles.metricCard}>
              <Text style={styles.metricLabel}>Weight</Text>
              <Text style={styles.metricValue}>{stats.weight.current} kg</Text>
              <View style={styles.metricChange}>
                {React.createElement(getTrendIcon(stats.weight.trend), {
                  size: 16,
                  color: getTrendColor(stats.weight.trend),
                })}
                <Text style={[styles.changeText, { color: getTrendColor(stats.weight.trend) }]}>
                  {Math.abs(stats.weight.change)} kg
                </Text>
              </View>
            </View>

            <View style={styles.metricCard}>
              <Text style={styles.metricLabel}>Body Fat</Text>
              <Text style={styles.metricValue}>{stats.bodyFat.current}%</Text>
              <View style={styles.metricChange}>
                {React.createElement(getTrendIcon(stats.bodyFat.trend), {
                  size: 16,
                  color: getTrendColor(stats.bodyFat.trend),
                })}
                <Text style={[styles.changeText, { color: getTrendColor(stats.bodyFat.trend) }]}>
                  {Math.abs(stats.bodyFat.change)}%
                </Text>
              </View>
            </View>

            <View style={styles.metricCard}>
              <Text style={styles.metricLabel}>Muscle</Text>
              <Text style={styles.metricValue}>{stats.muscle.current} kg</Text>
              <View style={styles.metricChange}>
                {React.createElement(getTrendIcon(stats.muscle.trend), {
                  size: 16,
                  color: getTrendColor(stats.muscle.trend),
                })}
                <Text style={[styles.changeText, { color: getTrendColor(stats.muscle.trend) }]}>
                  {Math.abs(stats.muscle.change)} kg
                </Text>
              </View>
            </View>

            <View style={styles.metricCard}>
              <Text style={styles.metricLabel}>BMI</Text>
              <Text style={styles.metricValue}>{stats.bmi.current}</Text>
              <View style={styles.metricChange}>
                {React.createElement(getTrendIcon(stats.bmi.trend), {
                  size: 16,
                  color: getTrendColor(stats.bmi.trend),
                })}
                <Text style={[styles.changeText, { color: getTrendColor(stats.bmi.trend) }]}>
                  {Math.abs(stats.bmi.change)}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Weekly Activity Chart */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Weekly Activity</Text>
            <TouchableOpacity>
              <BarChart3 size={20} color="#6366f1" />
            </TouchableOpacity>
          </View>
          <View style={styles.chartContainer}>
            <View style={styles.chart}>
              {weeklyData.map((day, index) => {
                const maxSteps = getMaxValue(weeklyData, 'steps');
                const height = (day.steps / maxSteps) * 100;
                return (
                  <View key={index} style={styles.chartBar}>
                    <View style={styles.barContainer}>
                      <View
                        style={[
                          styles.bar,
                          {
                            height: `${height}%`,
                            backgroundColor: day.workouts > 0 ? '#6366f1' : '#e2e8f0',
                          },
                        ]}
                      />
                    </View>
                    <Text style={styles.chartLabel}>{day.day}</Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.chartLegend}>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#6366f1' }]} />
                <Text style={styles.legendText}>Workout days</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#e2e8f0' }]} />
                <Text style={styles.legendText}>Rest days</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Goals */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Current Goals</Text>
          {goals.map((goal) => {
            const progress = (goal.current / goal.target) * 100;
            return (
              <View key={goal.id} style={styles.goalCard}>
                <View style={styles.goalHeader}>
                  <Text style={styles.goalTitle}>{goal.title}</Text>
                  <Text style={styles.goalDeadline}>{goal.deadline}</Text>
                </View>
                <View style={styles.goalProgress}>
                  <Text style={styles.goalValue}>
                    {goal.current} / {goal.target} {goal.unit}
                  </Text>
                  <Text style={styles.goalPercentage}>{Math.round(progress)}%</Text>
                </View>
                <View style={styles.progressBar}>
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${progress}%`, backgroundColor: goal.color },
                    ]}
                  />
                </View>
              </View>
            );
          })}
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          {achievements.map((achievement) => (
            <View key={achievement.id} style={styles.achievementCard}>
              <View style={styles.achievementIcon}>
                <Text style={styles.achievementEmoji}>{achievement.icon}</Text>
              </View>
              <View style={styles.achievementInfo}>
                <Text style={styles.achievementTitle}>{achievement.title}</Text>
                <Text style={styles.achievementDescription}>{achievement.description}</Text>
                <View style={styles.achievementProgress}>
                  <View style={styles.achievementProgressBar}>
                    <View
                      style={[
                        styles.achievementProgressFill,
                        {
                          width: `${achievement.progress}%`,
                          backgroundColor: achievement.unlocked ? '#10b981' : '#6366f1',
                        },
                      ]}
                    />
                  </View>
                  <Text style={styles.achievementPercentage}>{achievement.progress}%</Text>
                </View>
              </View>
              {achievement.unlocked && (
                <View style={styles.unlockedBadge}>
                  <Award size={16} color="#f59e0b" />
                </View>
              )}
            </View>
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
  calendarButton: {
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
  periodSelector: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 24,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 8,
  },
  periodButtonSelected: {
    backgroundColor: '#6366f1',
  },
  periodText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
    fontFamily: 'Inter-Medium',
  },
  periodTextSelected: {
    color: '#ffffff',
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
    paddingHorizontal: 20,
    marginBottom: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 12,
  },
  metricCard: {
    width: (width - 56) / 2,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  metricLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 8,
    fontFamily: 'Inter-Medium',
  },
  metricValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 8,
    fontFamily: 'Poppins-Bold',
  },
  metricChange: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  changeText: {
    fontSize: 12,
    fontWeight: '600',
    fontFamily: 'Inter-SemiBold',
  },
  chartContainer: {
    paddingHorizontal: 20,
  },
  chart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 120,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  chartBar: {
    alignItems: 'center',
    flex: 1,
  },
  barContainer: {
    height: 80,
    width: 20,
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  bar: {
    width: '100%',
    borderRadius: 4,
    minHeight: 4,
  },
  chartLabel: {
    fontSize: 12,
    color: '#6b7280',
    fontFamily: 'Inter-Medium',
  },
  chartLegend: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    fontSize: 12,
    color: '#6b7280',
    fontFamily: 'Inter-Medium',
  },
  goalCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    fontFamily: 'Poppins-SemiBold',
  },
  goalDeadline: {
    fontSize: 12,
    color: '#6b7280',
    fontFamily: 'Inter-Medium',
  },
  goalProgress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  goalValue: {
    fontSize: 14,
    color: '#6b7280',
    fontFamily: 'Inter-Medium',
  },
  goalPercentage: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6366f1',
    fontFamily: 'Inter-SemiBold',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#f1f5f9',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  achievementCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  achievementIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#f1f5f9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  achievementEmoji: {
    fontSize: 24,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 4,
    fontFamily: 'Poppins-SemiBold',
  },
  achievementDescription: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 8,
    fontFamily: 'Inter-Regular',
  },
  achievementProgress: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  achievementProgressBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#f1f5f9',
    borderRadius: 2,
    overflow: 'hidden',
  },
  achievementProgressFill: {
    height: '100%',
    borderRadius: 2,
  },
  achievementPercentage: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6366f1',
    fontFamily: 'Inter-SemiBold',
  },
  unlockedBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fef3c7',
    justifyContent: 'center',
    alignItems: 'center',
  },
});