---
layout: puzzle
title: "Coconuts and Castaways"
tags: math
difficulty: several coconuts
hints:
    - What's the least common multiple?
solutions:
    - 2519. We're looking for the smallest number m with the property that
        m + 1 is divisible by 2, 3, 4, 5, 6, 7, 8, 9, and 10. Equivalently, m = -1 (mod n) for n in {2,3,4,5,6,7,8,9,10}?
        If we turn these numbers into their prime factors, we have
        <br>
        2,3,2*2,5,2*3,7,2*2*2,3*3,2*5
        <br>
        The number 2*2*2*3*3*5*7=2520 is the smallest number divisible by all of these
        (it is the least common multiple). 2519 is then the smallest number with the
        property we're looking for.
---

Ten people land on a deserted island. There they find lots of coconuts and a monkey. During their first day they gather coconuts and put them all in a community pile. After working all day they decide to sleep and divide them into ten equal piles the next morning.

<!--more-->

That night one castaway wakes up hungry and decides to take his share early. After dividing up the coconuts he finds he is one coconut short of ten equal piles. He also notices the monkey holding one more coconut. So he tries to take the monkey's coconut to have a total evenly divisible by 10. However when he tries to take it the monkey conks him on the head with it and kills him.

Later another castaway wakes up hungry and decides to take his share early. On the way to the coconuts he finds the body of the first castaway, which pleases him because he will now be entitled to 1/9 of the total pile. After dividing them up into nine piles he is again one coconut short and tries to take the monkey's slightly bloodied coconut. The monkey conks the second man on the head and kills him.

One by one each of the remaining castaways goes through the same process, until the 10th person to wake up gets the entire pile for himself. What is the smallest number of possible coconuts in the pile, not counting the monkey's?
