---
layout: puzzle
title: "Lies, Truth, and Randomness"
tags: logic lies questions
difficulty: 2 question
solutions:
    - "One solution is as follows: Ask the first person \"
      Would you say 'yes' if I asked you if the second person is random?\"
      There are now three cases: If the first person is random, then it doesn't matter which of the other two you ask the second question to (since neither is the random one). In any other case, if the first
      person answers 'yes', then the third person can't be random, and if the
      first person answers 'no', then the second person can't be random. (This can be verified through case analysis). Ask the non-random person the following question: \"Would you say 'yes' if I asked you if the first road is the road to treasure?\" If they say `yes`, then the first road is the treasure road. If they say `no`, then the second road is the treasure road."
    - "Another solution follows the same pattern but uses different questions.
      If you simply ask the first person the question 'Is the second person random?' then the truth teller would answer yes/no (if second person was random / wasn't) and the liar would answer no/yes (and again, the random one doesn't matter). Thus we need to flip the answer of the first person conditionally (only if they are the liar). This is like a CNOT gate in quantum computing, or an XOR gate in classical computing. Thus a valid question would be \"Is exactly one of the following statements true? You are the truth teller. The second person is random.\" If the answer is 'no', then the third person is not random. If the answer is `yes` then the second person is not random. Follow up with a question to the one that is not random. The goal of the second question is to find something to which the truth teller and the liar would both answer the same thing."
hints:
    - You can't ask the same person both questions, because if they are
      random, you get no useful information.
    - Try to find one person who isn't random.
    - You want to ask the first person a question that ensures you that
      one of the other two is not random.

---

Can you figure out where the treasure is?
<!--more-->

You come to a fork in the road. One path leads to treasure, and the other path
leads to certain death. You don't know which path is which. In front of the paths
are standing three people. You know that one of them can only tell lies, and
one of them can only tell the truth, and that one of them answers randomly. You don't know which person is which.

You may ask two yes/no questions in an attempt to figure out which path
leads to the treasure. Each question can be directed at only a single person.
Can you figure out which path will take you to the treasure?
