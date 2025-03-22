---
title: First
date: 2020-11-11
---

```cs
using Mih4n.About;

public class AboutViewer
{
    public About View()
        => new About()
        {
            Nick = "Mih4n",
            Name = "Mikhail",
            Surname = "Loseu",
        }
}
```