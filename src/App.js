import { useState } from "react";
import "./App.css";
import WormsImage from "./assets/worms-image.png";

function App() {
  const [quote, setQuote] = useState();
  const [goodPractice, setGoodPractice] = useState();
  const generateRandomQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
  };
  const generateGoodPractice = () => {
    const random = Math.floor(Math.random() * goodPractices.length);
    setGoodPractice(goodPractices[random]);
  };

  return (
    <div style={{ padding: "4em", textAlign: "center" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      <img src={WormsImage} alt="" width="60" />
      <img src={WormsImage} alt="" width="60" />
      <img src={WormsImage} alt="" width="60" />
        <h1>Random quotes and good practice</h1>
        <img src={WormsImage} alt="" width="60" />
        <img src={WormsImage} alt="" width="60" />
        <img src={WormsImage} alt="" width="60" />
      </div>
<br />
<br />
      <button
        onClick={generateRandomQuote}
        style={{
          border: "1px solid #e7e8e9",
          minHeight: "48px",
          borderRadius: "4px",
          fontSize: "17px",
          fontWeight: "700",
          padding: "12px 16px",
          backgroundColor: "#fff",
          color: "#101928",
          cursor: "pointer",
          boxShadow: "0 4px 6px 0 rgb(16 25 40 / 10%)",
        }}
      >
        Generate quote!
      </button>
      <br />
<br />
      <br />
      {quote && (
        <blockquote style={{ fontSize: "24px", maxWidth: "600px", margin: "0 auto" }}>
          “{quote.quote}” - <i>{quote.author}</i>
        </blockquote>
      )}

<br />
      <br />
      <br />
      <br />
      <br />
      <button
        onClick={generateGoodPractice}
        style={{
          border: "1px solid #e7e8e9",
          minHeight: "48px",
          borderRadius: "4px",
          fontSize: "17px",
          fontWeight: "700",
          padding: "12px 16px",
          backgroundColor: "#fff",
          color: "#101928",
          cursor: "pointer",
          boxShadow: "0 4px 6px 0 rgb(16 25 40 / 10%)",
        }}
      >
        Generate good practice!
      </button>

      <br />
      <br />
      <br />
      {goodPractice && (
        <div style={{ fontSize: "24px", maxWidth: "600px", margin: "0 auto" }}>{goodPractice}</div>
      )}
    </div>
  );
}

export default App;

const quotes = [
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    quote: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
  },
  {
    quote: " In order to be irreplaceable, one must always be different",
    author: "Coco Chanel",
  },
  {
    quote: "Java is to JavaScript what car is to Carpet.",
    author: "Chris Heilmann",
  },
  { quote: "Knowledge is power.", author: "Francis Bacon" },
  {
    quote:
      "Sometimes it pays to stay in bed on Monday, rather than spending the rest of the week debugging Monday’s code.",
    author: "Dan Salomon",
  },
  {
    quote:
      "Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away. – Antoine",
    author: " Saint-Exupery",
  },
  { quote: "Ruby is rubbish! PHP is phpantastic!", author: "Nikita Popov" },
  {
    quote: " Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House",
  },
  { quote: "Fix the cause, not the symptom.", author: "Steve Maguire" },
  {
    quote:
      "Optimism is an occupational hazard of programming: feedback is the treatment. ",
    author: "Kent Beck",
  },
  {
    quote:
      "When to use iterative development? You should use iterative development only on projects that you want to succeed.",
    author: "Martin Fowler",
  },
  { quote: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  {
    quote: "Before software can be reusable it first has to be usable.",
    author: "Ralph Johnson",
  },
  { quote: "Make it work, make it right, make it fast.", author: "Kent Beck" },
];

const goodPractices = [
  "YAGNI: You Aint Gonna Need It. Don't write code that you think you might need in future, but don't need yet. This is coding for imaginary future use cases, and inevitably the code will become dead code or need rewriting because the future use case always turns out to work slightly differently from how you imagined it. If you put code in for a future use case, I will question it in a code review. (You can, and must, design APIs, for example, to permit future use cases, but that's a different issue.) The same is true for commenting-out code; if a block of commented code is going into a release, it shouldn't exist. If it is code that may be restored, make a ticket and reference the commit hash for the code delete. YAGNI is a core element of agile programming. The best reference for this is Extreme Programming Explained, by Kent Beck.",

  "Tests don't need testing. Infrastructure, frameworks, and libraries for testing need tests. Don't test the browser or external libraries unless you really need to. Test the code you write, not other people’s code.",

  "The third time you write the same piece of code is the right time to extract it into a general-purpose helper (and write tests for it). Helper functions within a test don't need testing; when you break them out and reuse them they do need tests. By the third time you've written similar code, you tend to have a clear idea of what shape the general-purpose problem is that you're solving.",

  "When it comes to API design (external facing and object API): Simple things should be simple; complex things should be possible. Design for the simple case first, with preferably zero configuration or parameterization, if that's possible. Add options or additional API methods for more complex and flexible use cases (as they are needed).",

  "Fail fast. Check input and fail on nonsensical input or invalid state as early as possible, preferably with an exception or error response that will make the exact problem clear to your caller. Permit innovative use cases of your code though (i.e., don't do type checking for input validation unless you really need to).",

  "Unit tests test to the unit of behavior, not the unit of implementation. Changing the implementation, without changing the behavior or having to change any of your tests is the goal, although not always possible. So where possible, treat your test objects as black boxes, testing through the public API without calling private methods or tinkering with state., For some complex scenarios—such as testing behavior on a specific complex state to find an obscure bug—that may not be possible. Writing tests first really helps with this as it forces you to think about the behavior of your code and how you're going to test it before you write it. Testing first encourages smaller, more modular units of code, which generally means better code. A good reference for getting started with the test first approach is Test Driven Development by Example, by Kent Beck.",

  "For unit tests (including test infrastructure tests) all code paths should be tested. 100% coverage is a good place to start. You can't cover all possible permutations/combinations of state (combinatorial explosion), so that requires consideration. Only if there is a very good reason should code paths be left untested. Lack of time is not a good reason and ends up costing more time. Possible good reasons include: genuinely untestable (in any meaningful way), impossible to hit in practice, or covered elsewhere in a test. Code without tests is a liability. Measuring coverage and rejecting PRs that reduce coverage percentage is one way to ensure you make gradual progress in the right direction.",

  "Code is the enemy: It can go wrong, and it needs maintenance. Write less code. Delete code. Don’t write code you don’t need.",

  "Inevitably, code comments become lies over time. In practice, few people update comments when things change. Strive to make your code readable and self-documenting through good naming practices and known programming style. Code that can't be made obvious—working around an obscure bug or unlikely condition, or a necessary optimization—does need commenting. Comment the intent of the code, and why it is doing something rather than what it is doing. (This particular point about comments being lies is controversial, by the way. I still think it’s correct, and Kernighan and Pike, authors of The Practice of Programming, agree with me.)",

  "Write defensively. Always think about what can go wrong, what will happen on invalid input, and what might fail, which will help you catch many bugs before they happen.",

  "Logic is easy to unit test if it is stateless and side-effect free. Break out logic into separate functions, rather than mixing logic into stateful and side-effect-filled code. Separating stateful code and code with side-effects into smaller functions makes them easier to mock out and unit test without side-effects. (Less overhead for tests means faster tests.) Side effects do need testing, but testing them once and mocking them out everywhere else is generally a good pattern.",

  "Globals are bad. Functions are better than types. Objects are likely to be better than complex data structures.",

  "Using the Python built-in types—and their methods—will be faster than writing your own types (unless you're writing in C). If performance is a consideration, try to work out how to use the standard built-in types rather than custom objects.",

  "Dependency injection is a useful coding pattern for being clear about what your dependencies are and where they come from. (Have objects, methods, and so on receive their dependencies as parameters rather than instantiating new objects themselves.) This does make API signatures more complex, so it is a trade-off. Ending up with a method that needs 10 parameters for all its dependencies is good sign your code is doing too much, anyway. The definitive article on dependency injection is Inversion of Control Containers and the Dependency Injection Pattern, by Martin Fowler.",

  "The more you have to mock out to test your code, the worse your code is. The more code you have to instantiate and put in place to be able to test a specific piece of behavior, the worse your code is. The goal is small testable units, along with higher-level integration and functional tests to test that the units cooperate correctly.",

  "External-facing APIs are where design up front—and consideration about future use cases—really matters. Changing APIs is a pain for us and for our users, and creating backwards incompatibility is horrible (although sometimes impossible to avoid). Design external facing APIs carefully, still keeping to the simple things should be simple principle.",

  "If a function or method goes past 30 lines of code, consider breaking it up. A good maximum module size is about 500 lines. Test files tend to be longer than this.",

  "Don’t do work in object constructors, which are hard to test and surprising. Don’t put code in __init__.py (except imports for namespacing). __init__.py is not where programmers generally expect to find code, so it’s surprising.",

  "DRY (Don’t Repeat Yourself) matters much less in tests than it does in production code. Readability of an individual test file is more important than maintainability (breaking out reusable chunks). That’s because tests are executed and read individually rather than themselves being part of a larger system. Obviously excessive repetition means reusable components can be created for convenience, but it’s much less of a concern than it is for production.",

  "Refactor whenever you see the need and have the chance. Programming is about abstractions, and the closer your abstractions map to the problem domain, the easier your code is to understand and maintain. As systems grow organically, they need to change structure for their expanding use case. Systems outgrow their abstractions and structure, and not changing them becomes technical debt that is more painful (and slower and more buggy) to work around. Include the cost of clearing technical debt (refactoring) within the estimates for feature work. The longer you leave the debt around, the higher the interest it accumulates. A great book on refactoring and testing is Working Effectively with Legacy Code, by Michael Feathers.",

  "Make code correct first and fast second. When working on performance issues, always profile before making fixes. Usually the bottleneck is not quite where you thought it was. Writing obscure code because it is faster is only worth it if you’ve profiled and proven that it’s actually worth it. Writing a test that exercises the code you’re profiling with timing around it makes knowing when you’re done easier, and can be left in the test suite to prevent performance regressions. (With the usual note that adding timing code always changes the performance characteristics of the code, making performance work one of the more frustrating tasks.)",

  "Smaller, more tightly scoped unit tests give more valuable information when they fail—they tell you specifically what is wrong. A test that stands up half the system to test behavior takes more investigation to determine what is wrong. Generally a test that takes more than 0.1 seconds to run isn’t a unit test. There’s no such thing as a slow unit test. With tightly scoped unit tests testing behavior, your tests act as a de facto specification for your code. Ideally if someone wants to understand your code, they should be able to turn to the test suite as documentation for the behavior. A great presentation on unit testing practices is Fast Test, Slow Test, by Gary Bernhardt:",

  "Not Invented Here is not as bad as people say. If we write the code, then we know what it does, we know how to maintain it, and we’re free to extend and modify it as we see fit. This follows the YAGNI principle: We have specific code for the use cases we need rather than general purpose code that has complexity for things we don’t need. On the other hand, code is the enemy, and owning more code than necessary is bad. Consider the trade-off when introducing a new dependency.",

  "Shared code ownership is the goal; siloed knowledge is bad. At a minimum, this means discussing or documenting design decisions and important implementation decisions. Code review is the worst time to start discussing design decisions as the inertia to make sweeping changes after code has been written is hard to overcome. (Of course it’s still better to point out and change design mistakes at review time than never.)",

  "Generators rock! They’re generally shorter and easier to understand than stateful objects for iteration or repeated execution. A good introduction to generators is Generator Tricks for Systems Programmers, by David Beazley.",

  "Let’s be engineers! Let’s think about design and build robust and well-implemented systems, rather than growing organic monsters. Programming is a balancing act, however. We’re not always building a rocket ship. Over-engineering (onion architecture) is as painful to work with as under-designed code. Almost anything by Robert Martin is worth reading, and Clean Architecture: A Craftsman’s Guide to Software Structure and Design is a good resource on this topic. Design Patterns is a classic programming book that every engineer should read.",

  "Intermittently failing tests erode the value of your test suite, to the point in which eventually everyone ignores test run results because there’s always something failing. Fixing or deleting intermittently failing tests is painful, but worth the effort.",

  "Generally, particularly in tests, wait for a specific change rather than sleeping for an arbitrary amount of time. Voodoo sleeps are hard to understand and slow down your test suite.",

  "Always see your test fail at least once. Put a deliberate bug in and make sure it fails, or run the test before the behavior under test is complete. Otherwise you don’t know that you’re really testing anything. Accidentally writing tests that actually don’t test anything or that can never fail is easy.",

  "And finally, a point for management: Constant feature grind is a terrible way to develop software. Not letting developers take pride in their work ensures you won’t get the best out of them. Not addressing technical debt slows down development and results in a worse, more buggy product.",
];
