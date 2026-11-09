# Type Narrowing in TypeScript: How It Works and Why It Matters

## Introduction

In TypeScript, a variable can have multiple possible types using a union (`|`). But when we try to use a method or property, TypeScript needs to know which type we are working with. This is where **type narrowing** comes in. It helps TypeScript identify a more specific type by checking certain conditions.

## Type Narrowing Using typeof

The `typeof` operator checks the type of a value, such as `string`, `number`, or `boolean`.

```ts
function format(value: string | number): string {
  if (typeof value === "string") {
    return value.trim();
  }
  return value.toFixed(2);
}
```

Here, `value` can be either a string or a number. When `typeof` confirms it is a string, TypeScript allows `trim()`. Otherwise, the string case has already returned, so TypeScript knows the remaining value is a number and allows `toFixed()`.

## Type Narrowing Using instanceof

The `instanceof` operator checks whether an object is an instance of a particular class or constructor.

```ts
function errorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return "Unexpected error";
}
```

Since `unknown` could be anything, we cannot directly access `error.message`. After checking `error instanceof Error`, TypeScript knows it is an `Error` object, so accessing its message becomes safe.

## Type Narrowing Using the in Operator

The `in` operator checks whether a property exists in an object.

```ts
type Admin = { permissions: string[] };
type Guest = { nickname: string };

function describeUser(user: Admin | Guest): string {
  if ("permissions" in user) {
    return user.permissions.join(", ");
  }
  return user.nickname;
}
```

Here, only `Admin` has the `permissions` property. If that property exists, TypeScript narrows `user` to `Admin`. Otherwise, it treats `user` as `Guest` and allows access to `nickname`.

## Conclusion

Type narrowing makes working with multiple types easier and safer. By using `typeof`, `instanceof`, and `in`, we can check values before accessing their properties or methods, helping prevent type-related mistakes.