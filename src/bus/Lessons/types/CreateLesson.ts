/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LessonCreateInput } from "./../../../@types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: CreateLesson
// ====================================================

export interface CreateLesson_createLesson {
  __typename: "Lesson";
  _id: string;
  lessonNumber: number;
  title: string | null;
  description: string | null;
}

export interface CreateLesson {
  createLesson: CreateLesson_createLesson;
}

export interface CreateLessonVariables {
  input: LessonCreateInput;
}
