/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Tests
// ====================================================

export interface Tests_tests {
  __typename: "Test";
  _id: string;
  testNumber: number;
  title: string | null;
  description: string | null;
}

export interface Tests {
  tests: Tests_tests[];
}
