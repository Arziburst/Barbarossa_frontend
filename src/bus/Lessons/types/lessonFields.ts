/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: lessonFields
// ====================================================

export interface lessonFields_tests {
  __typename: "Test";
  _id: string;
  testNumber: number;
}

export interface lessonFields {
  __typename: "Lesson";
  _id: string;
  lessonNumber: number;
  title: string | null;
  description: string | null;
  tests: lessonFields_tests[];
}
