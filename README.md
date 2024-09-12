# Inheritance and Delegation

This repository is set up for discussion on relative strengths and weaknesses of 
`inheritance` and `delegation` in 17214 24 fall recitation 03.

The handout can be found at: [https://github.com/CMU-17-214/f2024/blob/main/labs/lab03.md](https://github.com/CMU-17-214/f2024/blob/main/labs/lab03.md)

### Solution to Task3 - Evaluate your two implementations for the given problem and answer the following questions:

##### 1. Which is more dependent on the implementation details of the SortedIntList, delegation or inheritance?
Answer: Inheritance. Since inheritance utilizes super() to invoke its superclass's functions.
##### 2. If the add method in SortedIntList is significantly modified or its behavior changes, which implementation is more likely to break?
Answer: Inheritance is likely to break because it has a tighter coupling with class SortedIntList. If the pre-conditions made by superclasses are changed, inheritance might not work well.
##### 3. What issues does using delegation solve that might have been problematic with inheritance?
Answer: It decouples the tight relationship with inheritance and reduces the complexity when using inheritance.
##### 4. Based on the provided implementations, when would it be more appropriate to use inheritance and when to use delegation?
Answer: If the classes are logically tightly related, complies to a "is-a" relationship and needs tight coupling, use inheritance. If the classes needs a "has-a" relationship and needs loose coupling, use delegation.
