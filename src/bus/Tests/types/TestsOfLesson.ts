/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TestsOfLessonInput } from "./../../../@types/graphql-global-types";

// ====================================================
// GraphQL query operation: TestsOfLesson
// ====================================================

export interface TestsOfLesson_testsOfLesson {
  __typename: "Test";
  _id: string;
  testNumber: number;
  title: string | null;
  description: string | null;
}

export interface TestsOfLesson {
  testsOfLesson: TestsOfLesson_testsOfLesson[];
}

export interface TestsOfLessonVariables {
  input: TestsOfLessonInput;
}
