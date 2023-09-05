"use strict";(self.webpackChunkalgo=self.webpackChunkalgo||[]).push([[440],{2145:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"interview","metadata":{"permalink":"/build/blog/interview","source":"@site/blog/2023-09-01-javaConcept/index.md","title":"Java Questions","description":"1. What are the design patterns used in the Spring framework?","date":"2023-09-01T00:00:00.000Z","formattedDate":"September 1, 2023","tags":[],"readingTime":13,"hasTruncateMarker":false,"authors":[{"name":"Chenran J","title":"jinchenran@muncs.org","url":"https://jin.cr","imageURL":"https://media.licdn.com/dms/image/D4E03AQGbWcF7zBrDrw/profile-displayphoto-shrink_800_800/0/1693490391231?e=1699488000&v=beta&t=c4N6ihD2IqvfSQdh4QFxj_T4Ax39gH7lLaQytGF1oMQ","key":"chenranj"}],"frontMatter":{"slug":"interview","title":"Java Questions","authors":["chenranj"]}},"content":"1. **What are the design patterns used in the Spring framework?**\\n\\n   I have used factory design pattern, singleton design pattern, dynamic proxy, builder design pattern, prototype design pattern, template design pattern, etc. May need explain the definiation of these concept.\\n\\n2. **What are the two features in Spring?**\\n\\n   IoC (Inversion of Control) and AOP (Aspect Oriented Programming).\\n\\n   IoC in Spring Boot provides the Spring context which is also known as Spring IoC container. The container contains all objects and instance that we created. We can use @Autowired to use our instance, we don\'t need to worry about to create or manage our instance.\\n   \\n   Spring AOP enables Aspect-Oriented programming in spring application.AOP provides the way to dynamically add the cross-cutting concern before, after or around the actual logic using simple pluggable configurations. And it will make easy to maintain code in the present and future as well. \\n   \\n3. **What is the advantage for spring boot?**\\n\\n   - IoC and AOP\\n   - Auto configuration for our projects\\n   - We don\'t need to package our code to jar file and deploy it to a tomcat server. Spring boot will handle these thing for us.\\n   - Easy to setup the micro services. Actuator can provide some endpoint that ready to use, and monitor our application.\\n\\n4. **Spring boot v.s. Spring MVC**\\n\\n   Spring boot is a Spring-based framework that hides a lot of complexity behind the scene so that the developer can quickly get started and develop Spring-based application. But Spring MVC is a model-view-controller-based web framework under the Spring Framework.\\n\\n   SB is no need to build configuration manually, but SMVC requires. SB can reduce development time and increase productivity, but SMVC takes more time to achieve the same.\\n\\n5. **What is singleton and why do we use Singleton?**\\n\\n   A singleton class only contains a single object. We can reuse this single object to reduce the memory usage. \\n\\n6. **How do you handle exceptions in your project?**\\n\\n   I used try/catch/finally block. We can also create a global exception handler.\\n\\n7. **What is JoinPoint?**\\n\\n   JoinPoint is a candidate point the program execution of the application where an aspect can be plugged in. This point could be a method being called, an exception being shown, or even a field being modified.\\n\\n8. **What is PointCut?**\\n\\n   Pointcut defines at what JoinPoint, the associated advice should be applied. Advice can be applied at any JoinPoint supported by the AOP framework. We use `@PointCut` to specify that where do we want to add our aspect code.\\n\\n   ![enter image description here](https://i.stack.imgur.com/J7Hrh.png)\\n\\n9. **What does `@Controller` do in Spring Boot?**\\n\\n   This annotation is to tell Spring Boot that this class is a Control that it is part of Bean.\\n\\n10. **What does `@RestController` do in Spring Boot?**\\n\\n   `@RestController` combines the `@Controller` class and response body to reduce some code. \\n\\n11. **Eager loading v.s. lazy loading**\\n\\n    Lazy loading is we initialize some object, we won\'t initialize it immediately, we will initialize it when we use it. If we don\'t call the function or method, that the lazy loading object won\'t be initialized.\\n\\n    But in Spring, we use Eager loading by default unless we change it to lazy loading . Everything will be loaded when the application start. \\n\\n12. **Spring IoC**\\n\\n    Spring container will create and manage the object and the relationship between these object. The object can focus on the business logic.\\n\\n13. **Java is pass by value**\\n\\n    Java is pass by value, and value is copy of the reference of object. Which still points to the object.\\n\\n14. **What kind of HTTP method do you know?**\\n\\n    GET / POST / PUT / DELETE / UPDATE\\n\\n15. **Which one is idempotent?**\\n\\n    GET, PUT, and DELETE are idempotent. Idempotent means that the result will not be change base on the number of request that clients called.\\n\\n16. **Spring bean scope**\\n\\n    Singleton, prototype, Request, session, application, webSocket used for bean in the web application.\\n\\n17. **Singleton v.s. prototype**\\n\\n    Singleton means single bean definition to a single object per Spring IoC container. The same object is returned each time it is injected/looked up.\\n\\n    Prototype means a single bean definition to any number of object instance. A new object is created each time it is injected/looked up.\\n\\n18. **Actuator advantages**\\n\\n    Actuator module allows us to monitor and manage application usage in production environment, without coding and configuration for any of them. It provides a lot of endpoints that let us easy to access.\\n\\n19. **Java 8 new features**\\n\\n    - Stream api: save time to achieve chain operation.\\n    - Optional object: save time for writing a lot of code to check the null pointer.\\n    - Functional interface: Multi-threading Runnable and Callable interface.\\n    - Lambda expression: Can replace the anonymous class and make the code easy to read. \\n    -  interface can have static and default method.\\n\\n20. **What is Optional?**\\n\\n    Option is a container object that may or may not contains a null value object. Without writing too much checking code for null value object. We can use `.of()`, `.ofNullable()`, `isPresent()`\\n\\n21. **What is default?**\\n\\n    It is access modifier. If we do not provide the access modifier like `public` or `private`, access modifier will be `default`. All the class and methods in the same package can call the method.\\n\\n22. **OOP concept**\\n\\n    - Polymorphism: Allow us to perform a single action in different ways. I.e. method overriding, method overloading, and Upcasting... ~~A different can share a same method but do the difference actions for each object. It need all these class implement from a same class.~~\\n    - Abstraction\\n    - Inheritance: A class can inherits all features, functions and properties from another class that can save a lot of time to write duplicate code.\\n    - Encapsulation: We don\'t need to mind how does a function work in a action of the object, multiple actions can be encapsulated in a single method that ready to use.\\n\\n23. **What is thread pool and why do we use thread pool?**\\n\\n    Create and destroy a huge number of thread will take a lot of time and memory. A thread pool contains a group of worker thread that waiting for the job and reused many times. For a better performance, thread pool saves time because there is no need to create a new thread.\\n\\n    - Single thread pool\\n    - Cache thread pool\\n    - Fixed thread pool\\n    - ...\\n\\n24. **Polymorphism v.s. inheritance**\\n\\n    Inheritance can let a class inherit all features from other class to maintain the code reusability.\\n\\n    Polymorphism means a class can have multiple form of way to run a method.\\n\\n25. **What is daemon thread**\\n\\n    Daemon thread is something like run in the background. i.e. Garbage Collection.\\n\\n26. **Heap v.s. stack in JVM**\\n\\n    Stack memory in java is used for static memory allocation and execution of a thread. And it also contains primitive type values.\\n\\n    Heap is used for dynamic memory allocation of the java object. When we create a new object, the object will store in a heap space, but the reference to this object will store in the stack memory.\\n\\n27. **How does Garbage Collection work?**\\n\\n    Heap memory model, creation flow.\\n\\n28. **Can we force Garbage Collection?**\\n\\n    No, we can only provide advice to JVM, and we can never know if JVM takes our advice.\\n\\n29. **How to keep thread safe?**\\n\\n    CAS, Synchronized, Atomic Library, Reentrant lock and Threadsafe Collection(i.e. Concurrent HashMap, HashTable...) can keep the threads safe.\\n\\n30. **Which one will you choose to keep thread safe?**\\n\\n    Described above.\\n\\n31. **Coding: implementation of singleton**\\n\\n    ``` java\\n    public class Singleton {\\n        private volatile static Singleton singleton;\\n      \\t\\n    \\t// Constructor    \\n        private Singleton() {}\\n      \\t\\n        // The only gateway to access the object\\n      \\tpublic static Singleton getInstance() {\\n          \\tif (singleton == null) {\\n                // Thread safe\\n                Synchronized (Singleton.class) {\\n                    if (singleton == null) {\\n                        singleton = new Singleton();\\n                    }\\n                }\\n            }\\n            return singleton;\\n        }\\n    }\\n    ```\\n\\n32. **Why static in singleton?**\\n\\n    The `getInstance()` method should be static, and therefore the singleton instance should also be static too, because we cannot refer to a non-static variable inside a static method.\\n\\n33. **Why volatile in singleton?**\\n\\n    Volatile provides us visibility, other thread has visibility to see if other thread has created the object or not.\\n\\n34. **Why private constructor?**\\n\\n    We don\'t want to other method or function create a new instance for the singleton class.\\n\\n35. **JDBC v.s. ORM (Object Relational Mapping)**\\n\\n    - ORM uses annotations to connect the object with database entity.\\n    - ORM reduces some code.\\n    - ORM can reuse the connection. \\n    - ORM has first level and second level cache.\\n\\n    JDBC: Java Database Connectivity\\n\\n    - Cannot convert the entity in database to java object.\\n    - Need to hard code some queries if we change some function.\\n    - Fetch info -> load driver -> create connection -> build query -> get result.\\n\\n36. **Java Collection**\\n\\n    I have used various of java collections like:\\n\\n    - Map: HashMap, TreeMap, Concurrent HashMap, Linked hashMap\\n    - List: LinkedList, ArrayList\\n    - Set: HashSet, TreeSet\\n    - Queue\\n\\n37. **SQL Injection**\\n\\n    User may give some input that may trigger some backend function. Like input drop table command in username or password field.  Or like: `xxx;--`.\\n\\n    **How to prevent:**\\n\\n    - Check user input first if the text contains some special symbols. If so, drop the queries.\\n    - Parametrized queries. Use some pre-compiled SQL queries. The text will be quoted before used in command.\\n\\n38. **When will we prefer to use relational database / non-relational database? (Difference between no-SQL and RDBMS)**\\n\\n    - RDBMS has the fixed schema and you have to design the tables. no-SQL has the dynamic schema based on our code.\\n\\n    - No-SQL is really good at horizontal scaling. RDBMS is good at vertical scaling. \\n\\n    - RDBMS has **A**(atomicity)**C**(consistency)**I**(isolation)**D**(durability) feature,\\n\\n        but for no-SQL we have **C**(consistency)**A**(availability)**P**(partition tolerance). \\n\\n39. **Have you ever use some noSQL database? How does MangoDB and Cassandra works?**\\n\\n    I have used no-SQL database like mangoDB. MangoDB provides good data consistency. \\n\\n40. **How is HashMap Implemented?**\\n\\n    HasMap is not synchronized and it\'s fast. The HashMap based on the hashing concept. When it uses `put()` to pass the key and value, it will get the hash code of its key by using `hashCode()` method. And make the hash code as the bucket location to store the `Map.Entry`.\\n\\n    If multiple object has same hash code, it will create a linked list to store these objects. And when we use `get()` method, it will located the bucket by get it hash code and use `keys.equals()` to find the right entry in that linked list.\\n\\n    If the size of the HashMap is larger than the load factor, the default load factor is .75, which if a map is 75% filled, it will create a doubled size map and moved all objects to the new bucket, which is called **rehashing**.\\n\\n41. **How to put customized Employee object as a key in HashMap?**\\n\\n    Rewrite equals() function and hashCode() function.  \\n\\n42. **Map() v.s. flatMap()**\\n\\n    Map() function produces one output for one input value, whereas flatMap() function produces an arbitrary number of values as output (i.e. zero or more than zero) for each input value.\\n\\n    When we have a list of list, we can use flatMap() flat it to a list.\\n\\n43. **What is a good API?**\\n\\n    - A good API should have simple URL\\n    - A good API  should reuse the URL as possible\\n    - A good API  should use the correct HTTP method and status code\\n    - A good API has great error handling\\n    - A good API is gentle with newbies and empowers experienced users\\n    - A good API is a secure gateway that unauthorized user cannot access.\\n    - A good API has good documentation that easy to read.\\n    - A good API has good fail tolerance.\\n    - ...\\n\\n44. **What status code do you know?**\\n\\n    - 1xx: Information Responses\\n\\n    - 2xx: Successful Responses: `200 OK`, `202 Created`, ...\\n    - 3xx: Redirection Messages: `301 Moved Permanently`\\n    - 4xx: Client Error Responses: `400 Bad Request`, `403 Forbidden`, `404 Not Found`, ...\\n    - 5xx: Server Error Responses: `500 Internal Server Error`, `502 Bad Gateway`, ...\\n\\n45. **If your teammate and you have difference opinions, what will you do?**\\n\\n    I will ask the senior engineer opinion after having a discussion with the teammate. If it\'s still not decided yet, I will talk to team leader for the advice. If team leader cannot give a advice, I will schedule a meeting with our PM to make sure the everything goes right.\\n\\n46. **How do we share data cross threads?**\\n\\n    Use `volatile` with `synchronized` block to ensure the data can be shared cross thread safety.\\n\\n    `AtomicLibrary`\\n\\n47. **How do you scale an application?**\\n\\n    Frontend: cache make same request retrieve once to database to lower the pressure.\\n\\n    Backend: horizontal Scaling to deploy more nodes for the service.\\n\\n    Split service in different small services in micro-services.\\n\\n    Database: sharding, message queue, read/write node.\\n\\n48. **What is Kafka?**\\n\\n    Kafka is open sourced distributed streaming platform. And I can split queue to different partition for horizontal scaling. \\n\\n49. **What is correlation id, why do we need it?**\\n\\n    This a unique ID that we can understand it as a UUID. The correlation id defined by client side and send it to server side. The server will also return this id to client side when it response to client, that make request and response matches.\\n\\n50. **Build a micro-services**\\n\\n    - We need to provide some security service, like token\\n    - Msg queue\\n    - Centralized lock services\\n    - Circuit braker\\n    - Discovery service like Eureka.\\n    - Gateway service\\n    - Load balancer\\n\\n51. **Monolithic v.s. Micro-services**\\n\\n    Monolithic:\\n\\n    - it is easy to design and develop\\n    - We cannot use RestAPI\\n    - Hard to maintain the application in the team\\n    - Lower fail tolerance\\n    - Cannot use message queue and achieve asynchronies\\n\\n    Micro-services: \\n\\n    - Make you application deployment and development more flexible and loose coupling\\n    - Easy to debug and find out the error\\n    - Has better fail tolerance\\n    - We can use message queue to achieve  asynchronies\\n    - We can use different platform and language to build the application\\n    - We have to carefully design our service boundaries. Follow the DDD\\n\\n52. **How to improve query performance (RDBMS)**\\n\\n    - Add cache\\n    - Change the execution plan\\n    - Index type\\n    - Normalization + table design\\n    - Isolation level\\n    - Scaling the database \\n    \\n53. **How to create thread safe singleton class?**\\n\\n    - We Create the private constructor to avoid any new object creation with new operator.\\n    - Declare a private static instance of the same class.\\n    - Provide a public static method that will return the singleton class instance variable.\\n    - Add `synchronized` lock when we create the instance.\\n\\n54. **What is the difference between Callable and Runnable?**\\n\\n    - Runnable doesn\'t return a result and Callable return a result.\\n    - Runnable object cannot throw a checked exception but Callable can throw a exception.\\n\\n55. **What is the difference between PUT and PATCH?**\\n\\n    PUT updates the entire resource but PATCH will sends partial data that is to be updated without modifying the entire data.\\n\\n56. **What is the difference between biConsumer and biFunction?**\\n\\n    Both can take two parameters but biFunction can return a result to the flow.\\n\\n57. **how does spring redirect request to controller dispatch servlet?**\\n\\n    ![SpringMVC](https://www.baeldung.com/wp-content/uploads/2016/08/SpringMVC.png)\\n\\n    The client sends request to dispatcher servlet and servlet will forward request to handler mapper to find the mapped controller.\\n\\n58. **How does spring load controller?**\\n\\n    It uses `@Requestmapping` annotation or Spring MVC configuration file to find out the mapping of the request URL to different controller.\\n\\n59. **CI/CD tools**\\n\\n    Jenkins is an open source automation server. It helps automate the parts of our application related to building, testing, and deploying, facilitating CI and CD."}]}')}}]);