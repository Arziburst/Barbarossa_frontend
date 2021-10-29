// Public
export const LOGIN = '/login';
export const REGISTER = '/register';

// Private
export const ROOT = '/';
export const LESSONS = '/lessons';

export const TESTS = '/lesson/:lessonId/tests';
export const getPath_TESTS = (lessonId: string) => `/lesson/${lessonId}/tests`;

export const TEST = '/lesson/:lessonId/test/:testId';
export const getPath_TEST = (lessonId: string, testId: string) => `/lesson/${lessonId}/test/${testId}`;
