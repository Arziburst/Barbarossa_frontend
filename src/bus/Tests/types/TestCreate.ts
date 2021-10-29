/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateTestInput } from "./../../../init/@types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: TestCreate
// ====================================================

export interface TestCreate_createTest_updatedLesson_tests {
  __typename: "Test";
  _id: string;
  testNumber: number;
}

export interface TestCreate_createTest_updatedLesson {
  __typename: "Lesson";
  _id: string;
  lessonNumber: number;
  title: string | null;
  description: string | null;
  tests: TestCreate_createTest_updatedLesson_tests[];
}

export interface TestCreate_createTest_createdTest {
  __typename: "Test";
  _id: string;
  testNumber: number;
  title: string | null;
  description: string | null;
}

export interface TestCreate_createTest {
  __typename: "CreateTestOutput";
  updatedLesson: TestCreate_createTest_updatedLesson;
  createdTest: TestCreate_createTest_createdTest;
}

export interface TestCreate {
  createTest: TestCreate_createTest;
}

export interface TestCreateVariables {
  input: CreateTestInput;
}
