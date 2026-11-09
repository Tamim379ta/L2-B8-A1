# Combining Union and Intersection Types in TypeScript

## Introduction

Union (`|`) and intersection (`&`) types are two of TypeScript's most useful tools. A union says a value can be one of several types, while an intersection says a value must satisfy all of them at once. Used together, they let you model real-world data in a very precise way.

## A Practical Example: API Responses

Imagine an API that returns either a success or an error. A union describes that choice perfectly.

```ts
type Success = { status: "success"; data: string[] };
type Failure = { status: "error"; message: string };

type ApiResponse = Success | Failure;
```

Now suppose every response also carries a timestamp for logging. Instead of repeating the field, we can use an intersection.

```ts
type WithTimestamp = { timestamp: number };

type LoggedResponse = ApiResponse & WithTimestamp;
```

TypeScript distributes the intersection over the union, so `LoggedResponse` becomes `(Success & WithTimestamp) | (Failure & WithTimestamp)`. We can then safely narrow it using the `status` field.

```ts
function handle(res: LoggedResponse) {
  if (res.status === "success") {
    console.log(res.data, res.timestamp);
  } else {
    console.log(res.message, res.timestamp);
  }
}
```

Inside each branch, TypeScript knows exactly which properties are available, and `timestamp` is always accessible.

## Conclusion

Unions describe alternatives, and intersections add shared properties on top of them. By combining both, you avoid duplicated code and get strong type safety, especially when working with API data and discriminated unions.
