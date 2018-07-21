# Welcome and thank you
Greetings traveler of the frozen wasteland of coding and content creation.
First of: I want to thank you for your interest in helping. That's awesome!

This document is intended to collect the small and bigger quirks of working
on and with bloodmallet.github.io (bloodmallet.com to the public). As this 
project goes on, problems arise, and question are asked this document will
get updated and extended. It should be considered a living document as everyone
is learning.

# Website
## HTML
The whole website is currently written without any renderers or templating engine.
This means for you, that you'll have to write all the code yourself. If someone is
used in multiple places, you'll probably have to copy the code around. It's certainly
a good idea to migrate to something like jekyll in the future.

## Style
- emphasize what is important
- be responsive
- be easy on the eye
- leave out what can be left out
- no clutter
- stick to the existing colours
- if working on a spec view, primarly use that specs class colour to emphasize (pay special attention to priest and rogues)
- structure your css as logical as possible
- write as many comments to explain the elements as necessary

## Functional Elements
[Bootstrap](https://getbootstrap.com/) is used to handle the usually needed elements 
in pages.

## JavaScript
While Bootstrap uses jQuery the intention for bloodmallet.com is to be as basic
as possible. For that reason JavaScript is used.
- keep it simple, it's ok if the code becomes longer because of that
- keep it compatible
- comment!
- `let snake_case_for_variables = true;`
- `function snake_case( true ) {}`

# Data Generation
Data generation is currently done by Bloodmallet. If you have a suggestion,
please use the contact options provided in-page.
