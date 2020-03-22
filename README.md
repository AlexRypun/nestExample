# nestExample

In this example, a user module is implemented according to Nest.js philosophy. There are a few core elements: module, controller, service, entity, dtos, decorator, interceptor.

A `Module` class sets providers that are used from within the current module, imported and exported modules.

A `Controller` contains route handlers for retrieving user by id and for user updating.

A `Service` is a provider of functions (signIn, signUp, getUser, and updateUser). It's used as a dependency in the controller and other providers.

An `Entity` is a `TypeORM` object that represents the user data (many-to-many relationship is used).

Two `DTOs` (Data Transfer Object) are objects that define how the data will be sent over the network in case of the user creating and updating (used for validation).

Custom `Decorator` is used for additional validation on email existence.

An `Interceptor` is used for manipulating with a request before validation.

Inheritance, encapsulation, dependency injections, decorators, typing are used in this code example. 
