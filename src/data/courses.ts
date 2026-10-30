// Course facts as published on bitcamp.ge/courses/java (read 2026-10-30).
// The page states the totals; per-chapter counts are not repeated here because they sum to 266, not 267.
export type CourseFact = { value: string; label: string }
export type CourseModule = { index: string; title: string; summary: string; topics: string[] }
export type Course = {
  id: string
  format: string
  author: string
  title: string
  promise: string
  description: string
  url: string
  startUrl: string
  platform: { name: string; logo: string }
  facts: CourseFact[]
  modules: CourseModule[]
}

export const javaCourse: Course = {
  id: 'java-course',
  format: 'Video course',
  author: 'Boris Solomonia',
  title: 'Java Programming Fundamentals',
  promise: 'From your first variable to a working desktop app, one short video at a time.',
  description: 'Java runs in almost every modern device; this course puts it in your head too. It covers the tools of problem-solving, how Java uses memory, objects, collections, files and a real JavaFX interface.',
  url: 'https://www.bitcamp.ge/courses/java',
  startUrl: 'https://www.bitcamp.ge/courses/java/introduction/00',
  platform: { name: 'Bitcamp', logo: '/images/bitcamp.png' },
  facts: [
    { value: '21', label: 'Chapters' },
    { value: '267', label: 'Lessons' },
    { value: '265', label: 'Videos' },
    { value: 'Georgian', label: 'Language' }
  ],
  modules: [
    { index: '01', title: 'Foundations', summary: 'Set up the tools and learn how a program holds data.', topics: ['Why Java', 'JDK & IDE', 'Hello World', 'Variables & types', 'Casting'] },
    { index: '02', title: 'Control flow', summary: 'Make decisions and repeat work without repeating code.', topics: ['if / else', 'Logic operators', 'Scanner input', 'while', 'break / continue', 'for loops'] },
    { index: '03', title: 'Methods & data', summary: 'Split a program into named steps and hold many values.', topics: ['Methods', 'Parameters', 'return', 'ArrayList', 'Arrays', 'HashMap'] },
    { index: '04', title: 'Object-oriented Java', summary: 'Model the world as objects that work together.', topics: ['Classes', 'Constructors', 'static', 'Inheritance', 'Abstract classes', 'Interfaces'] },
    { index: '05', title: 'Collections & streams', summary: 'Work with whole groups of data in a few clear lines.', topics: ['List / Map / Set', 'Streams', 'Lambdas', 'Comparable', 'Sorting'] },
    { index: '06', title: 'Real programs', summary: 'Read and write files, handle failure and build an interface.', topics: ['Files', 'Regex', 'Exceptions', 'Generics', 'JavaFX'] }
  ]
}
