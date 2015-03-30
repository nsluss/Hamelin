# Hamelin
Functional Programming for JavaScript: the piper's tune shall lead you to a land of fantasy.

# PLANNED CONTENT

- Audience

  - What juniors are thinking right now (week 2)
    - How to succeed at Hack Reactor
    - Loops, loops, and more loops
    - Data structures
    - Instantiation methods
    - Object.create
    - Call, apply, bind
    - Wtf is JQuery/D3? slash, how do I relate all this HTML/CSS to all these JS objects?
    - What did they make me do all that Underbar rigamarole for?

  - What seniors are thinking right now (week 9)
    - Imaginative thesis project ideas
    - Limit of JavaScript, comparison to other languages
    - Making sense of sprint weeks
    - Making sense of mvp, greenfield, legacy
      - What could have been done better?
      - How could legacy code have been easier to maintain?
    - Job search

- Framing

  - What is FP?
    - Value of everything
    - PT
    - Verb-based programming
      - Your high school English teacher told you to write with verbs - it makes for strong, descriptive sentences.
      - Good resume coach will say to start every bullet with a strong, type-A verb
 
  (quick exercise - tree?)

    - FP is a paradigm for abstraction
      - Languages have levels of abstraction
        - Computation is very basic
          - Many approaches to first principles (Set / Category theory) led us to very basic computation (Turing / Lamba Calc)
        - Humans think differently than machines
        - Need a language that both humans and machines can understand
      - Imperative / loop / lower-level style
        - *Queue* of commands
      - Two main "conjuror" paradigms to make it less machine, more human, more DRY, easier to write, read, & maintain
        - OOP ("nouns")
          - Good OOP relies on understanding *Advanced Data Structures*, not just *Queue*
          - HR does a great job explaining the ways that JS approximates idea of class
          - You will learn some CoffeeScript and get a preview of ECMA 6's OOP features 
        - FP ("verbs")
          - FP is the second sorcerer
          - FP relates to *Stack*
        - (Also, there are many web-specific paradigms and protocols that make things more smooth and comprehensible, such as RESTful APIs)

  (exercise?)

  - What is FP, *in relation to JavaScript*?
    - JS has a foot in each camp
    - JS is in some ways a very basic imperative language
      - Hackish scripting language, single-threaded, do very dumb tasks in specific sequence
    - JS is also very easily adapted to OOP
      - (like Java, C++, Scala)
      - Everything in JS is an object
      - JSON is a very standard object notation
      - Each new instantation pattern, and each new web framework, makes it easier to model "things" with js objects
    - BUT: JS can be functional...if you just know how to use it right
      - (like LISP, Scheme, Haskell, Scala)
      - Functions are "first class citizens"
      - Can be passed as arguments/callbacks

  (exercise?)

      - Easy to write FP libraries (just as CoffeeScript w/ OOP)
      - Chart of native functions vs. underbar, underscore, ramda

  (exercise using ramda)

 
- Problems

  - Tree contains

- Topics
  - Chaining, as in jQuery or D3

- Teasers for future talks
  - How is jQuery able to do what it does?
  - "Wouldn't it be neat if?"
    - Partial Applicatives
    - Curry
      - What is function author responsible for?
      - What is function user responsible for?
  - How is Mocha able to do what it does?
    - .expect.to.beEqual("a", 1);

- Topics to defer to later times
  - Instantiations