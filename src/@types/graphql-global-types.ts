/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CreateTestInput {
  testNumber: number;
  title?: string | null;
  description?: string | null;
  lessonId: string;
}

export interface LessonCreateInput {
  lessonNumber: number;
  title?: string | null;
  description?: string | null;
}

export interface TestsOfLessonInput {
  lessonId: string;
}

export interface UpdateLessonInput {
  _id: string;
  lessonNumber?: number | null;
  title?: string | null;
  description?: string | null;
  tests?: string[] | null;
}

export interface UpdateTestInput {
  _id: string;
  testNumber?: number | null;
  title?: string | null;
  description?: string | null;
  lessons?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
