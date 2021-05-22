import exp from 'constants';

export enum Polarity {
  POSITIVE = 'positive',
  NEGATIVE = 'negative',
}

export enum Emotion {
  HAPPY = 'happy',
  ANGRY = 'angry',
  SAD = 'sad',
  OTHER = 'other',
  FEAR = 'fear',
  SURPRISED = 'surprised',
}

export enum TimeRange {
  LAST_MONTH = 'last_month',
  LAST_WEEK = 'last_week',
  LAST_3MONTH = 'last_3_month',
  LAST_6MONTH = 'last_6_month',
  LAST_YEAR = 'last_year',
}
