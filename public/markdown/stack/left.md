<pre>
    <code class="language-cs">
        using Mih4n.Stack;
        using Mih4n.Viewer;

        public class StackViewer : IViewer&lt;Stack&gt;
        {
            public Stack View()
                => new Stack()
                {
                    Title = "Technology Stack",
                    Description = "A collection of technologies and tools I use in my projects.",
                    Stack = [
                        <carousel class="stack-carousel">
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
                        </carousel> 
                    ]
                }
        }
    </code>
</pre>

<style>
    .stack-carousel {
        height: calc(2 * var(--code-line-height))
    }
    .stack-carousel .carousel-track {
        gap: 50px;
    }
</style>