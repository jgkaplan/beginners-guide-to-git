---
layout: puzzle
title: "Chicken, Fox, and Corn"
tags: logic river
difficulty: 1 river
solutions:
    - First bring the chicken. Then come back alone. Then bring the fox.
        Bring back the chicken with you. Leave the chicken, and bring the corn.
        Go back alone. Bring the chicken.

        Here's a table illustrating this.
        <br>
        C = chicken
        <br>
        F = fox
        <br>
        B = bag of corn
        <br>
        y = you
        <div><table>
            <thead>
              <tr>
                <th>Left Side</th>
                <th>Crossing</th>
                <th>Right Side</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CBFy</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>BF</td>
                <td>yC</td>
                <td></td>
              </tr>
              <tr>
                <td>BF</td>
                <td></td>
                <td>yC</td>
              </tr>
              <tr>
                <td>BF</td>
                <td>y</td>
                <td>C</td>
              </tr>
              <tr>
                <td>BFy</td>
                <td></td>
                <td>C</td>
              </tr>
              <tr>
                <td>B</td>
                <td>yF</td>
                <td>C</td>
              </tr>
              <tr>
                <td>B</td>
                <td></td>
                <td>yFC</td>
              </tr>
              <tr>
                <td>B</td>
                <td>yC</td>
                <td>F</td>
              </tr>
              <tr>
                <td>yBC</td>
                <td></td>
                <td>F</td>
              </tr>
              <tr>
                <td>C</td>
                <td>yB</td>
                <td>F</td>
              </tr>
              <tr>
                <td>C</td>
                <td></td>
                <td>yBF</td>
              </tr>
              <tr>
                <td>C</td>
                <td>y</td>
                <td>BF</td>
              </tr>
              <tr>
                <td>yC</td>
                <td></td>
                <td>BF</td>
              </tr>
              <tr>
                <td></td>
                <td>yC</td>
                <td>BF</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>yCBF</td>
              </tr>
            </tbody>
            </table></div>
---

Bring everything across the river with you.
<!--more-->

You are walking through the woods with your chicken, your fox, and your bag of corn.
You come upon a river, with a boat in it. The boat is only big enough to carry
you and one other thing across the river at a time.

However, if you leave the fox and chicken alone, the fox will eat the chicken.
If you leave the chicken and the bag of corn alone, the chicken will eat the corn.

How can you bring everything across the river safely?
