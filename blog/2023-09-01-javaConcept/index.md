---
slug: interview
title: Java Questions
authors: [chenranj]
---


1. **What are the design patterns used in the Spring framework?**

   I have used factory design pattern, singleton design pattern, dynamic proxy, builder design pattern, prototype design pattern, template design pattern, etc. May need explain the definiation of these concept.

2. **What are the two features in Spring?**

   IoC (Inversion of Control) and AOP (Aspect Oriented Programming).

   IoC in Spring Boot provides the Spring context which is also known as Spring IoC container. The container contains all objects and instance that we created. We can use @Autowired to use our instance, we don't need to worry about to create or manage our instance.
   
   Spring AOP enables Aspect-Oriented programming in spring application.AOP provides the way to dynamically add the cross-cutting concern before, after or around the actual logic using simple pluggable configurations. And it will make easy to maintain code in the present and future as well. 
   
3. **What is the advantage for spring boot?**

   - IoC and AOP
   - Auto configuration for our projects
   - We don't need to package our code to jar file and deploy it to a tomcat server. Spring boot will handle these thing for us.
   - Easy to setup the micro services. Actuator can provide some endpoint that ready to use, and monitor our application.

4. **Spring boot v.s. Spring MVC**

   Spring boot is a Spring-based framework that hides a lot of complexity behind the scene so that the developer can quickly get started and develop Spring-based application. But Spring MVC is a model-view-controller-based web framework under the Spring Framework.

   SB is no need to build configuration manually, but SMVC requires. SB can reduce development time and increase productivity, but SMVC takes more time to achieve the same.

5. **What is singleton and why do we use Singleton?**

   A singleton class only contains a single object. We can reuse this single object to reduce the memory usage. 

6. **How do you handle exceptions in your project?**

   I used try/catch/finally block. We can also create a global exception handler.

7. **What is JoinPoint?**

   JoinPoint is a candidate point the program execution of the application where an aspect can be plugged in. This point could be a method being called, an exception being shown, or even a field being modified.

8. **What is PointCut?**

   Pointcut defines at what JoinPoint, the associated advice should be applied. Advice can be applied at any JoinPoint supported by the AOP framework. We use `@PointCut` to specify that where do we want to add our aspect code.

   ![enter image description here](https://i.stack.imgur.com/J7Hrh.png)

9. **What does `@Controller` do in Spring Boot?**

   This annotation is to tell Spring Boot that this class is a Control that it is part of Bean.

10. **What does `@RestController` do in Spring Boot?**

   `@RestController` combines the `@Controller` class and response body to reduce some code. 

11. **Eager loading v.s. lazy loading**

    Lazy loading is we initialize some object, we won't initialize it immediately, we will initialize it when we use it. If we don't call the function or method, that the lazy loading object won't be initialized.

    But in Spring, we use Eager loading by default unless we change it to lazy loading . Everything will be loaded when the application start. 

12. **Spring IoC**

    Spring container will create and manage the object and the relationship between these object. The object can focus on the business logic.

13. **Java is pass by value**

    Java is pass by value, and value is copy of the reference of object. Which still points to the object.

14. **What kind of HTTP method do you know?**

    GET / POST / PUT / DELETE / UPDATE

15. **Which one is idempotent?**

    GET, PUT, and DELETE are idempotent. Idempotent means that the result will not be change base on the number of request that clients called.

16. **Spring bean scope**

    Singleton, prototype, Request, session, application, webSocket used for bean in the web application.

17. **Singleton v.s. prototype**

    Singleton means single bean definition to a single object per Spring IoC container. The same object is returned each time it is injected/looked up.

    Prototype means a single bean definition to any number of object instance. A new object is created each time it is injected/looked up.

18. **Actuator advantages**

    Actuator module allows us to monitor and manage application usage in production environment, without coding and configuration for any of them. It provides a lot of endpoints that let us easy to access.

19. **Java 8 new features**

    - Stream api: save time to achieve chain operation.
    - Optional object: save time for writing a lot of code to check the null pointer.
    - Functional interface: Multi-threading Runnable and Callable interface.
    - Lambda expression: Can replace the anonymous class and make the code easy to read. 
    -  interface can have static and default method.

20. **What is Optional?**

    Option is a container object that may or may not contains a null value object. Without writing too much checking code for null value object. We can use `.of()`, `.ofNullable()`, `isPresent()`

21. **What is default?**

    It is access modifier. If we do not provide the access modifier like `public` or `private`, access modifier will be `default`. All the class and methods in the same package can call the method.

22. **OOP concept**

    - Polymorphism: Allow us to perform a single action in different ways. I.e. method overriding, method overloading, and Upcasting... ~~A different can share a same method but do the difference actions for each object. It need all these class implement from a same class.~~
    - Abstraction
    - Inheritance: A class can inherits all features, functions and properties from another class that can save a lot of time to write duplicate code.
    - Encapsulation: We don't need to mind how does a function work in a action of the object, multiple actions can be encapsulated in a single method that ready to use.

23. **What is thread pool and why do we use thread pool?**

    Create and destroy a huge number of thread will take a lot of time and memory. A thread pool contains a group of worker thread that waiting for the job and reused many times. For a better performance, thread pool saves time because there is no need to create a new thread.

    - Single thread pool
    - Cache thread pool
    - Fixed thread pool
    - ...

24. **Polymorphism v.s. inheritance**

    Inheritance can let a class inherit all features from other class to maintain the code reusability.

    Polymorphism means a class can have multiple form of way to run a method.

25. **What is daemon thread**

    Daemon thread is something like run in the background. i.e. Garbage Collection.

26. **Heap v.s. stack in JVM**

    Stack memory in java is used for static memory allocation and execution of a thread. And it also contains primitive type values.

    Heap is used for dynamic memory allocation of the java object. When we create a new object, the object will store in a heap space, but the reference to this object will store in the stack memory.

27. **How does Garbage Collection work?**

    Heap memory model, creation flow.

28. **Can we force Garbage Collection?**

    No, we can only provide advice to JVM, and we can never know if JVM takes our advice.

29. **How to keep thread safe?**

    CAS, Synchronized, Atomic Library, Reentrant lock and Threadsafe Collection(i.e. Concurrent HashMap, HashTable...) can keep the threads safe.

30. **Which one will you choose to keep thread safe?**

    Described above.

31. **Coding: implementation of singleton**

    ``` java
    public class Singleton {
        private volatile static Singleton singleton;
      	
    	// Constructor    
        private Singleton() {}
      	
        // The only gateway to access the object
      	public static Singleton getInstance() {
          	if (singleton == null) {
                // Thread safe
                Synchronized (Singleton.class) {
                    if (singleton == null) {
                        singleton = new Singleton();
                    }
                }
            }
            return singleton;
        }
    }
    ```

32. **Why static in singleton?**

    The `getInstance()` method should be static, and therefore the singleton instance should also be static too, because we cannot refer to a non-static variable inside a static method.

33. **Why volatile in singleton?**

    Volatile provides us visibility, other thread has visibility to see if other thread has created the object or not.

34. **Why private constructor?**

    We don't want to other method or function create a new instance for the singleton class.

35. **JDBC v.s. ORM (Object Relational Mapping)**

    - ORM uses annotations to connect the object with database entity.
    - ORM reduces some code.
    - ORM can reuse the connection. 
    - ORM has first level and second level cache.

    JDBC: Java Database Connectivity

    - Cannot convert the entity in database to java object.
    - Need to hard code some queries if we change some function.
    - Fetch info -> load driver -> create connection -> build query -> get result.

36. **Java Collection**

    I have used various of java collections like:

    - Map: HashMap, TreeMap, Concurrent HashMap, Linked hashMap
    - List: LinkedList, ArrayList
    - Set: HashSet, TreeSet
    - Queue

37. **SQL Injection**

    User may give some input that may trigger some backend function. Like input drop table command in username or password field.  Or like: `xxx;--`.

    **How to prevent:**

    - Check user input first if the text contains some special symbols. If so, drop the queries.
    - Parametrized queries. Use some pre-compiled SQL queries. The text will be quoted before used in command.

38. **When will we prefer to use relational database / non-relational database? (Difference between no-SQL and RDBMS)**

    - RDBMS has the fixed schema and you have to design the tables. no-SQL has the dynamic schema based on our code.

    - No-SQL is really good at horizontal scaling. RDBMS is good at vertical scaling. 

    - RDBMS has **A**(atomicity)**C**(consistency)**I**(isolation)**D**(durability) feature,

        but for no-SQL we have **C**(consistency)**A**(availability)**P**(partition tolerance). 

39. **Have you ever use some noSQL database? How does MangoDB and Cassandra works?**

    I have used no-SQL database like mangoDB. MangoDB provides good data consistency. 

40. **How is HashMap Implemented?**

    HasMap is not synchronized and it's fast. The HashMap based on the hashing concept. When it uses `put()` to pass the key and value, it will get the hash code of its key by using `hashCode()` method. And make the hash code as the bucket location to store the `Map.Entry`.

    If multiple object has same hash code, it will create a linked list to store these objects. And when we use `get()` method, it will located the bucket by get it hash code and use `keys.equals()` to find the right entry in that linked list.

    If the size of the HashMap is larger than the load factor, the default load factor is .75, which if a map is 75% filled, it will create a doubled size map and moved all objects to the new bucket, which is called **rehashing**.

41. **How to put customized Employee object as a key in HashMap?**

    Rewrite equals() function and hashCode() function.  

42. **Map() v.s. flatMap()**

    Map() function produces one output for one input value, whereas flatMap() function produces an arbitrary number of values as output (i.e. zero or more than zero) for each input value.

    When we have a list of list, we can use flatMap() flat it to a list.

43. **What is a good API?**

    - A good API should have simple URL
    - A good API  should reuse the URL as possible
    - A good API  should use the correct HTTP method and status code
    - A good API has great error handling
    - A good API is gentle with newbies and empowers experienced users
    - A good API is a secure gateway that unauthorized user cannot access.
    - A good API has good documentation that easy to read.
    - A good API has good fail tolerance.
    - ...

44. **What status code do you know?**

    - 1xx: Information Responses

    - 2xx: Successful Responses: `200 OK`, `202 Created`, ...
    - 3xx: Redirection Messages: `301 Moved Permanently`
    - 4xx: Client Error Responses: `400 Bad Request`, `403 Forbidden`, `404 Not Found`, ...
    - 5xx: Server Error Responses: `500 Internal Server Error`, `502 Bad Gateway`, ...

45. **If your teammate and you have difference opinions, what will you do?**

    I will ask the senior engineer opinion after having a discussion with the teammate. If it's still not decided yet, I will talk to team leader for the advice. If team leader cannot give a advice, I will schedule a meeting with our PM to make sure the everything goes right.

46. **How do we share data cross threads?**

    Use `volatile` with `synchronized` block to ensure the data can be shared cross thread safety.

    `AtomicLibrary`

47. **How do you scale an application?**

    Frontend: cache make same request retrieve once to database to lower the pressure.

    Backend: horizontal Scaling to deploy more nodes for the service.

    Split service in different small services in micro-services.

    Database: sharding, message queue, read/write node.

48. **What is Kafka?**

    Kafka is open sourced distributed streaming platform. And I can split queue to different partition for horizontal scaling. 

49. **What is correlation id, why do we need it?**

    This a unique ID that we can understand it as a UUID. The correlation id defined by client side and send it to server side. The server will also return this id to client side when it response to client, that make request and response matches.

50. **Build a micro-services**

    - We need to provide some security service, like token
    - Msg queue
    - Centralized lock services
    - Circuit braker
    - Discovery service like Eureka.
    - Gateway service
    - Load balancer

51. **Monolithic v.s. Micro-services**

    Monolithic:

    - it is easy to design and develop
    - We cannot use RestAPI
    - Hard to maintain the application in the team
    - Lower fail tolerance
    - Cannot use message queue and achieve asynchronies

    Micro-services: 

    - Make you application deployment and development more flexible and loose coupling
    - Easy to debug and find out the error
    - Has better fail tolerance
    - We can use message queue to achieve  asynchronies
    - We can use different platform and language to build the application
    - We have to carefully design our service boundaries. Follow the DDD

52. **How to improve query performance (RDBMS)**

    - Add cache
    - Change the execution plan
    - Index type
    - Normalization + table design
    - Isolation level
    - Scaling the database 
    
53. **How to create thread safe singleton class?**

    - We Create the private constructor to avoid any new object creation with new operator.
    - Declare a private static instance of the same class.
    - Provide a public static method that will return the singleton class instance variable.
    - Add `synchronized` lock when we create the instance.

54. **What is the difference between Callable and Runnable?**

    - Runnable doesn't return a result and Callable return a result.
    - Runnable object cannot throw a checked exception but Callable can throw a exception.

55. **What is the difference between PUT and PATCH?**

    PUT updates the entire resource but PATCH will sends partial data that is to be updated without modifying the entire data.

56. **What is the difference between biConsumer and biFunction?**

    Both can take two parameters but biFunction can return a result to the flow.

57. **how does spring redirect request to controller dispatch servlet?**

    ![SpringMVC](https://www.baeldung.com/wp-content/uploads/2016/08/SpringMVC.png)

    The client sends request to dispatcher servlet and servlet will forward request to handler mapper to find the mapped controller.

58. **How does spring load controller?**

    It uses `@Requestmapping` annotation or Spring MVC configuration file to find out the mapping of the request URL to different controller.

59. **CI/CD tools**

    Jenkins is an open source automation server. It helps automate the parts of our application related to building, testing, and deploying, facilitating CI and CD.
