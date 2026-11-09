# Type vs Interface in TypeScript: Which One Should You Use?

## Introduction

When I started using TypeScript, I kept asking myself whether to write `type` or `interface`. Both describe the shape of data, and for simple objects they look almost identical. However, they differ in a few important ways that affect how you structure your code.

## Core Differences

**Declaration merging.** Interfaces with the same name automatically merge into one, while type aliases cannot be redeclared.

```ts
interface User { name: string }
interface User { age: number } // merged: { name; age }
```

**Flexibility.** A `type` can name more than objects. It can represent unions, primitives, and tuples, which interfaces cannot.

```ts
type Status = "loading" | "success" | "error";
type Point = [number, number];
```

**Combining shapes.** Interfaces use `extends`, while types use intersections (`&`).

```ts
interface Admin extends User { role: string }
type Manager = User & { team: string };
```

## When to Choose Which

Use `interface` for object shapes, class contracts, and public APIs, because merging and `extends` make them easy to grow, and their error messages are often clearer. Use `type` for unions, tuples, mapped types, and any case where you need to give a name to something that is not a plain object.

## Conclusion

Neither option is better in every situation. Choose `interface` for objects that may be extended later, choose `type` for everything more complex, and most importantly, stay consistent across your project.
