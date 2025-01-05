# CSS Websites For Componenets

1.Bootstrap
2.Materilize css
3.Tailwind
4.ShadCn
5.Aceternity
6.Magic ui
7. Daisy ui
8.MUI
9. FlowBite
10. Ant Design


# Job of CSS -- 1. Selecting Element 2. styling Element


# 3 ways - 1. inline styling 2. internal styling  3. External Styling

# we can Select the CSS with  attributes like Id and Classes



# Priority of style

inline css > Internal css >External Css


# Selectors

<!-- Basics part -->

1. universal selector   --- *  at top of css
2. type selector ------ h1, p, input etc
3. class Selectors ------  .class_name
4. id selector ------- #id_name
5. attribute Selector -------  element_name[attribute], eg input[type="text"]{border: 2px solid blue}


<!-- Advanced Selectors -->

6. Descendents Selector-----
Try to read css selectors from left to right

parent descendent1 descendent2  {}

eg:- article p {border: 2px solid red};
> here p is Descendent of the article who is parent.

7. child Selector---------

it only selects all the childs of parents not the descendents

div > p{ border: 2px solid red}
it is going to select all child whihch are p of the div and do the change.

8. Adjecent sibling Selector-------  +

eg h1+p {
    color: blue;
}
// all paragraphs who are adjecent sibling of h1;

9. General Sibling Selector---------  ~
eg  h1 ~ p{ color :red};

//all paragraph which are general sibling of h1.

10 . pseudo-class selector  ------  :

eg  a:hover{ bgc:blue};

11. Pseudo -element Selectors---------   ::

eg p::first-letter{
    font-size:20px;
}

12.Group Selectors--------   use , coma eg  h1,h2,h3

# Box-Model in CSS

box-sizing:border-box/content-box;


1. Content Box
2. Border Box

1. Content Box--- (Default browser)

whatever the width and height you will decide then final output would contain your width/height + padding + border you provided.

eg:-  width=300px ,height :200px, padding=20px , border= 2px ;
Actual output of width= would be of 300+20+2= 322px
and same manner for height= 200+20+2=222px

2. Border box:-

// here width and height you will provide will be including the padding and border.

 eg:-  width=300px ,height :200px, padding=20px , border= 2px ;

actual width= 300px only including the padding and border,
and same for the height as well.

# inline vs Block Elements

inline Elements:- eg like span tag that takes only that much space of its size and rest other elements can come beyond it.

block Elemetns:- eg like div , it takes the whole block of the page wherever it is declared and other  content will come below it, it cant be beside it.
It takes Whole Block of it.

** you can interchange this Property and control it using

display: inline;
display: block;


## SVG -- you can use svg and import it to your Webiste as it is Editable

## FlexBox

1. Main Axis
2. Other Axis

// IN THE WORLD OF WEB

MAIN AXIS---------  left to right


// IN MOBILE DEVELOPMENT

MAIN AXIS ------  top to bottom


## Flexbox master class

1. justify-content---- for main axis  (x-axis)

2. Align-items---- for other axis (y-axis)

3. Flex-wrap:wrap---- to wrap when its exceeding the limit

4. order--- used to change the default order

5. flex-grow--- to divide the child portion in rows
 
6. align-self--- to give all the elements their own positions


## Grid --- you can study from grid in html file

## Mobile Responsiveness on diffrent screen pixels-- we use 

## Mediaqueries    @media (breakpoints){}

breakPoints can be say min-width:200px or max-width:300px;


# Animations in css

## transition

>Css transition enables a smooth css changes over a specified period of time.

>tranisiton-property--> at which css property to apply transition- none| all | <specific property>

>tranisiton-delay--->time after which transition will start.
>tranisiton-duration---> specifies the time for completion of transiition.
>tranisiton-timing-->how transition property change during the transition

## keyFrames

> we can define element styles at diffrent point in time used in percentage

> syntax

// animation-name
// animation-delay
// animation-duration
// animation-iteration-count
// animation-direction


@keyframes (animation-name){
    0%{
        // your changes
    }
    50% {
        //changes
    }
    1005{
        //chanhges
    }
}


# Tailwind CSS

> everything is in the form of the classes

> Note that tailwind is the mobile first design 

> whatever you are writing that for mobile and then try to change it for the bigger screens using    md: or sm: something like this


## Tailwind Layout Design

> in mobolie its generally  full single cover or max two equal covers , they dont follow the non equal covering


> in Desktop its can be designed as 1. Equal section  2. Non Equal Sections as well

// Entire thing is basically Row - Wise Designed Generally


sm: - above smaller screens
