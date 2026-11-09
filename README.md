# TypeScript Assignment

This repository contains my solutions to a set of TypeScript problems, along with two short blog posts on core TypeScript concepts.

## What I Did

### 1. Coding Problems (`solutions.ts`)

I solved 8 problems, all in a single file with explicit parameter and return types and no use of `any`:

1. `multiplyValue`: multiplies a value by an optional multiplier, defaulting to 2 and handling `0` correctly.
2. `processInput`: uses a union type and `typeof` narrowing to format strings, numbers, and booleans.
3. `formatCoordinate`: formats a `readonly` tuple into a location string.
4. `concatenateArrays`: a generic function using rest parameters to combine arrays.
5. `getPopularCourses`: filters published courses by a minimum student count using the `Course` interface.
6. `pluckValues`: a generic function using `keyof` to extract a property from an array of objects.
7. `Employee` and `Manager`: classes demonstrating inheritance, `protected`, and `private` modifiers.
8. `validateAgeAsync`: an async function returning a `Promise<string>` that resolves or rejects based on age.

### 2. Blog Posts

- `type-vs-interface.md`: the core differences between `type` aliases and `interface`, and when to use each.
- `union-and-intersection-types.md`: a practical example of combining union (`|`) and intersection (`&`) types.

## Files

```
solutions.ts
type-vs-interface.md
union-and-intersection-types.md
README.md
```

## Key Concepts Practiced

Optional parameters, union types, type narrowing, tuples, generics, `keyof` constraints, interfaces, classes with access modifiers, and Promises.
