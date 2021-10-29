/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateTestInput } from "./../../../init/@types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: UpdateTest
// ====================================================

export interface UpdateTest_updateTest {
  __typename: "Test";
  _id: string;
  testNumber: number;
  title: string | null;
  description: string | null;
}

export interface UpdateTest {
  updateTest: UpdateTest_updateTest;
}

export interface UpdateTestVariables {
  input: UpdateTestInput;
}
