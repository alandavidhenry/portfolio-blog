---
layout: layouts/post.njk
title: The SOLID Principles
featuredImage: /images/uploads/solid.jpg
date: 2023-12-10T09:30:00.000Z
description: SOLID is a set of five object-oriented design principles aimed at
  making software designs more understandable, flexible, and maintainable.
---
## SOLID
- Single Responsibility Principle (SRP)
- Open-Closed Principle (OCP)
- Liskov Substitution Principle (LSP)
- Interface Segregation Principle (ISP)
- Dependency Inversion Principle (DIP)

## Single Responsibility Principle (SRP)

**A class should have only one reason to change.**

Example: A Restaurant class. Instead of handling orders, cooking, and billing all in one class, split these into separate classes: OrderManager, Kitchen, and BillingSystem. This way, changes to the billing process don't affect how orders are managed or food is prepared.

In this code, a class is created for each process in the restaurant. 

```js
class OrderManager {
  placeOrder(order) {
    console.log(`Order placed: ${order}`);
  }
}

class Kitchen {
  prepareFood(order) {
    console.log(`Preparing: ${order}`);
  }
}

class BillingSystem {
  generateBill(order) {
    console.log(`Bill for: ${order}`);
    return Math.floor(Math.random() * 100) + 20;
  }
}

const orderManager = new OrderManager();
const kitchen = new Kitchen();
const billingSystem = new BillingSystem();

orderManager.placeOrder("Pizza");
kitchen.prepareFood("Pizza");
const bill = billingSystem.generateBill("Pizza");
```

## Open-Closed Principle (OCP)

**Software entities should be open for extension but closed for modification.**

Example: A payment processing system that can handle credit cards. To add support for PayPal, you create a new PayPalProcessor class that implements a common PaymentProcessor interface, rather than modifying the existing CreditCardProcessor class.

In this code, the base payment processor class is extended by both the credit card processor and the PayPal processor to create two new classes without modifying the original payment processor class.

```js
class PaymentProcessor {
  processPayment(amount) {}
}

class CreditCardProcessor extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing $${amount} via Credit Card`);
  }
}

class PayPalProcessor extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing $${amount} via PayPal`);
  }
}

function checkout(processor, amount) {
  processor.processPayment(amount);
}

checkout(new CreditCardProcessor(), 100);
checkout(new PayPalProcessor(), 50);
```

## Liskov Substitution Principle (LSP)

**Objects of a superclass should be replaceable with objects of its subclasses without breaking the application.**

Example: In a drawing application, you have a Shape class with subclasses like Circle and Square. You should be able to use any Shape subclass wherever a Shape is expected, without causing errors or unexpected behavior.

```js
class Shape {
  draw() {}
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing a square");
  }
}

function renderShape(shape) {
  shape.draw();
}

renderShape(new Circle());
renderShape(new Square());
```

## Interface Segregation Principle (ISP)

**Many client-specific interfaces are better than one general-purpose interface.**

Example: Instead of a single Worker interface with methods for all possible jobs, create separate interfaces like Cashier, Stocker, and Manager. This way, employees only need to implement the interfaces relevant to their roles.

```js
class Cashier {
  processPayment() {
    console.log("Processing payment");
  }
}

class Stocker {
  restockShelves() {
    console.log("Restocking shelves");
  }
}

class Manager {
  manageTasks() {
    console.log("Managing tasks");
  }
}

// A full-time employee might implement multiple interfaces
class FullTimeEmployee {
  constructor() {
    Object.assign(this, new Cashier(), new Stocker());
  }
}

const fullTimer = new FullTimeEmployee();
fullTimer.processPayment();
fullTimer.restockShelves();
```

## Dependency Inversion Principle (DIP)

**High-level modules should not depend on low-level modules. Both should depend on abstractions.**

Example: A notification system in an app shouldn't directly depend on specific notification methods (email, SMS, push notification). Instead, it should depend on a general NotificationService interface, allowing easy addition or modification of notification methods without changing the core notification logic.

```js
class NotificationService {
  constructor(notifier) {
    this.notifier = notifier;
  }

  sendNotification(message) {
    this.notifier.send(message);
  }
}

class EmailNotifier {
  send(message) {
    console.log(`Sending email: ${message}`);
  }
}

class SMSNotifier {
  send(message) {
    console.log(`Sending SMS: ${message}`);
  }
}

class PushNotifier {
  send(message) {
    console.log(`Sending push notification: ${message}`);
  }
}

// Usage
const emailNotificationService = new NotificationService(new EmailNotifier());
const smsNotificationService = new NotificationService(new SMSNotifier());
const pushNotificationService = new NotificationService(new PushNotifier());

emailNotificationService.sendNotification("Hello via email");
smsNotificationService.sendNotification("Hello via SMS");
pushNotificationService.sendNotification("Hello via push notification");
```

## Further reading
[Why SOLID principles are still the foundation for modern software architecture (Stack Overflow)](https://stackoverflow.blog/2021/11/01/why-solid-principles-are-still-the-foundation-for-modern-software-architecture/)

[The SOLID Principles of Object-Oriented Programming Explained in Plain English (Free Code Camp)](https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/)
