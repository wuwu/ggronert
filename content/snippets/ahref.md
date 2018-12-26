---
date: 2018-12-25T10:58:08-04:00
title: "a href link"
description: "turn enclosing div into a ref - nifty little css trick "
featured_image: '/images/thomas-tastet-1056492-unsplash.jpg'
tags: ["css","snippets"]
---
{{< figure src="/images/Franz_Marc_Blaue_Pferde.jpg" title="Franz Marc Blaue Pferde" >}}

{{< highlight html >}}
<section id="main">
  <div>
   <h1 id="title">{{ .Title }}</h1>
    {{ range .Pages }}
        {{ .Render "summary"}}
    {{ end }}
  </div>
</section>
{{< /highlight >}}

{{< highlight css >}}
.h2 a:after, h2 a:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    z-index: 10;
    top: 0;
}
{{< /highlight >}}
