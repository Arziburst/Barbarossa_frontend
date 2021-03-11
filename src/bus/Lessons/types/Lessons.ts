/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Lessons
// ====================================================

export interface Lessons_lessons_tests {
  __typename: "Test";
  _id: string;
  testNumber: number;
}

export interface Lessons_lessons {
  __typename: "Lesson";
  _id: string;
  lessonNumber: number;
  title: string | null;
  description: string | null;
  tests: Lessons_lessons_tests[];
}

export interface Lessons {
  lessons: Lessons_lessons[];
}
