---
title: About the BBBs
layout: about
---

<!-- Perhaps try and offset the links for jumping to avatars using javascript -->

<div class = "pageTitle">
  <h1>About the Bishops</h1>
</div> 

<body>

<!--  Anchors are withing the "authors" .md files -->

<div class = "minigroup">
  <a href="#Barra_v2">
    <img src="/assets/images/Barra_v2.png" alt="" class = "miniportrait">
  </a>
  <a href="#Ander_v2">
    <img src="/assets/images/Ander_v2.png" alt="" class = "miniportrait">
  </a>
      <a href="#Tilion">
    <img src="/assets/images/Tilion.png" alt="" class = "miniportrait">
  </a>
  <a href="#Chomsky">
    <img src="/assets/images/Chomsky.png" alt="" class = "miniportrait">
  </a>
      <a href="#Bren">
    <img src="/assets/images/Bren.png" alt="" class = "miniportrait">
  </a>
  <a href="#Kaya">
    <img src="/assets/images/Kaya.png" alt="" class = "miniportrait">
  </a>
</div>

</body>

<div class = "about">
  {% for author in site.authors %}
    <!-- <a href="{{ author.image }}"></a> -->
    <div id = "aboutgroup">
      <br><title_test>{{ author.name }}</title_test><br>
      <p3>{{ author.raceclass }}</p3><br>
      <br><p3>{{ author.image }}</p3><br>
      <p4>{{ author.content | markdownify | newline_to_br  }}</p4>
    </div>
  {% endfor %}
</div>



<br>
