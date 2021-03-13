/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LessonCreateInput } from "./../../../@types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateLesson
// ====================================================

export interface CreateLesson_createLesson_tests {
  __typename: "Test";
  _id: string;
  testNumber: number;
}

export interface CreateLesson_createLesson {
  __typename: "Lesson";
  _id: string;
  lessonNumber: number;
  title: string | null;
  description: string | null;
  tests: CreateLesson_createLesson_tests[];
}

export interface CreateLesson {
  createLesson: CreateLesson_createLesson;
}

export interface CreateLessonVariables {
  input: LessonCreateInput;
}
