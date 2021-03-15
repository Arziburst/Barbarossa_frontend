/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateLessonInput } from "./../../../@types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: UpdateLesson
// ====================================================

export interface UpdateLesson_updateLesson_tests {
  __typename: "Test";
  _id: string;
  testNumber: number;
}

export interface UpdateLesson_updateLesson {
  __typename: "Lesson";
  _id: string;
  lessonNumber: number;
  title: string | null;
  description: string | null;
  tests: UpdateLesson_updateLesson_tests[];
}

export interface UpdateLesson {
  updateLesson: UpdateLesson_updateLesson;
}

export interface UpdateLessonVariables {
  input: UpdateLessonInput;
}
