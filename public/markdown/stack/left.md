```csharp
using Mih4n;

public class StackViewer : IViewer<Stack>
{
    public Stack View()
    {
        return new StackBuilder()
            .SetTitle("Technology Stack")
            .SetDescription("A collection of technologies and tools I use in my projects.")
            .AddItem("C#", "/img/stack/cs.svg")
            .AddItem(".NET", "/img/stack/dotnet.svg")
            .AddItem("CSS", "/img/stack/css.svg")
            .AddItem("LESS", "/img/stack/less.svg")
            .AddItem("HTML", "/img/stack/html.svg")
            .AddItem("JavaScript", "/img/stack/js.svg")
            .AddItem("TypeScript", "/img/stack/ts.svg")
            .AddItem("Vue.js", "/img/stack/vue.svg")
            .AddItem("Nuxt.js", "/img/stack/nuxt.svg")
            .AddItem("NGINX", "/img/stack/nginx.svg")
            .AddItem("Docker", "/img/stack/docker.svg")
            .AddItem("PostgreSQL", "/img/stack/postgres.svg")
            .AddItem("Git", "/img/stack/git.svg")
            .AddItem("GitHub", "/img/stack/github.svg")
            .Build();
    }
}
```

<loop style="margin-top: calc(var(--code-line-height) * 2);">
    <img src="/img/stack/cs.svg" alt="C#" title="C#">
    <img src="/img/stack/dotnet.svg" alt=".NET" title=".NET">
    <img src="/img/stack/css.svg" alt="CSS" title="CSS">
    <img src="/img/stack/less.svg" alt="LESS" title="LESS">
    <img src="/img/stack/html.svg" alt="HTML" title="HTML">
    <img src="/img/stack/js.svg" alt="JavaScript" title="JavaScript">
    <img src="/img/stack/ts.svg" alt="TypeScript" title="TypeScript">
    <img src="/img/stack/vue.svg" alt="Vue.js" title="Vue.js">
    <img src="/img/stack/nuxt.svg" alt="Nuxt.js" title="Nuxt.js">
    <img src="/img/stack/nginx.svg" alt="NGINX" title="NGINX">
    <img src="/img/stack/docker.svg" alt="Docker" title="Docker">
    <img src="/img/stack/postgres.svg" alt="PostgreSQL" title="PostgreSQL">
    <img src="/img/stack/git.svg" alt="Git" title="Git">
    <img src="/img/stack/github.svg" alt="GitHub" title="GitHub">
</loop>