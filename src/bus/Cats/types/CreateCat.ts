/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CatInput } from "./../../../@types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateCat
// ====================================================

export interface CreateCat_createCat {
  __typename: "CatGqlOutput";
  _id: string;
  age: number;
  name: string;
}

export interface CreateCat {
  createCat: CreateCat_createCat;
}

export interface CreateCatVariables {
  input: CatInput;
}
